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
           Bishnupur rewards careful planning, since signage is limited and sites are scattered - and 
           India Heritage Travel builds journeys around that reality. We arrange private chauffeur tours 
           from Kolkata, customised itineraries combining temples, crafts, music, and the Bengal 
           countryside, vetted comfortable stays with honest guidance on limited luxury options, 
           historian guides who decode the terracotta panels, women-safe drivers and stays for solo 
           and all-woman groups, and premium support from enquiry to departure, including artisan 
           visits. Share your dates and interests, and we'll craft a tailored Bengal itinerary spanning 
           Bishnupur, Shantiniketan, and beyond - quotes on request.
          </p>
        </div>
      </div>
    </section>
  );
}