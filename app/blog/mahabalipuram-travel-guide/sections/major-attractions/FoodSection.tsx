"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Where to Eat: Food in Mahabalipuram
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783861743/12.07.2026_18.35.07_REC_med0vj.png"
              alt="Seafood and coastal cuisine at beachside restaurants in Mahabalipuram"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via mahabalipuram.com
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Mahabalipuram's food scene leans heavily on the coast fresh crab, prawns, kingfish, and 
            squid grilled or folded into South Indian curries at beachfront shacks along Othavadai 
            Street. Boutique resorts offer refined Chettinad and continental menus with sea views. 
            Don't miss a proper South Indian breakfast idlis, dosas, and filter coffee best enjoyed 
            early before sightseeing. Vegetarian options are plentiful, and most restaurants adjust 
            spice levels on request.
          </p>
        </div>
      </div>
    </section>
  );
}