"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Why India's Festivals Belong on Every Travel Bucket List
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            In India, the festival calendar seems to run on lunar cycles, harvest rhythms , and local deities, 
            so basically no two states celebrate in the exact same way. If you plan a trip around a festival, 
            you get to catch a place at its most lively-like markets staying open later , kitchen teams cooking 
            dishes only for that specific season, and whole neighborhoods changing shape with lights, flowers, 
            or some brief temporary art setups. And for cultural and heritage travelers, this is kind of the 
            difference between seeing history in a museum and being, well, in it.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            It also counts a lot for planning, because quite a few of the festivals below bring really strong 
            domestic crowds. That means flights , trains and heritage stays close to the festival cities get 
            booked out months early. So yeah, building your route around the festival calendar-rather than 
            running into it too late-ends up being the biggest edge a carefully planned itinerary can give.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785904229/nandu-menon-K296eLwU2fU-unsplash_s3y3xl.jpg"
              alt="Why India's festivals belong on every travel bucket list - culture colours and celebration"
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