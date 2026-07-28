"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 sm:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Female Travel Safety Guide for India
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
             A genuinely useful female travel safety guide doesn’t start with a list of things to fear, it 
             starts with a plan. Most of the incidents that make women hesitate about visiting India trace 
             back to the same handful of gaps, unverified transport, a hotel booked purely on price, an 
             evening spent improvising rather than pre-arranged, or maybe you just don’t know which number 
             to call if something goes wrong. 
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            Close those gaps before you land, and the rest of the trip tends to sort itself out, mostly. 
            This guide is built the way we prepare our own clients at India Heritage Travel as a practical , 
            step by step female travel safety guide covering everything from pre trip research to what’s 
            actually in a well prepared traveller’s phone. Whether you’re a first time solo visitor or 
            planning a mother daughter trip, treat this as a working checklist rather than a one time read.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785213849/pexels-itsmethomas-6392287_mzs5yw.jpg"
              alt="Female travel safety guide India - safe and confident women exploring"
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