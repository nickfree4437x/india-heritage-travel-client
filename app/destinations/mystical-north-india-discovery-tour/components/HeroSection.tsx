"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">

      {/* Background Image */}
      <Image
        src="/varanasi.jpg"
        alt="Varanasi"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

        {/* 🔥 BADGES */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm border border-white/30">
            Spiritual Tour
          </span>
          <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm border border-white/30">
            4 Days
          </span>
          <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm border border-white/30">
            Varanasi
          </span>
        </div>

        {/* 🔥 HEADING */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          Mystical North India <br /> Discovery Tour
        </h1>

        {/* 🔥 SUBTEXT */}
        <p className="text-white/90 max-w-2xl text-lg mb-6">
          Explore spiritual India through Varanasi, temples, and sacred rituals along the Ganga.
        </p>

        {/* 🔥 CTA */}
        <button className="bg-[#9b7a50] text-white px-6 py-3 rounded-full hover:bg-[#7d6242] transition">
          Book This Journey
        </button>

      </div>
    </section>
  );
}