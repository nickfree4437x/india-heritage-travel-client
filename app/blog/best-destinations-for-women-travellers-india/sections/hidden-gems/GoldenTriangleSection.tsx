"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-3 sm:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Delhi and the Golden Triangle for First-Timers
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785137858/Taj_Mahal__Edited_odj78y.jpg"
              alt="Golden Triangle - Delhi Agra Jaipur for first-time women travellers"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via wikipedia
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            Delhi, Agra, and Jaipur kinda form that Golden Triangle - the route most people end up taking, 
            and yeah for good reason. It is the most heavily equipped loop in India when it comes to visitor 
            facilities, English-speaking guides, and transport that’s actually verified, so it feels like a 
            sensible kick off for a first trip, before you go wandering farther. 
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Best for travelers visiting India for the first time, who want to see the Taj Mahal, the Red Fort 
            and Jaipur’s palaces on a well supported, efficiently timed plan. You get a route that feels pretty 
            smooth, with sensible timing and not too much dithering.
          </p>
        </div>
        
      </div>
    </section>
  );
}