"use client";

import Image from "next/image";

export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-2 sm:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-2 md:mb-4">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Ellora Architecture: From Chaityas to the Kailasa Temple
          </h2>
        </div>

        {/* Image */}

        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">

            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783596104/16_Ajanta_Caves_overview_vuouh8.jpg"
              alt="Ellora Cave 10 Vishvakarma Chaitya interior with teaching Buddha and carved vaulted ceiling"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via wikipedia
          </p>
        </div>

        {/* Intro Content */}

        <div className="max-w-6xl mb-6 md:mb-6">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Ellora's Buddhist bit includes, kind of, some of the most sophisticated multi level 
            viharas from the rock-cut tradition. Cave 5, aka the Maharwada, is this huge communal 
            hall, with carved benches along its sides and it feels plausibly like a dining space 
            or a lecture area, even if the logic is a little soft. Cave 10, the Vishvakarma Cave, 
            is the only chaitya at Ellora, and it’s a three storey setup with a magnificent vaulted 
            nave. There are also carved stone railings and, up above, a massive teaching Buddha above 
            the stupa so the outstretched teaching hand, is kind of silhouetted against the light 
            from the facade window, in the most photographed view people make of Ellora’s Buddhist 
            section.
          </p>

        </div>

      </div>
    </section>
  );
}