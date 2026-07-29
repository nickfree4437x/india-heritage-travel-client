"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 sm:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Dress Codes: What to Wear in India as a Woman
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            India’s customs are not really uniform , like, a rule that works in a Kerala temple might not 
            work in a Delhi market, and manners that feel normal in a five-star hotel lobby can suddenly 
            feel strangely stiff in a rural village. What seems to stay the same, though , is the main 
            idea underneath it all: modesty, quiet respect in places that are sacred , and a kind warmth 
            in daily interactions. People read these things the same way in almost every part of the 
            country, even if the surface details shift. When you get that right, you usually do more for 
            how at ease you’re treated, than any one safety precaution ever could. 
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785303167/pexels-suguna-15030440_uqecbc.jpg"
              alt="What to wear in India as a woman - dress code guide for female travellers"
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