"use client";

import Image from "next/image";

export default function FAQHero() {
  return (
    <section className="relative w-full h-[65vh] md:h-[93vh] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/faq/hero.jpg" // 👈 Taj Mahal type image use kar
        alt="FAQ Background"
        fill
        priority
        className="object-cover"
      />


      {/* Soft Gradient Overlay (premium look) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">

        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-semibold tracking-wide">
          FAQ’s
        </h1>

      </div>

    </section>
  );
}