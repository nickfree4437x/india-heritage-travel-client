"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0 -mt-2">
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
            Nagaur is easy to miss - and easy to get wrong. A rushed day trip barely scratches its layered 
            history, and planning solo can be frustrating. India Heritage Travel weaves Nagaur into relaxed 
            Rajasthan itineraries with private chauffeur tours, tailored pacing, carefully chosen heritage 
            stays (like Ranvas), expert guides fluent in its Rajput-Mughal-Sufi past, and women-safe 
            arrangements for solo travellers. This guide is a start - but a well-crafted itinerary makes 
            Nagaur one of the most memorable days of your Rajasthan journey.
          </p>
        </div>
      </div>
    </section>
  );
}