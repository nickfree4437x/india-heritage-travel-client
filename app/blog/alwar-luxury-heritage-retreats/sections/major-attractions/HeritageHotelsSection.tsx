"use client";

import Image from "next/image";

export default function FoodSection() {
  return (
    <section className="w-full bg-white py-0 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Palace and Fort Architecture: What to Look For
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Alwar's buildings tell a story of Rajput confidence meeting Mughal refinement. Once you know 
            the vocabulary, every visit becomes richer. Cenotaphs - dome-shaped memorial pavilions at 
            Chhatris - and inclined rampways in the City Palace (built for royal processions instead 
            of stairs) are two defining features.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           Mirror work decorates ceilings in the Sheesh Mahal tradition. Bala Quila's hill-fort defences 
           - long walls, bastions, and gates - reflect a strong military influence. And Siliserh's lake 
           palace, once a hunting lodge, now offers relaxation with views from its balconies and terraces.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1791788062/pexels-thebioscopeguy-20000876_wmrnqx.jpg"
              alt="Alwar architecture - Rajput and Mughal features in forts and palaces"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>
      </div>
    </section>
  );
}