"use client";
import Image from "next/image";


export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-2 md:py-3.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           Architecture: Where Rajput Strength Meets Mughal Ornament
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           The architecture of Orchha is an excellent representation of Rajput-Mughal fusion style, developed 
           due to interactions and conflicts between Rajput tribes and the Mughals court during the sixteenth 
           and seventeenth centuries. The framework of the structures in Orchha is clearly Rajput – massive 
           sandstone constructions, gatehouses, and plain defensive terraces. But the decorations of the 
           buildings show clearly the influence of Mughal architecture: bulging domes, ornamental stone jali 
           screens, chhatri pavilions and rich interior paintings.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           One may notice the use of the colour code among local guides – the green colour for Mughals and 
           the blue one for Bundelas – but this is purely folk interpretation rather than solid art history. 
           What is evident for sure is the quality of the construction: the balconies designed in such a way 
           as to capture the wind coming from the river, decorated with mirror inlays the ceilings of Sheesh 
           Mahal and, finally, some of the best frescoes of the region representing episodes of the Ramayana 
           and the life of Krishna preserved for four centuries inside the Raja Mahal.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789314116/pexels-rsapmech-11473544_sreao0.jpg"
              alt="Intricate carvings of Orchha's architecture blending Rajput strength with Mughal ornament"
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