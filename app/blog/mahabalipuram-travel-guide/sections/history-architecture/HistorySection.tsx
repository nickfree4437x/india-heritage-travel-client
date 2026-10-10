"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            History of Mahabalipuram: The Pallava Dynasty and a Port City of Legends
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[650px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783856926/brijender-dua-OFSaSqZTC4g-unsplash_hn8abx.jpg"
              alt="Mahabalipuram history - Pallava dynasty port city with Shore Temple and rock-cut monuments"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            Any serious Mahabalipuram travel guide must begin with the Pallavas, who ruled much of 
            southeastern India between the 3rd and 9th centuries. It was under Narasimhavarman I - 
            nicknamed Mamalla, or "great wrestler" - that the site, then called Mamallapuram, gained 
            prominence in the 7th century. He commissioned the rock-cut mandapas and earliest monolithic 
            rathas, using the port as a stage to project Pallava naval and cultural influence along the 
            Coromandel Coast.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Narasimhavarman II built the Shore Temple in the early 8th century a granite structural 
            temple, a major engineering leap. European sailors called it the "Seven Pagodas." The 2004 
            tsunami revealed offshore ruins, confirming local legends. By the 9th century, the port 
            declined, but the monuments remain weathered yet enduring, a testament to early Dravidian 
            architecture.
          </p>
        </div>
      </div>
    </section>
  );
}