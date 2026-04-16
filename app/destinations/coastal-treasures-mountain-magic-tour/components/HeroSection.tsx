"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">

      {/* Background Image */}
      <Image
        src="/kerala.jpg"
        alt="Kerala Tour"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

        {/* Badge */}
        <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm mb-4 border border-white/30">
          Kerala Tour
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
          Coastal Treasures <br /> & Mountain Magic
        </h1>

        {/* Subtitle */}
        <p className="text-white/90 max-w-2xl text-lg md:text-xl">
          Experience Kerala’s serene backwaters, lush greenery, and peaceful beaches.
        </p>

      </div>
    </section>
  );
}