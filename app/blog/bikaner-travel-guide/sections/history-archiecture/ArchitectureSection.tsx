"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Architecture and Cultural Significance
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Bikaner’s built heritage is kind of instantly recognizable: nearly everything that matters - 
            the fort, the palaces, those merchant havelis - is carved out of the local dulmera red 
            sandstone, that gives the city this rosy glow late in the afternoon. It’s not like Jaisalmer’s 
            honey-gold stone or Jodhpur’s blue old town, Bikaner’s palette feels warmer and more personal, 
            and its makers grew into a very specific local approach: those tightly laced jharokha windows, 
            gold-leaf frescoes, and the well known Usta method, where gold-relief painting is done on camel 
            hide and plaster. That last one is still practiced by only a handful of families in the old city.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786949777/alexander-schimmeck-OjOWRubFvrY-unsplash_h6yson.jpg"
              alt="Bikaner architecture - Rajput and Mughal palaces with carved sandstone"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>
        </div>
      </div>
    </section>
  );
}