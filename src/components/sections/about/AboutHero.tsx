"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[93vh]">

      {/* Background Image (Full Banner) */}
      <Image
        src="/about/about-hero.jpg" // 👈 same type image use kar (jaise tune bheji)
        alt="About Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay (same feel as screenshot) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl">

          {/* Heading */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-4xl font-semibold leading-tight">
            Experience India's Heritage Like <br />
            Never Before
          </h1>

        </div>
      </div>
    </section>
  );
}