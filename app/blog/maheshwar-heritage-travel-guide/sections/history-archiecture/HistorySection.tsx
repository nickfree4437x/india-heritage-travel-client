"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            History: From Ancient Mahishmati to Ahilyabai's Capital
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The date of the first fortification of the hill at Maheshwar is a matter of dispute among 
            historians. While some attribute this to the Paramara dynasty, others attribute it to the 
            later construction during the Mughal era. The history of spiritual significance of this place 
            dates back to the time of the Mauryans. One thing that is clear is the transformation of the 
            town under the rule of the Holkar dynasty. Malhar Rao Holkar captured the fort in 1733 and 
            did some renovation work.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            From 1765 to 1796, Ahilyabai reigned from Maheshwar, and she set up her own offices in the 
            citadel, referred to as Ahilya Wada. In the reign of Ahilyabai, Maheshwar became an important 
            hub for constructing temples and trade along the river as well as crafting at the royal courts, 
            such as the art of making sarees, which can be attributed to her. Through the restoration efforts 
            made in the 1970s by Prince Richard Holkar, a descendent of the same family, the citadel got 
            renovated into a heritage hotel.
          </p>
        </div>

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789548960/pexels-shravankhare-10931719_isgnsk.jpg"
              alt="History: From Ancient Mahishmati to Ahilyabai's Capital"
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