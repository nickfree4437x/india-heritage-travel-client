"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            History & Origins - The Chandela Dynasty and a City of Temples
          </h2>
        </div>

        {/* Image */}
        <div className="mb-4 md:mb-6">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783254587/deepak-gupta-VZv3sHwzjMM-unsplash_i3b025.jpg"
              alt="Historical map showing the Chandela dynasty territory and location of Khajuraho in Madhya Pradesh"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            The story of Khajuraho begins with a legend, as the finest Indian stories often do. According
            to the Chandela origin myth, the dynasty was founded through a union between the Moon God
            Chandra and Hemavati, the daughter of a Brahmin priest. Their son, Chandravarman, became
            the first Chandela king - and the dynasty that bore his lineage would go on to rule a
            significant portion of central India for four centuries.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            At first the place held about 85 temples. Today only 25 remain, the rest were worn down by
            time, weather and the invasions linked to Mahmud of Ghazni in the early 11th century. Even
            after that the surviving temples basically slipped out of the wider world for a few centuries.
            Their existence stayed in a kind of quiet note, only seen in the observations of the medieval
            traveller Abu Rihan Al-Biruni and the diaries of Ibn Battuta. It was only in 1838 that a
            British army officer, T.S. Burt, rediscovered the site while surveying the region, and then
            Khajuraho was pulled back into global attention again.
          </p>
        </div>
      </div>
    </section>
  );
}