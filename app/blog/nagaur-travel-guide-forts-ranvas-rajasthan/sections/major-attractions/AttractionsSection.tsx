"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Major Attractions & Hidden Gems
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Ahhichatragarh Fort & Museum Galleries - armor textiles, and royal relics shown through the re-stored palace wings, feels kinda like you walk inside a living museum   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Deepak Mahal and Bakhat Singh Mahal - the forts most ornate frescoed interior halls, with that rich color drama everywhere   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Hazrat Hamiduddin Nagauri Dargah - a centuries old Sufi shrine sitting right in the spiritual core of the town   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Bansiwala Temple and Amar Singh Ji's Cenotaphs - these heritage pauses are calmer, for a walking route or a tuk-tuk spin through old Nagaur  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span>  Nagaur’s historic havelis and stepwell architecture - merchant-era houses, plus water structures, sort of scattered around the old lanes, rarely noticed by visitors from outside  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Nagaur’s artisan lanes - where jutti makers still work, clay artisans, durrie weavers, and blacksmiths keep generations old crafts going, even if you only have a short stop  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> The Thar Desert’s edge - you can reach it on a jeep safari or camel cart, for anyone wanting a small taste of desert Rajasthan without going as far as Jaisalmer
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}