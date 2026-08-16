"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Gadisar Lake
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            A short walk or auto-rickshaw ride from the fort, Gadisar Lake was built as a reservoir to 
            support the growing desert city. Now one of Jaisalmer's most photogenic spots, its shoreline 
            is lined with small temples, shrines, and chhatris - all entered through the carved sandstone 
            archway of Tilon-ki-Pol.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            A slow paddle-boat ride at sunset, with the fort visible in the distance, offers one of Jaisalmer's 
            quieter and more romantic moments - a calming balance to the busy fort lanes.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786853809/leonie-clough-bEpr_EaXxj4-unsplash_oqfma3.jpg"
              alt="Gadisar Lake Jaisalmer - sunset paddle boat with fort view"
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