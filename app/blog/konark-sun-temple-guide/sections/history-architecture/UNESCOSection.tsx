"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            UNESCO World Heritage Significance
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783749950/Dance_Pavilion__Kon%C3%A2rak_01_1_ngdayq.jpg"
              alt="Konark Sun Temple UNESCO World Heritage Site - 13th-century Kalinga architecture with stone chariot"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via wikipedia
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            King Narasimhadeva I sort of commissioned the Konark Sun Temple, to honor his military 
            victories, and really most notably his campaigns toward the Delhi Sultanate. In a way it 
            was a devotional act, but also a clear statement of power because the Sun God Surya , 
            worshipped across the Indian subcontinent as the giver of life and justice, would basically 
            “preside” over a monument that announced the strength of the Eastern Ganga dynasty to 
            anyone who took the time to look.
          </p>
        </div>
      </div>
    </section>
  );
}