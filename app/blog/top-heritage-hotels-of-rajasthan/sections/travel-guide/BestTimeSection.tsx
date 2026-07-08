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
          If there is one piece of advice that applies to almost every
          heritage hotel in Rajasthan, it is this: plan your stay between
          <strong> October and March</strong>. Rajasthan's summers can be
          extremely demanding, with temperatures regularly climbing above
          45°C in several regions. Historic stone palaces and forts respond
          differently to heat than modern buildings, making the cooler months
          far more comfortable for exploring courtyards, terraces, gardens,
          and outdoor dining spaces.
        </p>
        {/* Image */}
        <div className="
        relative
        mt-4 sm:mt-6
        w-full
        h-[280px] sm:h-[420px] lg:h-[560px]
        rounded-sm
        overflow-hidden
        ">
        <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782558475/pexels-navlakha-33810147_xxymnj.jpg"
            alt="Ideal season for Rajasthan palace hotels - winter months from October to March"
            fill
            sizes="100vw"
            className="object-cover"
        />
        </div>
        <p className="mt-2 text-[12px] sm:text-[13px] text-gray-600 font-light">
         via pexels
        </p>

      </div>

    </section>
  );
}