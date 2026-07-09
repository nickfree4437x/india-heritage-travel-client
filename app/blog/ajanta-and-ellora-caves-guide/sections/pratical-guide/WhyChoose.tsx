"use client";

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-white py-4 md:py-4">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-10">

        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          tracking-wide
          text-[#2c2c2c]
          mb-2
        ">
          Why Choose India Heritage Travel for Your Ajanta & Ellora Journey?
        </h2>

        <p className="
          text-[12px] sm:text-[13px] md:text-[14.5px]
          text-gray-700
          leading-relaxed
          font-light
          text-justify
          mb-2 md:mb-4
        ">
          We design private, immersive Maharashtra journeys for discerning international travellers.
        </p>

        {/* Features Grid */}
        <div className="space-y-3 sm:space-y-4">

          <div className="flex items-start gap-3 sm:gap-4">
            <span className="text-[#AF956C] text-[14px] sm:text-[16px] font-light leading-none mt-0.5">✓</span>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              Private air-conditioned vehicle transfers - Aurangabad to Ajanta to Ellora and back
            </p>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <span className="text-[#AF956C] text-[14px] sm:text-[16px] font-light leading-none mt-0.5">✓</span>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              Dedicated ASI-certified art historians for Ajanta's murals - transformative depth of understanding
            </p>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <span className="text-[#AF956C] text-[14px] sm:text-[16px] font-light leading-none mt-0.5">✓</span>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              Early-morning Kailasa Temple access before tour buses arrive
            </p>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <span className="text-[#AF956C] text-[14px] sm:text-[16px] font-light leading-none mt-0.5">✓</span>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              Curated heritage hotels and premium boutique stays in Aurangabad
            </p>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <span className="text-[#AF956C] text-[14px] sm:text-[16px] font-light leading-none mt-0.5">✓</span>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              Women-only tour options with female guides and hand-picked accommodation
            </p>
          </div>

          <div className="flex items-start gap-3 sm:gap-4">
            <span className="text-[#AF956C] text-[14px] sm:text-[16px] font-light leading-none mt-0.5">✓</span>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              Fully bespoke itineraries - from a focused 2-day Ajanta-Ellora circuit to 10-day Maharashtra deep dives
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}