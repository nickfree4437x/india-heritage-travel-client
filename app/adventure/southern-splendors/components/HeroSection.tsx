"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">

      {/* Background Image with Zoom */}
      <div className="absolute inset-0 scale-[1.08] animate-heroZoom">
        <Image
          src="/adventure/splendors/banner.jpg"
          alt="Southern Splendors"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Gradient Overlay (same as previous) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 text-white h-full max-w-5xl mx-auto">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight opacity-0 animate-fadeUp delay-300">
          Southern Splendors: Culture & Nature Trail Tour
        </h1>

      </div>
    </section>
  );
}