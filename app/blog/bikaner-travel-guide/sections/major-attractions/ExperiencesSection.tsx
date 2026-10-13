"use client";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Best Experiences in Bikaner
          </h2>
        </div>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700 mt-2">
        
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Watch the sun sink behind Junagarh Forts ramparts from Sursagar Lake, just outside the walls. it kind of looks like everything calms down there, even the air.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Try timing your trip to the Bikaner Camel Festival, usually around the 2nd weekend of January, for camel races, folk music and a Mr. Bikana beauty pageant   - for the camels.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Book a dinner or even an overnight stay at Gajner Palace, for a truly royal desert lake type of experience.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Arrange a short camel cart or camel safari outing into the dunes at dusk, away from the city, so it feels quieter and more unhurried.
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
}