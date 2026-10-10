"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 -mt-2 md:mt-0 md:py-2">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          md:mb-2
        ">
          Suggested Itinerary: A Weekend Stay at Neemrana Fort Palace
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[14px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
        ">
          One-day option from Delhi
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Depart from Delhi at 8 a.m. and reach just in time for a heritage walk, have lunch at the terrace, see a stepwell in the afternoon and tea at Shatranj Bagh before heading back in the evening. It’s hectic, but doable.
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        {/* Heading */}
        <h2 className="
          text-[14px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
        ">
          Two-day itinerary (recommended)
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 1: Depart early morning from Delhi. Reach by noon and settle down followed by lunch. Go for a heritage walk in the levels and tea at the terrace in the evening. Have dinner along with live music and rooftop stargazing.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> •	Day 2: Early stepwell visit, breakfast, then zip-lining or a camel-cart ride. Spend the afternoon at the pool or spa. Depart after lunch, or continue to Jaipur or Alwar.
            </li>
          </ul>
        </div>
      </div>

    </section>
  );
}