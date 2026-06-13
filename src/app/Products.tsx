"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Category {
    name: string;
    images: string[];
};

const categories: Category[] = [
  {
    name: "Jigs and Fixtures",
    images: [
      "/jig-1.webp",
      "/fixture-1.webp",
      "/fixture-2.webp",
    ],
  },
  {
    name: "Injection Moulds",
    images: [
      "/mould-1.webp",
      "/mould-3.webp",
      "/mould-2.webp",
    ],
  },
  {
    name: "CNC Components",
    images: [
        "/auto-component-1.webp",
        "/auto-component-2.webp",
        "/auto-component-3.webp",
    ],
  },
  {
    name: "Work Tables & Trolleys",
    images: [
        "/trolley-1.webp",
        "/trolley-2.webp",
    ],
  },
];

export default function IndustrialCarousel() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeImage, setActiveImage] = useState(0);

  const currentImages = categories[activeCategory].images;

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % currentImages.length);
  };

  const prevImage = () => {
    setActiveImage(
      (prev) => (prev - 1 + currentImages.length) % currentImages.length
    );
  };

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
    setActiveImage(0);
  };

  return (
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
          {/* Left - Images */}
          <div className="relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={currentImages[activeImage]}
                alt={categories[activeCategory].name}
                fill
                className="object-cover transition-all duration-500"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg"
            >
              <ChevronRight size={20} />
            </button>

            {/* Thumbnails */}
            <div className="mt-4 flex gap-3 overflow-x-auto">
              {currentImages.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setActiveImage(index)}
                  className={`relative h-20 w-28 flex-shrink-0 overflow-hidden roundedlg border-2 ${
                    activeImage === index
                      ? "border-green-600"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Categories */}
          <div className="flex flex-col justify-center">
            <div className="space-y-3">
              {categories.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => handleCategoryChange(index)}
                  className={`w-full roundedxl border p-5 text-left transition-all duration-300 ${
                    activeCategory === index
                      ? "border-green-600 bg-green-50"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{category.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
