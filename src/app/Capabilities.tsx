"use client";

type GalleryItem = {
  title: string;
  description: string;
  image: string;
};

const ITEMS: GalleryItem[] = [
  {
    title: "CNC Turning",
    description:
      "High-precision turning operations for shafts, bushings, threaded components, and complex cylindrical parts.",
    image:
      "/cnc-turning.webp",
  },
  {
    title: "CNC Milling",
    description:
      "Multi-axis CNC milling for intricate geometries, tight tolerances, and production-grade components.",
    image:
      "/cnc-mill.webp",
  },
  {
    title: "Plastic Injection Moulding",
    description:
      "Custom mould design and precision injection moulding solutions for scalable manufacturing.",
    image:
      "/injection-moulding.jpeg",
  },
];

export default function ManufacturingGallery() {
  return (
    <>
    <section className="w-full px-4 hidden md:block ">
      <div className="mx-auto max-w-7xl">
        <div className="flex h-[700px] flex-col gap-4 md:h-[500px] md:flex-row">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-neutral-900
                transition-all
                duration-500
                ease-out
                md:flex-1
                md:hover:flex-[2.5]
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/40
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  p-6
                  text-white
                "
              >
                <h3
                  className="
                    text-xl
                    font-bold
                    md:text-2xl
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    max-w-md
                    text-sm
                    text-white/80
                    opacity-0
                    translate-y-4
                    transition-all
                    duration-500
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="w-full px-4 md:hidden flex flex-col gap-y-5">
          {ITEMS.map((item) => (
            <div key={item.title} className=" " >
              <img src={item.image} alt={item.title} className="  h-full w-full object-cover " />
            </div>
          ))}

    </section>
    </>
  );
}
