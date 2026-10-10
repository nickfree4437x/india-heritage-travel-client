"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-0.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Ranvas: The Palace of the Queens, Reborn
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            If Ahhichatragarh is the fort's body, Ranvas feels like its soul, and somehow both names make 
            more sense once you’re there. The name points to “abode of the queens,” but it also does more 
            than that, it hints at the group of ten havelis Maharaja Bakhat Singh laid out inside the fort 
            walls, meant for his ranis in the 18th century. Basically, you get a cluster of private 
            residences, arranged around shared courtyards, each haveli carrying a queen’s name, the one who 
            once lived there, and not just as a theme.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            As part of the same restoration program that brought the fort back to life these royal quarters 
            were turned into the Ranvas heritage hotel. There are 27 rooms made out of the original havelis, 
            and each one is furnished with a careful mix of traditional Rajasthani handiwork and quieter 
            European-style decor, with antique pieces that belong there, plus objects that come from the 
            personal collections of the Jodhpur royal family. Guests eat at different places across the 
            property, like a terrace, a courtyard, or even a rampart at sunset , and if you’re up for it, you 
            can join guided walks through the fort’s museum wings, where royal armor, textiles, and decorative 
            arts are kept.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787375029/22.08.2026_09.27.02_REC_et9rva.jpg"
              alt="Ranvas Palace Nagaur - restored queens palace with heritage suites and royal courtyards"
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