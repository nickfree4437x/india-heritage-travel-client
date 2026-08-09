"use client";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-3 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          What to Pack by Season
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">

          <h3 className="text-gray-700 leading-relaxed text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-justify">
            Winter (Nov – Feb)   
          </h3>
        
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Layered clothing, warm mornings and evenings but like, mild afternoons too        
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> A proper jacket for Rajasthan's desert nights and also northern fog, you know            
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Light gloves + a scarf for early morning sightseeing, otherwise you ll feel it        
            </li>
          </ul>

        </div>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700 mt-2">

          <h3 className="text-gray-700 leading-relaxed text-[14px] sm:text-[15px] md:text-[16px] text-justify font-semibold">
            Summer (Mar – Jun)  
          </h3>
        
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Loose breathable light-colored clothing, keep it simple        
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Strong sun protection and a wide brimmed hat              
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> A reusable insulated water bottle, stays cool longer         
            </li>
          </ul>

        </div>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700 mt-2">

          <h3 className="text-gray-700 leading-relaxed text-[14px] sm:text-[15px] md:text-[16px] text-justify font-semibold">
            Monsoon (Jun– Sep)   
          </h3>
        
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> You’ll want a compact umbrella or a lightweight rain shell, just in case the weather gets moody        
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Quick-dry clothing plus waterproof footwear, so you don’t feel soaked after a short walk                
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> A dry bag or a waterproof pouch for your electronics, phone camera etc           
            </li>
          </ul>

        </div>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700 mt-2">

          <h3 className="text-gray-700 leading-relaxed text-[14px] sm:text-[15px] md:text-[16px] text-justify font-semibold">
            Post-Monsoon (Oct– Nov)    
          </h3>
        
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Light layers, warm days but the evenings can turn a bit cooler, so be ready    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Comfortable walking shoes for longer sightseeing sessions, like hours at a stretch    
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> A light scarf or shawl for temple visits and those air-conditioned interiors, you know the type  
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}