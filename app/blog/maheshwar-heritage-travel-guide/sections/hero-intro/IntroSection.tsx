"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Maheshwar: Royal Heritage Beside the Narmada
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            There is something unique about the time around Maheshwar, immediately following sunset, when 
            the ghats of the town burst into light from the lamp-lit ceremonies of aarti. This is the 
            point that remains with all who visit the town, and it is also the essence of why Maheshwar 
            heritage travel is so far removed from standard Golden Triangle travel. This is not a destination 
            which exists only for inclusion on a sightseeing itinerary. Rather, it is a working town on the 
            banks of the Narmada River, home to an 18th-century capital city of queens, a revived weaving 
            community and a daily lifestyle that is untouched by mass tourism.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            This guide will help you plan your trip with the best of factual information, on-the-ground 
            details and practicalities to help you see Maheshwar as it should be experienced.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789548756/pexels-shravankhare-5972824_mtyx6d.jpg"
              alt="Maheshwar royal heritage - Ahilya Fort and Narmada riverfront ghats"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>
      </div>
    </section>
  );
}