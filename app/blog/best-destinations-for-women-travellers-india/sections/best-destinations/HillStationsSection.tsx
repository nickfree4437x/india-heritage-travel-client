"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 sm:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Himachal Pradesh and the Hill Stations
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785137626/pexels-matthew-solomon-1926194-31346694_p4bptq.jpg"
              alt="Himachal Pradesh hill stations - safe mountain destination for women travellers"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
             For travellers who end up drawn to mountains more than heat, Himachal Pradesh and the wider 
             Himalayan hill-station stretch feel a bit like that cooler exhale, from Nainital’s lakeside 
             calm, to Sikkim’s monastery dotted ridges . You’ll notice slower paced towns and a kind of 
             togetherness that many women travellers describe as genuinely welcoming , not just something 
             staged. Best For nature lovers, trekkers, and anyone wanting a quieter , less jammed alternative 
             to India’s most famous routes.
          </p>
        </div>
        
      </div>
    </section>
  );
}