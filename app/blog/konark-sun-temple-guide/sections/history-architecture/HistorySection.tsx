"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            History: The Story Behind the Chariot of the Sun
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[650px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783748781/Konark_Sun_Temple_Puri_district__Odisha__India_3_1_pck3ij.jpg"
              alt="Konark Sun Temple history - 13th-century stone chariot built by King Narasimhadeva I"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via wikipedia
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            King Narasimhadeva I sort of commissioned the Konark Sun Temple, to honor his military 
            victories, and really most notably his campaigns toward the Delhi Sultanate. In a way it 
            was a devotional act, but also a clear statement of power because the Sun God Surya , 
            worshipped across the Indian subcontinent as the giver of life and justice, would basically 
            “preside” over a monument that announced the strength of the Eastern Ganga dynasty to 
            anyone who took the time to look.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            As for how it was built, reports say 1,200 craftsmen worked there for 12 years. They used 
            the region’s rather specific reddish brown chlorite stone (people there call it khandolite)
            and a greenish khondalite stone for the base. The workmanship they left behind in the carved 
            work erotic sculptures, heavenly nymph like figures, war related scenes, animals, and those 
            tight intricate geometric designs is honestly hard to match, even in Indian medieval art.
          </p>
        </div>
      </div>
    </section>
  );
}