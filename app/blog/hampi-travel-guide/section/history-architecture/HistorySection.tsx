"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Hampi History: The Rise and Fall of the Vijayanagara Empire
          </h2>
        </div>

        {/* Image */}
        <div className="mb-4 md:mb-6">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783504032/Hampi_King_s_Balance_Vitthala_temple_street_entrance_near_river_1856_photo_ttrh3x.jpg"
              alt="Hampi history - ruins of Vijayanagara Empire with temples and royal enclosures"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via wikipedia
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            The Vijayanagara Empire was founded in 1336 CE by Harihara I and Bukka Raya I of the 
            Sangama dynasty, likely with guidance from sage Vidyaranya - which is where the city's
            alternate name, Vidyanagara, originates. The empire rose from the remnants of the Hoysala
            kingdom, which had been weakened by Delhi Sultanate attacks. Hampi became the capital, 
            and over time, it grew into one of the most breathtaking Hindu cities of the medieval era.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            The empire reached its zenith under Krishnadevaraya, widely regarded as its greatest ruler. 
            During his reign, it controlled much of peninsular India known for military strength, literary
            patronage in Kannada, Telugu, and Sanskrit, trade, and monumental construction. He expanded the
            Vittala Temple, Hazara Rama Temple, and many other structures. European travellers including
            Portuguese chroniclers Domingo Paes and Fernão Nunes wrote admiringly of the city's grandeur.
          </p>
        </div>
      </div>
    </section>
  );
}