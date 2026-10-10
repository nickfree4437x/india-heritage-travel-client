"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Jodhpur Travel Guide: The Blue City
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            No other skyline makes itself known like that of Jodhpur. Jodhpur travel guide starts where 
            every traveler's experience of the Blue City of Rajasthan starts too – from the roof terrace, 
            during the early evening time, when the indigo-colored homes of the old Jodhpur city turn dark, 
            while the Mehrangarh Fort gets lit up by the last rays of golden sunlight. It is not just any 
            city that one can visit; this place requires slow entry, revealing itself piece by piece, like 
            its narrow streets lead you to the centuries-old Marwar culture.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The second largest city in Rajasthan has always been the point of intersection between the 
            trade route across the desert, royal ambitions, and artists' patronage. At present days, it 
            is one of the must-see travel destinations for those tourists who want to combine their heritage 
            travel experience in India without making compromises – private forts, luxury palace hotels, and 
            a UNESCO-protected old town, which needs slow investigation. Whatever kind of trip you plan – 
            a honeymoon vacation, cultural tour for solo traveler, or a family heritage holiday – this 
            guide will give you all necessary information – history, architecture, attractions, food, 
            itinerary, and practical details.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[650px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786764410/sam-mathews-sYxPnaE_--Q-unsplash_bfsenc.jpg"
              alt="Complete Jodhpur travel guide - Blue City Rajasthan with Mehrangarh Fort Umaid Bhawan and desert experiences 2026"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via unsplash
          </p>
        </div>
      </div>
    </section>
  );
}