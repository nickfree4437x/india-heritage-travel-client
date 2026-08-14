"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-3">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          md:mb-2
        ">
          Suggested Udaipur Itinerary
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[14px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
        ">
          Half-Day Itinerary (for a short stopover)
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Morning : City Palace and a museum bit, roughly 2 to 3 hours 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Late morning , Jagdish Temple right outside the palace gates    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Afternoon : a small boat ride on Lake Pichola, past Jag Mandir, like really close
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Evening : sunset drinks or an early dinner on a rooftop place that looks out over the lake
            </li>
          </ul>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        {/* Heading */}
        <h2 className="
          text-[14px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
        ">
          One-Day Itinerary
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> One-Day Itinerary     
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Morning: City Palace complex and the Crystal Gallery .     
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Midday: Jagdish Temple and a sort of stroll through old city lanes near Jagdish Chowk, not in a rush .   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Afternoon: Saheliyon-ki-Bari , then a relaxed walk or maybe a café stop beside Fateh Sagar Lake .   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Evening: Sunset boat ride over Lake Pichola , after that a folk dance show at Bagore Ki Haveli.    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Night: Dinner at a lakeside heritage restaurant, pretty cozy overall.    
            </li>
          </ul>

        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        {/* Heading */}
        <h2 className="
          text-[14px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
        ">
          Two-Day Itinerary
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 1: Just follow the one day plan above, hitting City Palace, Jagdish Temple , Saheliyon-ki-Bari, Fateh Sagar, and then take the Lake Pichola sunset cruise, more or less.    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 2: In the morning go up to Monsoon Palace for those panoramic views, after that pop by Bagore Ki Haveli’s museum, then a quick stop at the Karni Mata ropeway, and later you get free time for shopping in the old city’s silver, textile, and miniature painting bazaars before an evening which is more relaxed.    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> If you’re traveling for 3 to 4 days, then add a full day offsite visit to Kumbhalgarh Fort, plus the Ranakpur Jain temples. India Heritage Travel usually builds this upgrade into most of its luxury and honeymoon schedules. 
            </li>
          </ul>

        </div>
      </div>

    </section>
  );
}