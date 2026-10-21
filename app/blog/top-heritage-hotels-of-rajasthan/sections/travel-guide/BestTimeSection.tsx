"use client";

import Image from "next/image";

export default function BestTimeSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] leading-tight mb-2">
          Best Time to Stay in Rajasthan's Heritage Hotels
        </h2>

        <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-4">
          The period from **October to March** is generally a popular time to explore Rajasthan's heritage hotels, as cooler weather can make sightseeing and outdoor activities more comfortable. Winter is especially suitable for exploring historic courtyards, palace gardens, and nearby monuments. If you plan to travel during peak season, book your preferred accommodation in advance and check local weather conditions before your trip.
        </p>
        {/* Image */}
        <div className="
          relative
          mt-2 sm:mt-4
          w-full
          h-[280px] sm:h-[420px] lg:h-[560px]
          rounded-sm
          overflow-hidden
          ">
        <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782558475/pexels-navlakha-33810147_xxymnj.jpg"
            alt="Heritage hotel architecture in Rajasthan"
            fill
            sizes="100vw"
            className="object-cover"
        />
        </div>
        <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light">
         Image via pexels
        </p>
      </div>

    </section>
  );
}