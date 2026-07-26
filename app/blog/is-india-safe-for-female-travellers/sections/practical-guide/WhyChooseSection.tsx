"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-3 md:py-3">
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
            Most of the safety advice in this guide, is already baked in to the way India Heritage Travel 
            puts together each itinerary: private, vetted chauffeur transport for the whole duration of every 
            trip, plus fully customised days that are built around your personal comfort level and the kind of 
            things you like to see. We also choose curated luxury and heritage stays, each one hand-inspected 
            for safety and service, and we make sure you have expert local guides on the ground ,including 
            female guides for women-only and solo female itineraries. There s also a dedicated women-safe 
            travel planning approach, from the route logistics to evenings and activities, not just a general 
            plan.
          </p>
        </div>
      </div>
    </section>
  );
}