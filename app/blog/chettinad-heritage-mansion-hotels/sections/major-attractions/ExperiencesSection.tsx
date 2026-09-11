"use client";

export default function HiddenGemsSection() {
  return (
    <section className="w-full bg-white py-1 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Best Experiences in Chettinad
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Take a walk down a mansion road during the golden hour when the facade will look golden due to the sunlight and the doors to courtyards tend to be kept open. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Enjoy taking a hands-on cooking class for Chettinad in the kitchen of an old mansion.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Obscure yourself with the making of Athangudi tiles. 
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Vist a functioning antique warehouse and comprehend the scope of buildings that were once erected.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Join an early morning ritual at a clan temple.
            </li>
          </ul>

        </div>

      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-3">
        
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Chettinad Cuisine: A Feast Worth the Detour
        </h2>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          The story of trade practices of Chettinad is told not just through architecture but also the 
          cuisine. Generations of interaction with Burma, Malaya, and Ceylon have resulted in some dried 
          spices, star anise and stone ground masalas being included in the repertoire of Chettinad that 
          are not part of the cuisine in other regions of Tamil Nadu. Some of the traditional dishes in 
          Chettinad include Chettinad chicken curry, mutton chukka with a lot of pepper, kola urundai 
          (meatballs) and appalams that have tamarind-based curries. The vegetarian cuisine of Chettiars 
          too is unique and worth trying in a Chettinad household.	
        </p>

      </div>
    </section>
  );
}