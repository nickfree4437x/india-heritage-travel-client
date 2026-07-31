"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Travel Insurance for India: Why Every International Traveller Needs It
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Few countries reward the equipped traveler quite like India does. One week you’re watching the 
            sun rise over the marble domes of the Taj Mahal, and the next you are winding through those 
            Himalayan passes or sailing the backwaters of Kerala. It’s a land of striking contrasts - and 
            that same mix of scenery, altitude and infrastructure is kind of exactly why travel insurance 
            for India should sit at the very top of every pre-departure checklist, right next to your visa 
            and your flight confirmation. 
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            At India Heritage Travel, we craft private, luxury trips for discerning travelers from the 
            United States the United Kingdom, Europe and Australia. And in nearly two decades of curating 
            heritage tours, the question we hear again and again after “What should I pack?” is, “Do I 
            actually need travel insurance for India?” This guide answers it properly and in full: what 
            the policy should cover, how much it costs, how visa rules view it, and how to choose a plan 
            that fits the way you mean to roam- whether it’s a private car through Rajasthan’s forts, a 
            wildlife safari in Ranthambore, or a high-altitude getaway to Ladakh.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785477612/pexels-ryan-thomas-307183342-33332918_ao0bzy.jpg"
              alt="Travel insurance for India - why international travellers need coverage"
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