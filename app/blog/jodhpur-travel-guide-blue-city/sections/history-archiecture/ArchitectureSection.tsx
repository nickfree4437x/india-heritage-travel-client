"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The Architecture of the Blue City
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The architecture of Jodhpur works on two entirely different scales. The Mehrangarh Fort high 
            up on Chittar Hill is a brilliant example of fortification of the Rajput style: massive 
            sandstone walls, seven gates, and palatial interiors that are absolutely intricate, with 
            elaborately carved sandstone jaalis, glass mirror rooms, and gilded ceilings that temper the 
            military look of the fort. In contrast, the older part of the city provides great examples of 
            the vernacular architecture: narrow streets, stepped houses in pastel colors, and indigo-washed 
            courtyard houses.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786764940/pexels-sunaina-ravikumar-1597491343-27403540_rf6nlv.jpg"
              alt="Welcome to Jodhpur Blue City - blue houses and hilltop Mehrangarh Fort"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>
      </div>
    </section>
  );
}