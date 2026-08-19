"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
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
            Pushkar rewards those who wander beyond the tourist trail - and that's where India Heritage 
            Travel makes a difference. With private chauffeur-driven tours, tailored itineraries (spiritual, 
            culinary, or relaxing), curated luxury haveli and lakeside stays, skilled local guides, women-only 
            options, and concierge support from start to finish, we turn a good trip into an unforgettable one. 
            Reach out to start planning your private Pushkar itinerary.
          </p>
        </div>
      </div>
    </section>
  );
}