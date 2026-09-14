"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Why Choose India Heritage Travel
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
           Mandu's depth deserves more than a standard package tour. India Heritage Travel designs private, 
           narrative-driven heritage journeys for couples, honeymooners, solo women, and culture lovers - 
           with leisurely chauffeur-driven tours, itineraries shaped around your pace and interests, luxury 
           heritage stays, licensed historian guides, women-safe options, and best-in-class service from 
           arrival to departure. If Mandu's medieval romance has captured your imagination, reach out to 
           turn this guide into a private luxury heritage itinerary.
          </p>
        </div>
      </div>
    </section>
  );
}