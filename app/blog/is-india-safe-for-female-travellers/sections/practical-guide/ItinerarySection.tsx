"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Suggested 2-Day Safe-Travel Itinerary: Jaipur
        </h2>

        {/* Content - List Format */}
        <div className="space-y-0 text-gray-700 mb-4">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-semibold text-justify">
            Day One
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Morning: Private chauffeur pickup, visit to Amber Fort with a female-friendly local guide. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Afternoon: City Palace and Jantar Mantar, with a break at a heritage café for lunch. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Evening: Guided sunset viewing at Nahargarh Fort, followed by dinner at a hotel rooftop restaurant. 
            </li>
          </ul>

        </div>

        {/* Content - List Format */}
        <div className="space-y-0 text-gray-700">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-semibold text-justify">
            Day Two
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Morning: Guided walk through the Old City bazaars, accompanied by your guide for a comfortable shopping experience. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Afternoon: Block-printing or gem-cutting workshop visit, arranged through a vetted local partner. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Evening: Private transfer to a cultural performance, with return transport pre-booked for the night. 
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}