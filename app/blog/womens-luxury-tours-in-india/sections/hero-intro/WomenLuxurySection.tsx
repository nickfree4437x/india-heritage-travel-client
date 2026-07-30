"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Women's Luxury Tours in India: The Complete Guide to Safe, Elegant & Empowering Travel
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            There is a particular traveller India has been waiting for - and she finally showed up in force. 
            Across Rajasthan's marble courtyards, Kerala's spice-scented backwaters, and Varanasi's riverside 
            ghats, more women than ever are choosing to experience India on their own terms - quietly guided, 
            beautifully hosted, and absolutely unhurried. Women's luxury tours in India are no longer a niche 
            request; they're one of the fastest-growing categories in the country's travel world, and for good 
            reason. 
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            When the small details are tended to - a trusted guide who understands female comfort, a chauffeur 
            who knows every back road to a half-forgotten stepwell, a palace suite with a view worth waking up 
            for - India stops feeling intimidating and becomes almost effortless to love. This guide covers 
            everything a discerning woman traveller needs: where to go, what to expect, how to stay safe without 
            losing spontaneity, and how a specialist operator like India Heritage Travel can transform a good 
            trip into an extraordinary one.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785387337/pexels-bhawanirajkclicks-9857947_fw9odm.jpg"
              alt="Women's luxury tours India 2026 - solo discerning female travellers"
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