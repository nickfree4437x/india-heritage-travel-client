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
           India Heritage Travel turns research into a personal journey rather than a packaged tour. Our 
           tailor-made itineraries include private chauffeur tours with realistic driving times, focused 
           routes across Gujarat, Kerala, Tamil Nadu, or Bengal, carefully selected accommodations, 
           experts who distinguish documented fact from folklore, women-safe planning, and concierge 
           service for couples, families, and culture-focused travellers. Tell us which stories fascinate 
           you most - Harappan urban culture, spice trails, Indo-Roman interactions, coastal temples, or 
           culinary heritage - and we'll shape them into a personalised India tour.
          </p>
        </div>
      </div>
    </section>
  );
}