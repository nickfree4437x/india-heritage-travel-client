"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] w-full">

      {/* Background Image */}
      <Image
        src="/adventure/heritage/hero.jpg"
        alt="Royal Heritage Tour"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 text-white">

        {/* Locations */}
        <div className="mb-4 text-sm tracking-wide text-gray-200">
          Delhi &nbsp; | &nbsp; Mandawa &nbsp; | &nbsp; Jaipur &nbsp; | &nbsp; Agra
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight">
          The Royal Heritage <br /> Trail Tour
        </h1>

        {/* Subtitle */}
        <p className="max-w-xl text-lg text-gray-200 mb-6">
          Experience the grandeur of India’s royal past through majestic forts,
          vibrant culture, and timeless heritage destinations.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">

          <button className="bg-[#9b7a50] hover:bg-[#856544] px-6 py-3 rounded-lg font-medium transition">
            Book Now
          </button>

          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Explore Itinerary
          </button>

        </div>

      </div>

    </section>
  );
}