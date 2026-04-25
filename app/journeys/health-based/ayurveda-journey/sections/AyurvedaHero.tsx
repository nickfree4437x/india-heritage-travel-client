"use client";

import Image from "next/image";

export default function AyurvedaHero() {
  return (
    <section className="relative h-[91vh] w-full overflow-hidden">

      {/* 🔥 Background Image with Zoom Animation */}
      <div className="absolute inset-0 scale-[1.08] animate-[zoomHero_20s_ease-out_forwards]">
        <Image
          src="/journeys/ayurvedic/hero.jpg"
          alt="Ayurveda Journey: Explore the Science of Wellness"
          fill
          priority
          className="object-cover object-center will-change-transform"
        />
      </div>

      {/* 🔥 Gradient Overlay (same premium style) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

      {/* 🔥 Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 text-white h-full">

        {/* Heading */}
        <h1
          className="text-4xl font-bold mb-4
                     opacity-0 translate-y-10
                     animate-[fadeUp_1.2s_ease-out_0.3s_forwards]"
        >
          Ayurveda Journey:<br />
          Explore the Science of Wellness
        </h1>

      </div>

    </section>
  );
}