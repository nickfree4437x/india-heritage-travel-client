"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Orchha Heritage Hotels: Sleeping in the Shadow of a Forgotten Kingdom
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The majority of visitors come to Orchha in order to travel through time, exactly as it was 
            meant to be lost. The city is near Khajuraho and Jhansi, which made it a small footnote and 
            a destination that could take only a couple of hours during the visit to other more significant 
            attractions.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            However, spend one night in Orchha in any of the numerous Orchha hotels facing the Betwa River 
            and the sandstone palaces built by the former Bundela kings and it will be your own story. The 
            guide is aimed at people who are going to visit Orchha in order to learn its history, its 
            architecture, accommodation, eating places and other useful information about visiting this 
            part of India.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789311831/pexels-rsapmech-11473369_nrbtsu.jpg"
              alt="Orchha Heritage Hotels: Sleeping in the Shadow of a Forgotten Kingdom"
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