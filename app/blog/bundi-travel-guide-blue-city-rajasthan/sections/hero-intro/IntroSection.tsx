"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Bundi Travel Guide: Rajasthan's Forgotten Blue Kingdom
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            If you ask any visitor about Rajasthan's well-known blue city they will tell you about Jodhpur. 
            There exists an undiscovered destination which people can find within Aravali hills that stands 
            three hours away from Jaipur. The guide to Bundi will discuss this distinct area which features 
            blue-painted walls on buildings and a 14th century fort and human-made structures that extend 
            fifty feet below natural stone surfaces and an art school which thrived for two centuries in 
            complete seclusion.
          </p>
        </div>

        {/* Image */}
        <div className="mb-1 md:mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1788001904/chhatr-palace-bundi-rajasthan-2-attr-hero_okcz0k.jpg"
              alt="Bundi travel guide - forgotten blue kingdom with Taragarh Fort and stepwells"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via unsplash
          </p>
        </div>
      </div>
    </section>
  );
}