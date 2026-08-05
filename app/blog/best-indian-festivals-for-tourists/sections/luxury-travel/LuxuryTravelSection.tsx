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
         Luxury Travel Tips for Festival Season
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
        
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Indian festivals tend to be communal in vibe, so you get crowds, but that doesn’t automatically translate into chaos for travelers who actually plan a bit ahead. Like yes, it’s packed, yet with the right setup it can feel… controlled, in a good way.    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Try booking heritage hotels, and yes even havelis, ideally with private terraces or courtyards that face the festival routes. Do this well in advance, like months before Diwali , Holi, or Durga Puja. Also consider arranging a private , chauffeur-driven vehicle instead of depending on public transport during the busiest festival days, when roads in places like Kolkata and Jaipur turn basically pedestrian-only.      
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Another thing is hiring a local cultural guide . They can interpret the ritual meaning in real time, and help you get access to smaller pandals, or more intimate ceremonies, away from the biggest swirl of people.   
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}