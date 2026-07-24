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
          Why South India's Heritage Rivals the North
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            When North India’s heritage is basically pushed by one imperial telling , the Mughals building 
            on top of the Delhi Sultanate that was there before them - South India’s story feels more layered 
            and honestly more split by region. Tamil Nadu , Karnataka , Kerala , Andhra Pradesh and Telangana 
            each ended up with their own kind of architectural language, formed by dynasties that did not 
            really trade courts or share one big central capital. So the heritage route kind of works like a 
            chain where every state seems different on purpose : granite shore temples along Tamil Nadu’s 
            Coromandel Coast, a ruined empire capital spread out across Karnataka’s rockier boulder hills, 
            spice-trade driven colonial fusion in Kerala, and Deccan Sultanate forts in Telangana.
          </p>
        </div>

        {/* Image */}
        <div className="mt-4 mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784608923/ashim-d-silva-KF7pv-8OiyY-unsplash_hp8mie.jpg"
              alt="South India heritage rivals North - Dravidian temples and Vijayanagara ruins"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>
        </div>
      </div>
    </section>
  );
}