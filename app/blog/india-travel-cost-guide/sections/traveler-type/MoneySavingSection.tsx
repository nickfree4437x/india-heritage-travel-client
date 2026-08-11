"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2 md:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Money-Saving Tips Without Sacrificing Comfort
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
        
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Travel in shoulder season (late Sept–early Nov or Feb–mid-March) so you get peak-season weather, but you’re paying that off peak prices, which is kinda the whole point.     
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Book the “palace and heritage hotels” about 3–4 months ahead, because early booking is where the real savings live at this tier, and yeah, no haggling makes life smoother.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Pick a multi-day private driver package instead of doing city-by-city day rentals, because the per day rate drops a lot once your stay is longer, it really does.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Also eat where your driver or guide eats, some of Indias best food is also its most affordable, and skipping the hotel restaurant markups on each meal adds up fast ,like seriously.  
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> When it comes to monument visits, bundle the tickets and guides with one operator instead of arranging every site separately, otherwise you keep paying those repeat service fees, over and over.   
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Finally ,withdraw larger sums less often to keep cumulative ATM fees lower, and use a card with no foreign transaction fee for hotels and shopping, that part helps too. 
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}