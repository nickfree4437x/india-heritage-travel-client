"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-3 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Luxury Travel Tips for Female Travellers
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785042751/pexels-poojaindia-5002352_w3e3yg.jpg"
              alt="Luxury travel tips for female travellers - private tours and premium heritage stays in India"
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
             Luxury travel is basically taking away the friction not really, like adding indulgence for indulgence 
             sake. You get a private chauffeur for the whole stretch of the trip, plus pre-vetted heritage hotels, 
             and also a dedicated local guide. With that setup a female traveller never has to negotiate a fare, 
             or ask a stranger for directions, or turn up somewhere totally unannounced. It is sort of the gap 
             between navigating India by yourself and being guided right through it.
          </p>
        </div>
      </div>
    </section>
  );
}