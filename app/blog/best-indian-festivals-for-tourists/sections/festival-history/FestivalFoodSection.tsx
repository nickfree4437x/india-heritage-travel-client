"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           What to Eat: Festival Food Across India
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Festival food in India feels deeply regional, seasonal, and often cooked just once a year - like
            people wait for it. Holi brings gujiya (sweet dumplings with khoya and nuts) and chilled spiced 
            thandai. Diwali tables fill with mithai - barfi, laddoo, and kaju katli - exchanged among relatives 
            and neighbours. In Kerala, the Onam Sadhya is a vegetarian feast of up to 26 dishes served on a banana 
            leaf, while Pongal is celebrated with jaggery-sweetened rice eaten straight from the pot as it boils 
            over.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Trying these foods where they actually come from - instead of months later at a restaurant - is 
            one of the easiest ways to make a festival trip feel deeper and more authentic.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785907637/atarin-michaeli-Fgr1G8tEhoI-unsplash_wylswj.jpg"
              alt="Indian festival food - Holi Diwali Onam Pongal dishes guide"
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