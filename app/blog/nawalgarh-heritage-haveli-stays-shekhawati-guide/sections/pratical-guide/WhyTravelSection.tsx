"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2 md:py-1">
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
           Planning a Nawalgarh haveli stay on your own means navigating unmarked gates and unreliable 
           options. India Heritage Travel removes the hassle with private chauffeur-driven tours, fully 
           personalised itineraries (Nawalgarh, Mandawa, Dundlod, Jaipur, and beyond), exclusive access 
           to authentic boutique havelis, expert local guides, and women-safe travel options. With 
           concierge-style service for couples, honeymooners, and culture-seekers, we turn this guide 
           into a customised holiday built around your definition of luxury.
          </p>
        </div>
      </div>
    </section>
  );
}