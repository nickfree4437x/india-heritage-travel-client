"use client";

import Image from "next/image";

export default function TravelTipsHero() {
  return (
    <section className="relative w-full h-[65vh] md:h-[93vh] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/travel-tips/hero.jpg" // 👈 Taj Mahal image
        alt="Travel Tips"
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay (depth effect) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-center">

        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-semibold tracking-wide">
          Travel Tips
        </h1>

      </div>

    </section>
  );
}