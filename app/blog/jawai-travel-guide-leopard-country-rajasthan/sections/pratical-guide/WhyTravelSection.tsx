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
            Jawai is a place where the guide and camp make all the difference - and that's exactly what 
            India Heritage Travel focuses on. We create private Jawai itineraries with chauffeur-driven 
            transfers, hand-picked luxury tented camps, and expert naturalists who know these hills and 
            leopards personally. From custom pacing and boutique stays to women-safe arrangements and 
            dedicated support, every detail is managed from start to finish. Ready to build your own Jawai 
            leopard safari - standalone or as part of a broader Rajasthan journey? Our team can deliver a 
            private, fully costed itinerary within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}