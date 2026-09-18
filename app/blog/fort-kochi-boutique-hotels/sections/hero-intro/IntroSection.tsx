"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Fort Kochi Boutique Hotels: Colonial History & Boutique Luxury
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            There is a certain time of day in Fort Kochi when the silhouettes of the Chinese fishing nets, 
            suspended on their cantilevers against a rosy-pink sky, look like charcoal drawings - and the 
            old Portuguese, Dutch, and British neighbourhoods breathe out after a long day under the tropical 
            sun. It is precisely then that Fort Kochi reveals its charm as one of India's quietest heritage 
            destinations - a place where colonial history isn't frozen in museums but has kept living, and 
            where many old buildings have been restored into the country's finest boutique hotels.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            For the careful traveller, this small peninsula on Kerala's Malabar Coast offers centuries of 
            history alongside authentic boutique comfort. This guide - written for international travellers, 
            couples, solo women, and culture lovers - walks you through Fort Kochi's history, architecture, 
            and its best heritage stays.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789727811/pexels-p-g-354416850-36926288_s7k4c6.jpg"
              alt="Fort Kochi Boutique Hotels: Colonial History & Boutique Luxury"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>
      </div>
    </section>
  );
}