"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2.5 md:py-4">
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
           Osian deserves careful planning, and India Heritage Travel builds every journey around it. We arrange 
           private chauffeur-driven cars with AC and expert drivers, tailor-made itineraries shaped around your 
           interests - architecture, spirituality, or romance - personally tested heritage hotels and desert 
           camps, local experts who bring Pratihara history and legend to life, carefully planned women-safe 
           travel for solo and group travellers, and round-the-clock assistance from planning to execution.
          </p>
        </div>
      </div>
    </section>
  );
}