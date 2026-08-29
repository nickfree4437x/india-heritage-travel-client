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
            India Heritage Travel designs private Bundi itineraries with chauffeur-driven transfers, expert 
            local guides, handpicked boutique stays, and women-safe options. Fully shaped to your pace - 
            from a half-day stop to a longer Hadoti heritage trip. If Bundi's blue lanes and painted palace 
            have stayed with you, reach out to start planning.
          </p>
        </div>
      </div>
    </section>
  );
}