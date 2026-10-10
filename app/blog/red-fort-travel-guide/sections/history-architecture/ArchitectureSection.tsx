"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 sm:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Architecture and Design
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784278864/pexels-laura-barragan-247861147-12446384_xpqmxm.jpg"
              alt="Red Fort architecture - Mughal red sandstone design with Diwan-i-Aam and palaces"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            The The Red Fort is often seen as the high point of Mughal architectural achievement , and 
            UNESCO’s citation itself talks about it as the zenith of Mughal creativity. Its layout follows 
            Islamic palace planning principles , but you notice that each little pavilion kind of leans into 
            a blend of Persian, Timurid, and Indian building traditions - that mix is there when you look 
            closely at the carved marble screens, the scalloped arches, the floral pietra dura inlay, and 
            even the double-domed rooflines across the whole complex.
          </p>
        </div>
      </div>
    </section>
  );
}