"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            UNESCO World Heritage Status
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783858438/CinqRathaGeneral__7_osg6l1.jpg"
              alt="Mahabalipuram UNESCO - 1984 World Heritage Site with Shore Temple and rock-cut monuments"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via wikipedia
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            The Group of Monuments at Mahabalipuram was inscribed as a UNESCO World Heritage Site in 1984 
            a recognition of the rock-cut and structural temples produced under Narasimhavarman I and II 
            in the 7th–8th centuries. The designation covers the Shore Temple, Five Rathas, rock-cut 
            mandapas, Arjuna's Penance, and smaller structures now managed by the Archaeological Survey 
            of India. Conservation efforts continue, especially around the salt-battered Shore Temple, 
            making it one of the best-preserved accounts of early Pallava workmanship in India.
          </p>
        </div>
      </div>
    </section>
  );
}