"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">

      {/* Desktop Image */}
      <div className="absolute inset-0 hidden md:block scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785949739/148919695-56a3bf1e3df78cf7727f0149.jpg_yyep62.jpg"
          alt="Founders and team behind India Heritage Travel"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Mobile Image */}
      <div className="absolute inset-0 block md:hidden scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785946495/IMG_7211.JPG_assc0t.jpg"
          alt="Founders and team behind India Heritage Travel"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 Image via-black/30 to-black/55" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1
          className="
            max-w-[500px]
            text-3xl
            md:text-4xl
            font-semibold
            leading-[1.1]
            tracking-[0.04em]
            mb-4
            opacity-0
            translate-y-10
            animate-[fadeUp_1.2s_ease-out_0.3s_forwards]
          "
        >
          The Story Behind India Heritage Travel
        </h1>

        <p
          className="
            max-w-xl
            text-[12px]
            sm:text-[13px]
            md:text-[14.5px]
            font-light
            leading-relaxed
          "
        >
          Driven by a passion for authentic travel, we create journeys that
          reveal the true spirit of India.
        </p>
      </div>
    </section>
  );
}