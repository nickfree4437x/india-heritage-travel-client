"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The Rabari: Guardians of Jawai's Wild Heart
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Way before Jawai ever popped up on some wildlife travel map, the Rabari were already here, 
            kinda quietly, as if it was always. This semi-nomadic pastoral group- you can spot them right 
            away, the men in crisp white robes with crimson turbans, and the women wearing mirrored indigo-
            toned skirts has kept grazing sheep goats and cattle over these granite hills for generations. 
            They move with the seasons, sort of like their ancestors did, not in a grand schedule, just in a 
            practical way.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The Rabari community sits at the heart of Jawai's leopard story. Their deep tolerance for leopards 
            - born of tradition and belief - discourages revenge even when livestock is lost, and that 
            restraint has allowed the leopard population to thrive. Spend half a day here and you'll witness 
            coexistence firsthand: a Rabari shepherd calmly pointing out a denning spot to a naturalist. For 
            many travellers, an afternoon in a Rabari hamlet - sharing chai and hearing their stories - becomes 
            the most memorable part of a Jawai trip, leopards included.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787456655/rabari-tribe-of-jawai_tvri8w.jpg"
              alt="Jawai Rabari community - leopard coexistence and cultural heritage"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via jawainaturestay.com
          </p>
        </div>
      </div>
    </section>
  );
}