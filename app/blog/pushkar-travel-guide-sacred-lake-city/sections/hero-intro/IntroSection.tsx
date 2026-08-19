"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Overview: Welcome to Pushkar
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            This Pushkar travel guide starts with a kinda simple truth , few towns in India really have as 
            much spiritual weight in such a small footprint. Pushkar is set in a natural amphitheatre from 
            the Aravalli hills in Rajasthan, kind of hugging a lake that Hindu scriptures describe as one 
            of the most sacred bodies of water on earth. Pilgrims come here to bathe off a lifetime of sins, 
            you know that feeling. Travelers come too, for the same lake , the same golden light, and for 
            the sense that this tight, temple-lined town hasn’t really blinked in centuries.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Just eleven kilometres from the noise of Ajmer , Pushkar feels like a different world entirely - 
            camels strolling down lanes strung with marigolds, sadhus in saffron robes, silversmiths hammering 
            at doorway workshops, and rooftop cafés serving banana pancakes to people who planned on a day and 
            somehow stayed a week. It is both intensely devotional and, in the same breath, strangely bohemian.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[650px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787111390/anuj-bansal-WlM-gMrLlTg-unsplash_ljs8nr.jpg"
              alt="Brahma Temple Pushkar - only temple dedicated to Lord Brahma"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>
        </div>

        <p className="text-gray-700 mt-1 md:mt-2 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          For India Heritage Travel guests, Pushkar makes one of Rajasthan’s most satisfying additions to 
          a private, heritage-minded itinerary - a place that is best experienced slowly , and with a guide 
          who knows what to notice, and how to open doors a solo traveler would just walk past without even 
          realizing.
        </p>
      </div>
    </section>
  );
}