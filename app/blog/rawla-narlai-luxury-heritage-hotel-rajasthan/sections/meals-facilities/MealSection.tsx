
"use client";

import Image from "next/image";

export default function DiningSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* HEADER */}

        <div className="mb-4 md:mb-6">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2">
            Dining Experiences at Rawla Narlai, Rajasthan
          </h2>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            At Rawla Narlai, meals are never simply about food. Every dining
            experience is carefully designed to celebrate Rajasthan's culinary
            traditions, local ingredients, royal recipes, and extraordinary
            settings. From rooftop dinners beneath the stars to candlelit
            feasts beside an ancient stepwell, dining here becomes one of the
            most memorable parts of the journey.
          </p>

        </div>

        {/* FEATURE IMAGE */}
        <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">

          <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782298943/23.06.2026_12.24.30_REC_jtjjof.jpg"
            alt="Luxury Dining Experience at Rawla Narlai Rajasthan"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-1 md:mt-2 text-[11px] md:text-[12px] text-gray-600 font-light">
          Image via Rawla Narlai
        </p>

        {/* TOP DINING OPTIONS */}

        <div className="grid md:grid-cols-2 gap-6 mt-4 md:mt-6 mb-4 md:mb-6">

          <div className="border border-gray-200 bg-white rounded-md p-5">

            <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
              Jharokha Café
            </h3>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              The heart of dining at Rawla Narlai, Jharokha Café serves a
              carefully curated selection of traditional Rajasthani dishes,
              Indian favorites, and international cuisine. Whether traveling as
              a family, couple, or solo guest, the restaurant offers something
              for every palate while preserving the charm of Rajasthan's
              heritage hospitality.
            </p>

          </div>

          <div className="border border-gray-200 bg-white rounded-md p-5">

            <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
              Rooftop Dining
            </h3>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              Dining beneath the stars with panoramic views of Narlai village
              and the surrounding Aravalli Hills creates one of the property's
              most romantic experiences. The peaceful atmosphere and stunning
              scenery transform a simple dinner into an unforgettable evening.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}