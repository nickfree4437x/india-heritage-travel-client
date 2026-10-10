"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Best Indian Festivals for Tourists: A Luxury Traveler's Guide
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Few countries celebrate life as loudly, colorfully, or even as often as India. For travelers, 
            trying to decide where to put a milestone trip, the best Indian festivals for tourists give you 
            something that no monument tour can really match, a front row seat to living culture, still 
            carried out the very same way it has been for centuries. Whether it’s the night sky lit orange 
            with a million lamps, or a city square suddenly dissolving into clouds of pink and 
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            turquoise powder, these moments turn an ordinary plan into a tale you end up repeating for years. 
            This guide pulls together ten festivals that are most worth designing your travel around, plus 
            the history behind each one. It also includes the practical detail that makes the difference 
            between a merely good festival getaway and a genuinely great one , dates, budgets, safety, and 
            etiquette. And because India only feels better when you experience it comfortably, we’ve added 
            the luxury, family, and solo-travel guidance that India Heritage
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785903907/pexels-dibakar-roy-2432543-19360699_trbskx.jpg"
              alt="Best Indian Festivals for Tourists: A Luxury Traveler's Guide"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>
      </div>
    </section>
  );
}