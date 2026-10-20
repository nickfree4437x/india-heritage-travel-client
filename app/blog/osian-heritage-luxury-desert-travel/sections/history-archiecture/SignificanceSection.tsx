"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            One Town, Two Faiths: Cultural Significance
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-1">
            Osian’s uniqueness lies not in having just one religion, but in how multiple religions coexist 
            in the same space. The worshipping of Jainism and Hinduism takes place on the same hilltop, 
            sharing the same goddess and community. The temple of Sachiya Mata is decorated with architectural 
            styles of Jainism but worships a goddess known among various religions. For the tourist, this 
            temple provides an opportunity to understand the complex layers of religious practice in Rajasthan 
            beyond what can be found in the guides. One must visit in the morning to witness families coming 
            with their offerings.
          </p>
        </div>
      </div>
    </section>
  );
}