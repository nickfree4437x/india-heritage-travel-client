"use client";

import Image from "next/image";

export default function OverviewSection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Overview: Why Mandu Belongs on Every Heritage Traveller's List
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Mandu, also Mandav or Mandavgad, is an old capital city of Malwa Sultanate which is situated 
            on a plateau in the Vindhya Range. This city is located about 90-100 km away from Indore. 
            While most monuments found in India are monuments that are building structures, Mandu is a 
            collection of monuments that are palaces, mosques, tombs and step wells.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            What makes Mandu special is its atmosphere. While other Indian monuments are usually surrounded 
            by glass panes or similar structures, there is none at all in Mandu, and one may stroll around 
            freely, take photographs during the golden hour in their private courtyard. Along with the 
            majestic views of Mandu, this gives Mandu its unique atmosphere for romantic couples, single 
            women or cultural gourmets.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789369721/sandip-roy-r-l59vloay8-unsplash_sickrd.jpg"
              alt="Mandu overview - why it belongs on every heritage traveller's list"
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