"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Food & Culinary Experiences in Aurangabad
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783597241/0w3a8940_glz7z3.webp"
              alt="Naan khaliya traditional Aurangabad dish with mutton korma, Maharashtra India cuisine"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via amlanthetramp.com
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Aurangabad food culture kind of sits where Deccan royal cooking meets Mughal culinary ways, 
            like there’s this long chain of tradition behind it, and yes it’s also about the city being a 
            capital spot during Aurangzeb’s Mughal presence in the south. Most of the best eating happens 
            in the Muslim majority old-town area , that’s where you go to feel it properly. • Naan Khaliya: 
            this is Aurangabad’s signature thing thin stacked , kind of lacy bread, served with slow-cooked 
            mutton or chicken korma. You’re supposed to hunt for it in old-town restaurants that usually 
            open only after evening prayer.
          </p>
        </div>
      </div>
    </section>
  );
}