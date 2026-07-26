"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-3 sm:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Is India Safe for Female Travellers? The Honest Overview
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785039695/pexels-avneet-singh-1592548633-27880128_pvdok2.jpg"
              alt="Is India safe for female travellers - women exploring with guides and safety tips"
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
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
             India isn't one place - it's 28 states and eight union territories, each moving at its own 
             pace. So asking if "India" is safe is like asking if "Europe" is safe - the answer depends 
             on where you go and how. The major tourist routes - the Golden Triangle (Delhi, Agra, Jaipur), 
             Rajasthan's heritage cities, Kerala's backwaters, and Rishikesh - are well-supported by tourist 
             police, verified transport, women-only train coaches, and international-standard hospitals. 
             Solo and group travellers who follow these circuits and use vetted accommodation report 
             overwhelmingly positive experiences.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            Where caution matters is off the main route - unlit rural roads after dark, unregulated transport, 
            and border areas. These aren't usually part of thoughtful heritage itineraries. The travellers who 
            feel safest are often those with a private, pre-vetted plan rather than improvising day by day.
          </p>
        </div>
      </div>
    </section>
  );
}