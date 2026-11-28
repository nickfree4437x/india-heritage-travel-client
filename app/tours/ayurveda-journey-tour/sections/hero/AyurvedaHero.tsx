
"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative h-[93vh] w-full overflow-hidden"
      aria-labelledby="ayurveda-hero-title"
    >
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779545973/hero_pnpzex.webp"
          alt="Ayurveda wellness retreat in India"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center will-change-transform"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/55"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1
          id="ayurveda-hero-title"
          className="
            max-w-[700px]
            text-3xl md:text-4xl
            font-semibold
            leading-[1.1]
            tracking-[0.04em]
            mb-4
            opacity-0 translate-y-10
            animate-[fadeUp_1.2s_ease-out_0.3s_forwards]
          "
        >
          Ayurveda Wellness Tour India
        </h1>
      </div>
    </section>
  );
}
