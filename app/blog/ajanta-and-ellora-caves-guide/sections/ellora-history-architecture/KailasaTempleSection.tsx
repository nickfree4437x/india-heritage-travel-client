"use client";

import Image from "next/image";

export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-0 sm:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-2 md:mb-4">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The Kailasa Temple (Cave 16): The Greatest Rock-Cut Monument on Earth
          </h2>
        </div>

        {/* Image */}

        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">

            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783595749/Kailash_temple__Ellora_cave_no_15__at_Verul_jlzblf.jpg"
              alt="Kailasa Temple Ellora - world's largest monolithic rock-cut temple in Cave 16"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via wikipedia
          </p>
        </div>

        {/* Intro Content */}

        <div className="max-w-6xl">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            No No superlative does justice to the Kailasa Temple, really. It was commissioned by the 
            Rashtrakuta king Krishna I , in the 8th century, and it’s the world’s largest monolithic 
            rock-cut structure - basically a free standing temple complex carved top down from a 
            single basalt cliff. The numbers are kind of hard to take in: the excavation removed 
            about 200,000 tonnes of rock (that’s around three times the volume of the Great Pyramid) 
            to bring forth a temple complex measuring 84 metres long, 47 metres wide, and 33 metres 
            tall.
          </p>

        </div>

      </div>
    </section>
  );
}