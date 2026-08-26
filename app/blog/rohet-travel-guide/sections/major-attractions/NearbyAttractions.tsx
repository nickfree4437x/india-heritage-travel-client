"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Nearby Attractions
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Jodhpur (about 45–75 minutes)  - you can wander at Mehrangarh Fort, drop by Umaid Bhawan Palace, and then drift through the Sardar Market lanes, spice and textile style, kind of noisy but nice.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Jodhpur (about 45–75 minutes)  - you can wander at Mehrangarh Fort, drop by Umaid Bhawan Palace, and then drift through the Sardar Market lanes, spice and textile style, kind of noisy but nice.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Ranakpur - those intricately carved marble Jain temples, really worth the detour while you’re heading towards Udaipur.    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Ranakpur - those intricately carved marble Jain temples, really worth the detour while you’re heading towards Udaipur.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Ranakpur - those intricately carved marble Jain temples, really worth the detour while you’re heading towards Udaipur.   
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}