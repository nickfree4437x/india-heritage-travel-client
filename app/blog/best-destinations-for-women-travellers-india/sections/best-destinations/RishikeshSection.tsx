"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 sm:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Rishikesh: The Spiritual Heart of the Himalayas
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785137067/pexels-yogavidyamandiram-34060996_id67nr.jpg"
              alt="Rishikesh - spiritual heart of Himalayas with yoga and Ganga for women travellers"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
            Set in the foothills of the Himalayas, along the Ganges, Rishikesh sort of shaped itself around 
            yoga, meditation, and riverfront pauses. Somehow it keeps pulling in a surprising count of solo 
            women each year, a lot of them show up for a quick retreat, then just… don’t quite leave on time, 
            weeks pass and thats that.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2">
             Why It Works for Women Travellers What helps is the ashram and wellness economy. It brought 
             women-only lodgings, a steady vegetarian food trail, and even that very visible tourist police 
             presence-so evening walks feel normal again. Travelers mention that small factor a lot, like 
             it’s central to why the place feels safe and comfortable once the light goes down. 
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
             Best For Wellness seekers, first-time solo visitors, and anyone craving a slower more inward 
             counterpoint to a heritage heavy itinerary. 
          </p>
        </div>
        
      </div>
    </section>
  );
}