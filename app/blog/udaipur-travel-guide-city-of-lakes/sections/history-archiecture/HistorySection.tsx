"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            A Brief History of Udaipur and the Mewar Dynasty
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Udaipur's story begins with the Mewar kingdom, one of Rajasthan's oldest Rajput dynasties. 
            After repeated Mughal sieges made Chittorgarh unsustainable, Maharana Udai Singh II founded 
            Udaipur in 1559 on the eastern shores of Lake Pichola, sheltered by the Aravalli hills - and 
            soon after, construction of the City Palace began. His son, the legendary Maharana Pratap, 
            became a symbol of Rajput defiance, famously refusing to submit to Emperor Akbar; his stand 
            at the Battle of Haldighati remains one of Indian history's most celebrated tales of courage.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Over four centuries, successive Maharanas expanded the City Palace, blending Rajasthani, Mughal, 
            and even European styles into a strangely cohesive whole. The Mewar dynasty remained in power - 
            through Mughal diplomacy, British paramountcy, and into independent India - until Udaipur merged 
            with the Indian union in 1949. Remarkably, the royal family still owns and maintains large sections 
            of the City Palace, so a visit feels less like a museum and more like stepping into a living, ongoing 
            dynasty.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786682751/pexels-hemant-singh-chauhan-639506990-18526645_qtuqbv.jpg"
              alt="Udaipur City Palace - living Mewar dynasty heritage"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>
      </div>
    </section>
  );
}