"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The Konark Dance Festival: Classical India at Its Most Spectacular
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783751342/11.07.2026_11.58.34_REC_mirobm.png"
              alt="Konark Dance Festival - classical Odissi performance at Sun Temple with 24 wheels and stone chariot"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via odishatourism
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Each December, the Odisha Tourism Department kind of reshapes the open-air theatre by the 
            Konark Sun Temple into one of India’s most impressive stages. The Konark Dance Festival 
            usually running for around five evenings during the first week of December brings Odissi, 
            Bharatanatyam, Kathak, Kuchipudi, Manipuri and a few other classical Indian dance styles 
            onto the scene, right with the temple in the background lit up so brightly. Seeing Odissi, 
            which is a dance form with the earliest visual clues basically sitting in the carvings on 
            those temple walls, performed right there in front of the same carvings is one of those 
            moments that stays, permanently. Secure tickets ahead of time, because the festival 
            attracts connoisseurs not just from different parts of India but also internationally, 
            so yes, planning helps.
          </p>
        </div>
      </div>
    </section>
  );
}