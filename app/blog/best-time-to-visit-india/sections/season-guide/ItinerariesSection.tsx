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
          Suggested Seasonal Itineraries
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">

          <h3 className="text-gray-700 leading-relaxed text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-justify">
            5-Day Golden Triangle Winter Itinerary 
          </h3>
        
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 1: Arrive Delhi; a private chauffeur transfer, and then in the evening just a heritage stroll around Old Delhi.       
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 2:  basically a full day in Delhi, looking around Humayun's Tomb, Qutub Minar, India Gate. then we drive off towards Agra, not too late, just a smooth move over.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 3:  early sunrise stop for the Taj Mahal, then Agra Fort too, and after that we head to Jaipur. Along the route we pass through Fatehpur Sikri, like it’s a kind of detour but still part of it.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 4: Amber Fort in that morning glow, City Palace, Jantar Mantar , and later the local bazaars in Jaipur.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 5: Mostly easy morning; private transfer to the airport, for departure.
            </li>
          </ul>

        </div>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700 mt-2">

          <h3 className="text-gray-700 leading-relaxed text-[14px] sm:text-[15px] md:text-[16px] text-justify font-semibold">
            4-Day Kerala Monsoon Wellness Escape  
          </h3>
        
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 1 arrive Kochi, and have an Ayurvedic consultation plus some welcome treatment at a heritage wellness resort.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 2 take a backwater houseboat cruise through Alleppey’s monsoon green canals, it feels almost slow motion.                
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 3: spend the whole day on tailored Ayurvedic therapies then catch sunset near the lagoon.           
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 4 do a spice plantation walk in the rain and then departure, straightforward.
            </li>
          </ul>

        </div>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700 mt-2">

          <h3 className="text-gray-700 leading-relaxed text-[14px] sm:text-[15px] md:text-[16px] text-justify font-semibold">
            6-Day Ladakh Summer Adventure  
          </h3>
        
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 1: Reach Leh, sort of acclimatization day because of the altitude, you know
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 2: Leh Palace, Shanti Stupa, and the nearby monasteries  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 3: Travel to Nubra Valley through Khardung La, in the day time 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 4: Wander around Nubra’s sand dunes, plus Diskit Monastery as well 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 5: Head back towards Pangong Lake, staying overnight near the water 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 6: Go back to Leh and then departure, finally 
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}