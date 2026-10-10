"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Cultural Experiences in Jodhpur
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Jodhpur is a culturally diverse destination that has plenty to offer besides being a place of 
            tourism. Jodhpur holds folk and world music festivals throughout the cooler seasons of the 
            year. This attracts musicians from the Manganiyar and Langa communities of Rajasthan. Puppet 
            shows, Ghoomar dances, and turban tying can be organized at heritage hotels and other private 
            tourism organizations. If one wants to experience the culture even more, then a walk through 
            the silversmiths' and tie-dyers' workshops in the old town will be highly recommended.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786765845/15.08.2026_09.20.25_REC_ylcs7s.png"
              alt="Rajasthani folk dance performance in Jodhpur - cultural experience"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via bishnoivillage.com
          </p>
        </div>
      </div>
    </section>
  );
}