"use client";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Why Murshidabad Belongs on Your Bengal Itinerary
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
             Before Calcutta came into being, Bengal was administered from Murshidabad. Throughout the 
             entire 18th century, the small town by the Bhagirathi River was the capital of the Nawabs, 
             the finance centre of the Jagat Seths and a place of interest for European merchants. Today, 
             the marble palace, ruins of mosques and tranquil gardens of Murshidabad can be found in the 
             paddy fields, mango groves and silk looms of rural Bengal.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The heritage of Murshidabad's Nawab era and its silk weave tell a tale of past glories and 
            of a skill which once funded them.<br/>
            Murshidabad is a place to explore the unknown. It is devoid of the hustle and bustle of 
            the entrance gate crowds; whatever luxury there is is basic in nature. What you get is an 
            experience of exploring history through intuition; starting with a palace of neo-classical 
            architecture housing an armoury of thousands of weapons, proceeding with the lakeside ruin 
            of the palace of Siraj ud-Daulah and ending at the weaving workshop of a village lane.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1792579033/pexels-chandi-saha-706198694-18595582_etl22d.jpg"
              alt="Hazarduari Palace Murshidabad - Nawabi architecture with silk weaving heritage of Bengal"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
          The history of Murshidabad which makes it historically rich, the monuments which deserve a visit, the history of the local silk and handlooms as well as a truthful insight of how
        </p>
      </div>
    </section>
  );
}