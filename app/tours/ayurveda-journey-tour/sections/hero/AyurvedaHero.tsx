"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[93vh] w-full overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779545973/hero_pnpzex.webp"
          alt="Ayurveda wellness tour in India featuring traditional healing therapies and holistic wellness retreats"
          fill
          priority
          className="object-cover object-center will-change-transform"
        />
      </div>

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 Image via-black/25 to-black/55" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 text-white h-full">
        <h1 className="
          max-w-[700px]
          text-3xl md:text-4xl
          font-[600]
          leading-[1.1]
          tracking-[0.04em]
          mb-4
          opacity-0 translate-y-10
          animate-[fadeUp_1.2s_ease-out_0.3s_forwards]
        ">
          Ayurveda Wellness Tour India
        </h1>
      </div>
    </section>
  );
}