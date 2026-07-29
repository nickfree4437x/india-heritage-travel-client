"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 sm:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Cultural Etiquette for Women Travellers in India
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            The single fastest way to feel at ease in India isn’t a safety app, or a confirmed itinerary. 
            It’s more like… really understanding cultural etiquette for women travellers well enough that 
            you stop, second guessing every little interaction. Dress a bit different than you would at 
            home, pick up a few greeting and dining customs, and suddenly the whole country opens up in 
            a way that guidebooks almost never capture.  
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:md-4">
            Shopkeepers seem to loosen up. Temple priests smile instead of doing those quick gestures about 
            your clothing, and strangers tend to treat you as a respectful guest, not as a clearly marked 
            outsider. This guide pulls together what we brief our own India Heritage Travel clients with, 
            right before every trip. It’s the specific regionally accurate etiquette that basically separates 
            a traveller who blends in from someone who spends the week feeling slightly out of step. None of 
            it is about “losing yourself” just to fit in. It’s closer to the same instinct experienced 
            travellers use anywhere in the world: dressing and behaving in a way that shows the place you’re 
            visiting, genuine respect.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785302701/pexels-expressionswala-23224411_cnjogq.jpg"
              alt="Cultural etiquette for women travellers in India - respectful customs and dressing guide"
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