"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-3 sm:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Goa: Beaches, Ease and Effortless Solo Travel
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785137424/pexels-j-singh-166004985-10898929_bbhchi.jpg"
              alt="Goa beaches and solo travel - safe coastal destination for women travellers"
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
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            Goa still ends up being one of the easiest places in India for a woman to travel, basically on her own 
            terms-easy going dress norms, a tight cluster of well-reviewed boutique stays, and this social walkable 
            beach-town rhythm that makes meeting other travellers feel effortless, almost.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            Why this works for women travellers South Goa, in particular, is usually associated with calmer 
            beaches and boutique resort pockets, with security that runs round the clock which makes it a 
            comfortable base for travellers who want proper beach time but also don’t want to give up on 
            safety infrastructure, you know.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Best For People looking for a relaxed wind-down at the end of a longer India itinerary, or 
            simply a self-contained beach and wellness escape. 
          </p>
        </div>
        
      </div>
    </section>
  );
}