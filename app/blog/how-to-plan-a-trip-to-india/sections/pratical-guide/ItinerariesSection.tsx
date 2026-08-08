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
          Suggested Itineraries
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <h3 className="text-[14px] sm:text-[15px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide">One-Day Sample: Old and New Delhi</h3>
        
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> 1. Morning, Jama Masjid , and then a rickshaw ride through Chandni Chowk’s spice textile lanes, like really close together        
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> 2. Midday, Humayun’s Tomb . this is often called the architectural starter before the Taj Mahal          
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> 3. Afternoon: India Gate and the government quarter of New Delhi      
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> 4. Evening: rooftop dinner, looking over the old city skyline, kind of dreamy      
            </li>
          </ul>

        </div>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700 mt-2 md:mt-4">
          <h3 className="text-[14px] sm:text-[15px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide">Two-Day Sample: Delhi plus Agra</h3>
        
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> 5. Day 1: Delhi heritage as above, overnight staying in Delhi        
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> 6. Day 2: early exit for Agra , Taj Mahal sunrise or sunset , Agra Fort . then back to Delhi or keep going toward Jaipur          
            </li>
          </ul>

        </div>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700 mt-2 md:mt-4">
          <h3 className="text-[14px] sm:text-[15px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide">Ten-Day Sample: Golden Triangle and Rajasthan</h3>
        
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> 7. Days 1–2: Delhi, Old & New Delhi, museums, bazaars, walking without rushing        
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> 8. Day 3: Agra, Taj Mahal at sunrise , Agra Fort , Fatehpur Sikri on the way toward Jaipur          
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> 9. Days 4–5: Jaipur, Amber Fort, City Palace, Jantar Mantar , plus bazaar shopping for little things         
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> 10. Days 6–7: Udaipur , Lake Pichola, City Palace, boat ride, and a stay in a palace hotel          
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> 11. Days 8–9: Jodhpur, Mehrangarh Fort, the Blue City , and a desert meal under the stars          
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> 12. Day 10: departure, or stretch the trip to Jaisalmer for a camel safari , if you feel like it         
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}