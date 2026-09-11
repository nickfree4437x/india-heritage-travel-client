"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2 md:py-1">
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
           Chettinad deserves full context, not just a pin on a map. India Heritage Travel offers tailor-
           made Chettinad tours with chauffeur-driven transfers, stays in restored mansions, exclusive 
           access to tile factories, and Chettiar dinners in occupied homes. With experienced local guides, 
           women-safe planning, and concierge service throughout, we craft personalised itineraries that 
           connect Chettinad with Madurai or Thanjavur. If its forgotten mansions have captured your 
           imagination, reach out to start planning your private Chettinad heritage tour.
          </p>
        </div>
      </div>
    </section>
  );
}