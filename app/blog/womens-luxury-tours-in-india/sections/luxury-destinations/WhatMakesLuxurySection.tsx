"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-3 md:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          What Makes a Tour Truly a "Women's Luxury Tour"
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Not every “premium” India itinerary is truly tuned for women’s particular needs. A real women’s 
            luxury tour often has some things that feel a bit obvious once you’ve seen them, but most plans 
            still skip:   
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Private vetted chauffeurs and guides, briefed with care on female traveler comfort ,plus etiquette, so everything runs more smoothly and quietly.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Heritage palace hotels and boutique properties with a real name for guest safety, and with women staff available when it matters. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Flexible pacing, not that rigid coach tour rhythm, so there are proper rest days, spa mornings ,and slow market wanders that don’t feel rushed. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> A 24/7 local point of contact, who can rework the route in real time, no waiting around. 
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}