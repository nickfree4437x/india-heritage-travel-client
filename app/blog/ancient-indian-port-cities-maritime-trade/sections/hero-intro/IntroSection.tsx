"use client";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Ancient Indian Port Cities and Maritime Trade: Where India Met the World
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            In the days of sailing before the era of container shipping and ocean navigation, the coasts 
            of India featured extensive commercial relations. Ships were delivering pepper, pearls, 
            textiles, precious stones and other cargo to the coasts of Arabian Sea and Bay of Bengal; 
            traders brought coins, porcelain, stories and other items from their travels. Therefore, 
            the research of ancient Indian ports and maritime trade is not only a historical issue – 
            this is the function of coastal geography as a factor of economical, architectural and 
            cultural ties between India and Africa, Arabia, Mediterranean countries and South-Eastern 
            Asia.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The ancient Indian ports have turned into ruins or mounds by now, and some of them can be 
            studied only according to literature sources, museums, temples and folklore. Not all of them 
            can be considered absolutely credible – sometimes archaeologists are not able to tell for 
            sure where certain famous ports have been located, and the presence of item which was 
            delivered from somewhere else does not always mean that it belonged to this site. 
            Nevertheless, ancient Indian ports provide interesting subject to study the maritime 
            history of India and tourism destination not only to see monuments but to enjoy something 
            else.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1793181513/pexels-ankit-rainloure-1425442-14438781_kjtfsf.jpg"
              alt="Ancient Indian port cities and maritime trade - where India met the world through sea routes"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>
      </div>
    </section>
  );
}