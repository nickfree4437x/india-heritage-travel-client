"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Pushkar Lake and the 52 Sacred Ghats
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Pushkar Lake is kinda the reason this town even exists, and it stays the emotional centre of, 
            well any visit. It’s ringed by 52 ghats-stone steps leading down to the water, each one donated 
            by some other royal family, merchant guild, or devotee over the centuries-so it’s treated as so 
            holy that even one bath here is said to equal years of penance somewhere else.    
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Each ghat also has its own name, strange old legend, and a patron deity, and locals will casually 
            tell you which ghat goes with which pilgrimage ritual. Varaha Ghat, Brahma Ghat, and Gau Ghat are 
            among the ones most people end up seeing, though. You’re expected to remove your shoes before 
            stepping onto the ghats, and if you’re photographing bathing pilgrims, do it with sensitivity, 
            because it’s not exactly a “do what you want” situation. Also many of the ghats have priests who 
            can arrange a short puja for a donation-honestly it’s a beautiful part of Pushkar, even if it can 
            be a little persistent sometimes, as people say.  
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[650px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787113632/Bathing_Ghats_on_Pushkar_Lake__Rajasthan_ygjjrh.jpg"
              alt="Pushkar Lake and 52 sacred ghats - holy bathing steps in Rajasthan"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via unsplash
          </p>
        </div>

        <p className="text-gray-700 mt-1 md:mt-2 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          At sunrise and then at sunset, the lake turns the whole town this gold like color, and that’s 
          usually when the spiritual side of Pushkar feels the most clear. You get temple bells 
          overlapping from multiple directions, incense drifting across the water, and this low murmur 
          of mantras rising from the ghats below.
        </p>
      </div>
    </section>
  );
}