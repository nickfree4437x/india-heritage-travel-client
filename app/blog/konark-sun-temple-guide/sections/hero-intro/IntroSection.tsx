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
          Konark Sun Temple Overview
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            The Konark Sun Temple officially called the Surya Deula sits on the eastern side of 
            Odisha, roughly 35 km to the north east of Puri, and around 64 km away from the state 
            capital Bhubaneswar. It was assembled in the 13th century during King Narasimhadeva I, 
            from the Eastern Ganga dynasty, and yeah the scale is kinda unreal. At the highest point, 
            the main tower, or shikhara , climbed to something near 70 metres, so back then it was 
            among the loftiest structures people could point at without laughing. 
          </p>
        </div>

        {/* Image */}
        <div className="mt-6 mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783747438/pexels-studderio-12871861_auybzu.jpg"
              alt="Konark Sun Temple chariot wheel at sunrise, UNESCO World Heritage Site, Odisha, India"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>

        <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          The whole complex is imagined as a chariot, not just in a symbolic sense, but like, built 
          that way. There are 24 intricately carved wheels that also work as sundials, fitted into 
          the temple base. By the entrance, seven stone horses are standing there, holding on, and 
          pulling with stiff intention, like they are hauling the Sun God over the horizon day after 
          day. It was later named a UNESCO World Heritage Site in 1984, and now the Archaeological 
          Survey of India keeps an eye on it, so it stays preserved.
        </p>
      </div>
    </section>
  );
}