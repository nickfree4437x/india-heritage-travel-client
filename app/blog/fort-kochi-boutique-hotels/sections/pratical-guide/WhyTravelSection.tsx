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
           Fort Kochi rewards travellers who explore with local depth - and that's exactly what India Heritage Travel offers. We arrange luxury chauffeur-driven tours, customised itineraries (including Biennale-season visits), handpicked boutique hotels, and experienced guides who bring Portuguese, Dutch, and British history to life. With women-specific itineraries and end-to-end service from airport pickup to drop-off, we turn this guide into a personally curated journey. Reach out to start planning.
          </p>
        </div>
      </div>
    </section>
  );
}