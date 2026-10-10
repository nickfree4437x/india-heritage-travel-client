"use client";
import Image from "next/image";


export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-2 md:py-3.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           Architecture: Where Afghan, Persian and Hindu Craftsmanship Meet
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Adaptive architecture is evident in Mandu’s structures. Construction took into consideration 
            the climatic and material aspects of the environment. The buildings have massive stonework in 
            the walls for cooling, large terraces that capture the evening breeze, and reservoirs and wells 
            designed to capture the rainwater from the monsoon season and save it for the dry season.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           This creates a unique vocabulary of architecture which consists of Afghan arches, Persian 
           glazed tiles, jali screens, and Hindu-influenced brackets and pillars. All these elements 
           are used in a very restrained manner which is not common in the later ornamental Mughal 
           structures. Hoshang Shah’s Tomb which is almost completely made up of white marble is one 
           of the best examples of this blend and is thought to have influenced the Taj Mahal.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789370502/pexels-mahrukh-rehman-2160250763-38948063_txa2yw.jpg"
              alt="Architecture: Where Afghan, Persian and Hindu Craftsmanship Meet"
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