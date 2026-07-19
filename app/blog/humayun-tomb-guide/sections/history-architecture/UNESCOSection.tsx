"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 sm:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            UNESCO World Heritage Significance
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784446202/pexels-axp-photography-500641970-19149638_ejotxy.jpg"
              alt="Humayun's Tomb UNESCO World Heritage Site - Mughal garden-tomb in Delhi"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Humayun's Tomb was listed as a UNESCO World Heritage Site in 1993. It is the first grand 
            example of the Charbagh garden-tomb style, shaping Mughal architecture for the next century. 
            The inscribed 27-hectare complex includes Isa Khan's Tomb, Nila Gumbad, Bu Halima's Tomb, 
            Afsarwala, and Arab Sarai - once home to the craftsmen who built the mausoleum. Now cared 
            for by the ASI, recent restoration work, including the original water channels, has revived 
            its Mughal-era splendour.
          </p>
        </div>
      </div>
    </section>
  );
}