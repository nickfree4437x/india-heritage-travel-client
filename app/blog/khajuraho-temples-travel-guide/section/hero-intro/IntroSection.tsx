"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-2
        ">
          Introduction - Where Stone Becomes a Philosophy
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            There is a moment at Khajuraho, usually in the early morning when the light falls at an
            angle across the carved sandstone walls, when you stop trying to understand what you are
            looking at and simply surrender to the fact that you are in the presence of something
            transcendent.
          </p>
        </div>

        {/* Image */}
        <div className="mt-6 mb-4 md:mb-6">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783254177/deepak-gupta-5AVJYGIQM4U-unsplash_sfwzj5.jpg"
              alt="Panoramic view of the Western Group of temples at Khajuraho UNESCO World Heritage Site"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>
        </div>

        <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          Khajuraho is one of those rare places - in India or anywhere - that showcases human artistic
          vision at its peak. Created by the Chandela rulers from 950 to 1050 CE, the temples are not
          just monuments but a profound cosmic idea made tangible in sandstone. While famously associated
          with erotic sculpture, that's only a fragment. The temples are rich with gods, celestial beings,
          scenes of life, and intricate symbolism that resonate quietly but deeply. This guide is designed
          for travellers who want to understand Khajuraho's history, architecture, and meaning - not merely
          tick it off a list.
        </p>
      </div>
    </section>
  );
}