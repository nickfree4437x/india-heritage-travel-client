"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2.5 md:py-4">
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
           Dholpur rewards careful planning, as access, safari conditions, and property standards vary - 
           and India Heritage Travel builds journeys around that reality. We arrange chauffeur-led tours 
           from Agra, Jaipur, or Delhi; customised routes linking Dholpur with Agra, Karauli, or 
           Ranthambore; personally verified palace and riverfront stays; naturalist and historian guides 
           for the Chambal; women-safe drivers and accommodations; and fully serviced tours from enquiry 
           to departure.
          </p>
        </div>
      </div>
    </section>
  );
}