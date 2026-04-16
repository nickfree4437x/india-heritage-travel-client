"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh]">

      {/* Background Image */}
      <Image
        src="/adventure/delights/hero1.jpg"
        alt="Southern Delights Tour"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Southern Delights Tour
        </h1>

        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-md font-medium transition">
          Book Now
        </button>

      </div>
    </section>
  );
}