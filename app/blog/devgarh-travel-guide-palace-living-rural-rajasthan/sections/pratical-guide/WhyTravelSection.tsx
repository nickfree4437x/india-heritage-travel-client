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
            A destination as rural as Devgarh is where a good operator makes the biggest difference - knowing 
            which palace suite to book, which guide has village relationships, and how to time a safari around 
            the light. India Heritage Travel builds every Devgarh itinerary around private chauffeur-driven 
            transport, customised pacing, curated luxury stays, expert local guides, and women-safe travel 
            planning. From airport pickup to rooftop dinners, it's premium end-to-end service. If this guide 
            has you imagining a night in a genuine Rajput palace and a morning in the Aravalli villages, our 
            team can create that plan around your dates, speed, and interests.
          </p>
        </div>
      </div>
    </section>
  );
}