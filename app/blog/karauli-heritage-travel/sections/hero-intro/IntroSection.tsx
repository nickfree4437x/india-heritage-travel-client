"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Why Karauli Belongs on Your Rajasthan Itinerary
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Between the bustling streets of Jaipur and the tiger reserve of Ranthambore lies a kingdom 
            that escapes most tour plans. The Karauli heritage tour takes one to a small fortified town 
            along the Bhadravati river, a palace of red sandstone steeped in the legacy of its rajas, a 
            Krishna temple where pilgrims stand in long lines for only one offering of sweets, and a 
            hilltop shrine of the goddess visited by thousands of devotees each year in springtime.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            It is an unrefined place, and this is what makes it special. What Karauli offers is the 
            experience of a traveller who cares more about atmosphere than spectacle: the painted 
            ceilings of partially renovated palaces, evening prayers in a courtyard scented with smoke, 
            and a journey into ravine land to a dilapidated fort. For those who have toured the Golden 
            Triangle and seek the real Rajasthan beyond these famous cities, this is a unique discovery.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1791786576/pexels-axp-photography-500641970-19149575_mmx02m.jpg"
              alt="Karauli Rajasthan itinerary - why it belongs with Kaila Devi Temple and City Palace"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via encrypted-tbn0
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
          This guide tells you all you need to know about the history behind the sights you see, the 
          sites worth visiting, how to pick your accommodation, and how to plan your journey to and from 
          Jaipur and Agra. This guide is upfront about what is faded, closed down, or not proven, 
          because reliable luxury travel requires realistic expectations.
        </p>
      </div>
    </section>
  );
}