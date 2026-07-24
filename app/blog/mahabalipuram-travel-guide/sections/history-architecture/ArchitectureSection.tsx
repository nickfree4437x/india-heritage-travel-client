"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 sm:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Architecture and Cultural Significance
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783857967/L_Asc%C3%A8se_d_Arjuna__Mahabalipuram__Inde___13957935741_amaopk.jpg"
              alt="Mahabalipuram architecture - Pallava rock-cut temples with Dravidian style and cultural significance"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Mahabalipuram's architectural significance lies in its remarkable range of techniques 
            within a few square kilometres tracing Dravidian temple design from rock-cut cave 
            temples to monolithic rathas, bas-relief panels, and the structural Shore Temple. 
            Culturally, it's a religious complex as much as a sculpture gallery, with panels 
            depicting Krishna lifting Govardhana Hill, Durga fighting Mahishasura, and the celebrated 
            Arjuna's Penance a granite relief where even a natural rock crack is designed as the 
            mythical Ganges. This fusion of devotion and technical audacity makes it one of India's 
            most studied heritage sites.
          </p>
        </div>
      </div>
    </section>
  );
}