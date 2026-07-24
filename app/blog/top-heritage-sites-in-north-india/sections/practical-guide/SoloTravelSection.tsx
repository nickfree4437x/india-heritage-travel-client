"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 sm:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Solo Traveler Tips
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784530516/pexels-bhawanirajkclicks-9574973_jux098.jpg"
              alt="Solo traveler exploring North India - heritage sites with guide and local tips"
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
            INorth North India’s major monuments feel fairly comfortable for solo travelers, with a steady 
            kind of visitor flow and some formal ticketing all the way through. For solo female travelers, 
            having transport already arranged between cities, using vetted guides, and staying somewhere 
            with strong solo-traveler reviews actually makes a meaningful difference-especially in the 
            busier zones like Old Delhi, and at Varanasi’s ghats where, a local guide brings context plus 
            a bit of peace of mind, too.
          </p>
        </div>
      </div>
    </section>
  );
}