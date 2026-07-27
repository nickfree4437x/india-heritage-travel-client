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
          Suggested Itinerary: A 5-Day Women's Heritage Circuit
        </h2>

        {/* Content - List Format */}
        <div className="space-y-0 text-gray-700 mb-2">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-semibold text-justify">
            Day One - Jaipur
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Arrival, private chauffeur transfer, and an easing-in visit to the City Palace and local bazaars. 
            </li>
          </ul>
        </div>

        {/* Content - List Format */}
        <div className="space-y-0 text-gray-700 mb-2">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-semibold text-justify">
            Day Two - Jaipur to Udaipur
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Morning visit to Amber Fort, afternoon private drive to Udaipur, evening lake-facing dinner. 
            </li>
          </ul>
        </div>

        {/* Content - List Format */}
        <div className="space-y-0 text-gray-700 mb-2">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-semibold text-justify">
            Day Three - Udaipur
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> City Palace complex, a boat ride on Lake Pichola, and a guided walk through the old city's lanes and workshops.
            </li>
          </ul>
        </div>

        {/* Content - List Format */}
        <div className="space-y-0 text-gray-700 mb-2">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-semibold text-justify">
            Day Four - Udaipur to a Countryside Retreat
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> A half-day drive to a heritage countryside property for a slower, spa-and-nature-focused day.
            </li>
          </ul>
        </div>

        {/* Content - List Format */}
        <div className="space-y-0 text-gray-700 md:mb-1">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-semibold text-justify">
            Day Five - Departure
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> A relaxed morning, final shopping or spa time, and private transfer to the airport.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}