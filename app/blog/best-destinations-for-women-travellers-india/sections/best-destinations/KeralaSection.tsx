"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 sm:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Kerala: Backwaters, Hill Stations and the South
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            Kerala has this whole different kind of travel register - kind of slower, greener, and more centered 
            on water instead of stone, you know. Like a houseboat cruise across the Alleppey backwaters, then a 
            couple days that feel unhurried among the tea estates in Munnar, plus an evening down on Varkala’s 
            clifftop beaches kind of all together make up one of the more restorative routes in the country
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785136713/pexels-aravind-p-s-1808524778-32992107_bts154.jpg"
              alt="Kerala backwaters and hill stations - safe destination for women travellers"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>
        
        <div className="mb-1">
          <h2 className="text-[15px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            Why It Works for Women Travellers
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            Kerala is often mentioned as one of the calmest, most educated, and most traveler-friendly 
            states in India, with a long established homestay and houseboat setup that seems to work 
            especially well for women who are traveling alone, or with small groups of friends, in a more
            grounded way.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            Best For People who want green scenery and peace but also culture, and also anyone easing into 
            their first solo trip around India.
          </p>
        </div>
        
      </div>
    </section>
  );
}