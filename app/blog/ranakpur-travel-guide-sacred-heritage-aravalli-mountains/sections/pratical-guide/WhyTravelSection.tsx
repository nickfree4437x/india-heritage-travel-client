"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:mt-0 -mt-2 md:py-1">
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
           The best way to plan a Ranakpur itinerary is with India Heritage Travel, specialists in private, 
           fully customised tours through Rajasthan's heritage circuit — including Ranakpur, Kumbhalgarh, 
           Udaipur, and beyond. We offer private chauffeur-driven tours, curated luxury stays, expert local 
           guides, and women-safe travel arrangements. From airport transfers to final farewell, every 
           detail is handled. Reach out to build your private itinerary around this remarkable corner of 
           the Aravalli mountains.
          </p>
        </div>
      </div>
    </section>
  );
}