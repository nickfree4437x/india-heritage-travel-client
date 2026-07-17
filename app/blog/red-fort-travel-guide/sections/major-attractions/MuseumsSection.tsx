"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 sm:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Museums and Exhibitions
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784280775/Red_Fort_8_rkdyxs.jpg"
              alt="Red Fort museums and exhibitions - Mughal artifacts and Indian history displays"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via wikipedia
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            A few museums that opened in 2019 now live in the fort’s colonial-era barracks, kinda like 
            they’ve always belonged there. One barrack is set aside for the 1857 War of Independence, 
            another is devoted to the Jallianwala Bagh massacre, and a third spotlights Subhas Chandra 
            Bose along with the Indian National Army. There’s also a fourth, called Drishyakala, which 
            feels like a collaboration between the Archaeological Survey of India and the Delhi Art Gallery, 
            featuring Indian art that’s connected to the fort’s own story. These places are air conditioned, 
            not usually jammed up, comparatively calm you could say, so they’re a pretty solid option for 
            the hottest hours of the day.
          </p>
        </div>
      </div>
    </section>
  );
}