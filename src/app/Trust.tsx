"use client";

interface TLogo {
    src: string;
    alt: string;
};

const logos: TLogo[] = [
    { src: "/client-saint-gobain.webp",  alt:"saint-gobain" },
    { src: "/client-machine-maze.webp",  alt:"machine-maze" },
    { src: "/client-indwel.webp",        alt:"indwel" },
    { src: "/client-sr-engg.webp",        alt:"sr-engineering" },
    { src: "/client-primetek.jpeg",        alt:"prime-tek" },
    { src: "/client-pms.webp",        alt:"pheonix" },
];

export default function TrustedBy() {
  const items = [...logos, ...logos];

  return (
    <section className="">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden">
          <div className="marquee-track">
            {items.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-6 flex h-24 w-48 items-center justify-center rounded-xl bg-white"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
