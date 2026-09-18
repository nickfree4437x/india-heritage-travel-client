"use client";

import Image from "next/image";

export default function OverviewSection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Overview: Where Three Empires Left Their Mark
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Kochi Fort is situated at the mouth of the backwaters of Kochi and is located in a small 
            stretch of land flanked by the Arabian Sea. Fort Kochi had already existed within the trading 
            network between the Arab countries and China prior to the coming of any European ships, and 
            the Chinese fishing nets which are a distinct feature of this place are believed to be an 
            innovation by the traders who belonged to the period of Kublai Khan before Vasco Da Gama.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The exceptional feature of Fort Kochi is that the historical zones there are densely packed 
            together; thus, within a few kilometres of the heritage area, you can find Portuguese churches, 
            Dutch-modified palaces, a 16th-century Jewish synagogue, bungalows from the time of the British, 
            and a vibrant contemporary art culture all sitting on top of each other. Mattancherry Palace and 
            the Fort Kochi-Mattancherry region have been advocated by locals and heritage organisations to get 
            their name on the tentative list for World Heritage by UNESCO, given the immense historical 
            significance of the coastal area.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789727946/sleeba-thomas-7FNVvI2Lezc-unsplash_lb5opl.jpg"
              alt="Fort Kochi overview - Portuguese Dutch and British colonial heritage in Kerala"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>
        </div>
      </div>
    </section>
  );
}