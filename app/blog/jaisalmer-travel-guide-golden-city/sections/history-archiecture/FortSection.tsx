"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Jaisalmer Fort: The Heart of the Golden City
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Jaisalmer Fort - people often say Sonar Quila, like the “Golden Fort” - is kinda the main reason 
            most travelers show up in this slice of Rajasthan, and it really needs time without rushing. 
            It sits up on Trikuta Hill, and it is one of those rare fortresses in the world that is still 
            inhabited, not just kept behind railings. About a quarter of the old city’s population lives 
            within its walls, in homes that get carried on for generations, from parents to kids, and then 
            on. That kind of living vibe is what makes Jaisalmer different from almost every other fort in 
            India. You aren’t really pacing around in some tidy preserved shell, it feels more like an active 
            neighborhood where shops, cafés, temples, and even school runs move around you, every day.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            You’ve got four imposing gateways made from Indian rosewood, and they sort of reach around 60 
            feet, leading you into this fort’s tangle of lanes. Once you’re in, don’t skip the cluster of 
            Jain temples near the centre, they’re well known for ceiling carvings arranged in concentric 
            rings of figures. Also, the old royal palace complex is worth lingering around, because it 
            gives some of the best rooftop panoramas across the city and out toward the desert beyond. 
            Honestly, early morning, and late afternoon are by far the best times to be inside the fort, 
            both for the light and for that relatively calm moment before the day’s tour groups start 
            arriving.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786853072/dharm-chauhan-ZITclJkZQc0-unsplash_t39owz.jpg"
              alt="Jaisalmer Fort - heart of the Golden City with golden sandstone walls"
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