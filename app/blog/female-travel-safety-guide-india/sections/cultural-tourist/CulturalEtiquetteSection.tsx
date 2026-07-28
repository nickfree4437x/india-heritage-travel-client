"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 sm:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Cultural Etiquette and What to Wear
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785223554/pexels-suguna-15030440_x9svis.jpg"
              alt="Cultural etiquette and what to wear in India - respectful dressing for women travellers"
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
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Outfit is one of the simplest and honestly most effective tools you can use as a female traveller 
            in India not really about restriction, more about blending in, like rather than drawing attention, 
            you know . When you do it right, people kinda see you as “just another one”, not the obvious stranger. 
            Try to go with loose, breathable fabrics that cover shoulders and knees… linen and cotton kurta sets 
            plus wide trousers tend to work great in the heat. Always keep a light scarf on you, because it turns 
            almost any look into temple appropriate clothing in a second, no drama, no extra planning. Save the 
            more fitted pieces or sleeveless styles for hotel pools , resort grounds, and the more relaxed beach 
            areas like Goa, where the vibe is different. And walk with confidence, not in a rushed manner; keep 
            engagement low with those unsolicited approaches. That calm, unhurried pace comes off as local savvy, 
            instead of rudeness.
          </p>
        </div>
      </div>
    </section>
  );
}