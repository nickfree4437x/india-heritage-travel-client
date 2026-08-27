"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0 md:mt-0 -mt-2">
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
            Khejarla rewards travellers who arrive with a plan - not a destination to figure out on 
            arrival. India Heritage Travel builds each trip around private chauffeur transfers, customised 
            pacing (half-day to multi-night), curated luxury suites, expert local guides for safaris and 
            villages, women-safe options, and end-to-end service. If a night inside a real desert fort 
            appeals to you, reach out to build your itinerary.
          </p>
        </div>
      </div>
    </section>
  );
}