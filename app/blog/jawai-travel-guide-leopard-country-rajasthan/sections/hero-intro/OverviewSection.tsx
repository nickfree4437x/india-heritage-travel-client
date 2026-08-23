"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            What Is Jawai? An Overview of India's Leopard Country
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Jawai isn’t, like, a national park exactly, or a sanctuary, not even one single town either 
            it’s more of a region, sort of spread across about 60 square kilometers of Pali district in 
            southern Rajasthan. It kind of forms itself around the Jawai Dam and those rugged granite 
            hills that wrap around the area. If you ask ten guides where Jawai officially begins you’ll 
            hear ten other answers, and well, that’s part of the charm. It feels like wild India without 
            ticket booths, or park gates, at least not in the normal way.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The scenery is basically the main act, even before the leopards really make an appearance. 
            Weathered granite outcrops- some of the very oldest exposed rock formations on Earth - rise 
            out of scrubland and millet fields. They’re full of caves and crevices, which become these 
            near-perfect leopard dens. And around all that: you’ve got the Jawai River and the dam-fed 
            wetlands, seasonal grasslands, and a scattered set of villages. Among them Bera, Perwa, and 
            Sena, where farming, herding, and wildlife-watching have overlapped quietly for decades, like 
            it’s just the most normal arrangement.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787460366/jawaibandh_ospm7b.jpg"
              alt="Jawai overview - India's leopard country with granite hills and wild leopards"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pinterest
          </p>
        </div>
      </div>
    </section>
  );
}