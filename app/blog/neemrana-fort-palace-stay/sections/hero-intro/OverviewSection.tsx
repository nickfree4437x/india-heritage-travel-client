"use client";

import Image from "next/image";

export default function OverviewSection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Overview: Why Neemrana Is India's Most Atmospheric Fort Hotel
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Neemrana is located along the road connecting Delhi with Jaipur, being about 120 km away from the capital city and 155 km away from Jaipur. The location is what makes this place popular. It is convenient for an escape from Delhi during weekends but once you cross its threshold, you feel like you have stepped into a different era.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The reason why Neemrana differs from many other historic hotel fortresses in India lies in the way it has been preserved. In fact, instead of transforming this fort into a fairy-tale palace, its restorers have left everything the same – stone, plaster, awkward stairs and angled courtyards – adding comfort to it. The rooms here vary not only in sizes but also in outlooks. Some of them overlook terraces in the garden, others provide views of the plains while still others look upon quiet courtyards where there is nothing but a ceiling fan and peacock calling somewhere afar.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1791614190/Facade_Premises__Neemrana_Fort_Palace__palace_hotel_in_Rajasthan_12_an02mo.avif"
              alt="Neemrana Fort Palace overview - India's most atmospheric fort hotel in Rajasthan"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via neemranahotels.com
          </p>
        </div>
      </div>
    </section>
  );
}