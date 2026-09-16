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
           Planning Maheshwar well is about local access and pacing- and that's where India Heritage 
           Travel adds value. We arrange chauffeured cars across Indore, Maheshwar, Mandu, and Omkareshwar, 
           design itineraries around your interests (architecture, textiles, food, photography), and secure 
           elegant heritage stays in forts and havelis. Our guides bring Holkar history, temple architecture, 
           and Maheshwari weaving to life, with women-safe transport and hotels throughout. If Maheshwar is 
           part of your wider Madhya Pradesh itinerary, our specialists can build a private, fully customised 
           route around your dates.
          </p>
        </div>
      </div>
    </section>
  );
}