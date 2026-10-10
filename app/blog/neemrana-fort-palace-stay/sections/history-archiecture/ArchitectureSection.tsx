"use client";
import Image from "next/image";


export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-1 md:py-3.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           Architecture: Reading the Fort Level by Level
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Architecture wise, it is traditional Rajput military architecture, but with a touch of domestic beauty. The fort rises up the slope through eleven terraces connected via ramps and steps. This used to facilitate defense in earlier days, but now makes exploring easy and fun.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           Neemrana Fort Palace blends old and new seamlessly. The restored older wing features plastered stone walls, arches, and courtyard-framed rooms, where contemporary murals by Anjolie Ela Menon sit alongside traditional restoration work. The newer wing mirrors the original style while adding a pool, spa, fitness centre, conference room, and suites. Throughout, jharokhas and chhatris offer picturesque views over the plains and cool, gentle breezes.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1791614777/pexels-pramodtiwari-33797755_xxhwba.jpg"
              alt="Neemrana Fort Palace architecture - terraced levels and Rajput design in Rajasthan"
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