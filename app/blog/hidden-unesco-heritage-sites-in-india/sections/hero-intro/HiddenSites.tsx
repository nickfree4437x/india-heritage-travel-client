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
          mb-1
        ">
          Hidden UNESCO Heritage Sites in India: The World Heritage Trail No One Told You About
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Most travelers plan India around the Taj Mahal, Jaipur's forts, Varanasi's ghats, and Kerala's 
            backwaters - all extraordinary, none truly unknown. But nearly nobody plans for India's hidden 
            UNESCO sites: an abandoned Sultanate capital reclaimed by jungle, a seven-story stepwell carved 
            in devotion, rock shelters painted 30,000 years before the pyramids, and royal burial mounds of a 
            forgotten dynasty. India has 44 UNESCO World Heritage Sites - more than all but five countries - 
            yet international attention stops at just a few. The rest remain quiet, impeccably preserved, and 
            almost empty of tourists. For a certain kind of traveler, that quiet is the point. This guide 
            explores the best lesser-known UNESCO sites in India: why they matter, where they fit into a 
            private, unhurried itinerary, and how India Heritage Travel crafts trips around them - for 
            those who seek depth over checkboxes.
          </p>
        </div>

        {/* Image */}
        <div className="mt-4 mb-2 md:mb-2">
          <div className="relative h-[280px] md:h-[420px] lg:h-[580px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784723656/Rani_ki_vav_02_k0aksn.jpg"
              alt="Hidden UNESCO heritage sites in India - offbeat World Heritage trail"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via wikipedia
          </p>
        </div>
      </div>
    </section>
  );
}