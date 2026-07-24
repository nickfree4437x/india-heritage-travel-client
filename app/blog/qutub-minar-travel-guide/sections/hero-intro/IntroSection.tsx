"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-2
        ">
          Introduction - The Tower That Changed Delhi Forever
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            There There, the Qutub Minar is one of Delhi’s most striking monuments. it’s standing 72.5 
            metres high, a towering red sandstone minaret that kind of dominates the Qutub Complex in 
            Mehrauli, and honestly it gives visitors this strong feeling for what medieval Delhi’s 
            skyline must have looked like, back in 1193. This Qutub Minar travel guide talks about the 
            monument’s seven-century past, its remarkable mix of architectural styles, and the broader 
            Qutub Complex too — including the Alai Minar, Alai Darwaza, tombs, madrasa ruins, and that 
            well known 1,600-year-old Iron Pillar. So whether you only have 90 minutes or you can stay for several hours, the whole place rewards both a quick walkthrough and a deeper dig around. 
          </p>
        </div>

        {/* Image */}
        <div className="mt-6 mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[610px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784173730/aamir-ahmad-7hmAhQww2oE-unsplash_uaezes.jpg"
              alt="Panoramic view of the Qutub Minar complex gardens and monuments in Mehrauli South Delhi"
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
      </div>
    </section>
  );
}