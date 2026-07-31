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
          Why Travel With India Heritage Travel
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Insurance protects your well-being and bookings. The right operator handles the rest - every 
            India Heritage Travel itinerary is private and fully escorted, reducing daily risks and ensuring 
            faster, informed help if anything goes wrong.   
          </p>

          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Private chauffeur driven touring with vetted, experienced drivers on every heritage circuit, basically all the way through.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Fully customised itineraries, made around your pace and interests plus your travel dates too.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Hand picked luxury heritage stays like palaces, havelis and boutique properties, nothing generic. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Expert local guides with deep historical and cultural knowledge, at every stop or site you visit.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> One single point of contact across the entire journey, coordinating with your insurer’s assistance line if ever needed, just in case.  
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}