"use client";
import Image from "next/image";


export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-1 md:py-3.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           Architecture: Reading the Stone of Ahilya Fort
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            A stroll through Fort Kochi can be seen as a journey through time. Portuguese architecture 
            consists of plain, sturdy constructions with minimal facades and wooden shutters. On the 
            other hand, Dutch architecture included sloping tiled roofs, courtyards and a restrained 
            architectural design that one can see in the Dutch Palace which was made using the 'Nalukettu' 
            concept in a courtyard layout as per the Kerala tradition. The British period architecture saw 
            the use of colonnaded verandas, high ceilings and wide opening windows that were suitable for 
            the climate.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           This is the reason why the boutique hotels in Fort Kochi seem different from other luxury hotels in India; because most of them are situated in 16th century, 17th century or 19th century buildings.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789728731/mohnish-landge-r84kDlv19CI-unsplash_eydqn5.jpg"
              alt="Architecture: Reading the Stone of Ahilya Fort"
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