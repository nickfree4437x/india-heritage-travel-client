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
          What the Official Data and Advisories Actually Say
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            TIt's worth looking past forum anecdotes and checking the sources that actually track this. US 
            and UK government travel advisories place India at a standard "exercise increased caution" level 
            - the same tier as many other well-known international destinations, not a blanket "don't go" 
            warning. Independent safety trackers also point to two practical realities: road travel depends 
            on having a reputable driver, and solo female safety improves significantly with preparation - 
            dressing in line with local norms and using verified transport. None of this is unique to India; 
            it's the same guidance for solo travel almost anywhere. For destination-specific planning, 
            cross-reference the Ministry of Tourism, Incredible India, and UNESCO site listings to get 
            on-the-ground details, not just general hints.
          </p>
        </div>
      </div>
    </section>
  );
}