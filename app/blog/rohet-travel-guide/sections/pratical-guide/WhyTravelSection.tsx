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
            Rohet rewards travellers who move beyond the surface - and that's where India Heritage Travel 
            excels. We craft every Rohet plan with private chauffeur transfers, customised pacing, 
            curated luxury stays, expert local guides with genuine Bishnoi village connections, 
            women-safe planning, and seamless end-to-end service. Reach out to weave Rohet into a 
            private, fully customised Rajasthan itinerary.
          </p>
        </div>
      </div>
    </section>
  );
}