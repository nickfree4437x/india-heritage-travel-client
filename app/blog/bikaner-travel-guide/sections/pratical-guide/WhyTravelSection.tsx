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
          Why Travel to Jodhpur with India Heritage Travel
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            We use only high-class palace hotels, luxury tents, and heritage properties for accommodation, 
            and our knowledgeable local guides will be able to tell you the history behind every landmark, 
            no matter whether it's Mehrangarh's ramparts or old-city silver markets. Women traveling alone 
            and families will receive safety guarantees at all times as well as comfortable options of 
            women-only tourism. Let India Heritage Travel make the dream of visiting Jodhpur come true!
          </p>
        </div>
      </div>
    </section>
  );
}