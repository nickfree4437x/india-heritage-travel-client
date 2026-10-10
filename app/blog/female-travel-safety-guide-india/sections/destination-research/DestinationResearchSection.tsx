"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-3 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Researching Your Destination
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785222186/pexels-aymyogaschool-1108919-2101774_ztvpoa.jpg"
              alt="Researching destination for women travel India - safe cities and heritage spots"
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
             Not every Indian city or region, really needs the same degree of caution, you know, and honestly 
             a little bit of destination research goes a long way, like way more than people expect. Try to 
             stay with the well known tourist routes for a first trip- Rajasthan, Kerala, Delhi-Agra-Jaipur, 
             and Rishikesh are all very documented, also they’re well supported by tourist infrastructure. 
             Then go ahead and read recent reviews from other women travellers, instead of leaning on general 
             forum noise, or those old blog posts that don’t quite match what’s happening now.
          </p>
        </div>
      </div>
    </section>
  );
}