"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/adventure/splendors/banner.jpg"
        alt="Southern Splendors"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">

        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
          Southern Splendors
        </h1>

        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Book Now
        </button>

      </div>
    </section>
  );
}