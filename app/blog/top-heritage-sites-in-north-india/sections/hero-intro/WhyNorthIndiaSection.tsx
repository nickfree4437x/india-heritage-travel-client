"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Why North India Is India's Heritage Heartland
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            North India’s heritage density kind of boils down to geography plus power. Delhi, Agra, and Jaipur 
            were like at the middle of successive empires— the Delhi Sultanate, then the Mughal Empire, and 
            afterward the Rajput kingdoms, that sometimes pushed back while also joining in, depending on the 
            moment. Each one built in a way meant to outlast the last, so the timeline sort of stacks. So you 
            end up with a place where you can follow almost a thousand years of South Asian architecture, all 
            in the span of about a week, yes. You’ll see 12th-century victory towers, then 16th-century garden 
            tombs, 17th-century marble mausoleums, and even hilltop forts that are still occupied by descendants 
            of the very families that raised them.
          </p>
        </div>

        {/* Image */}
        <div className="mt-4 mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784524739/pexels-aj4xo-29429174_w9sxuj.jpg"
              alt="North India heritage heartland - Mughal and Rajput monuments with rich history"
              fill
              priority
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