"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Architecture and Cultural Significance
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Udaipur's architecture feels like a contrast that somehow agrees with itself. Palaces of granite 
            and marble sit behind a nearly 250-metre façade, with hanging gardens, octagonal towers, arched 
            balconies, and courtyards blending Rajput and Mughal design. Inside, the Sheesh Mahal (Palace of 
            Mirrors) plays with light, Mor Chowk features peacock mosaics, and miniature paintings depict royal 
            processions and battles. This mix - havelis, temple carvings, and stepped gardens - reflects Mewar's 
            identity: fiercely protective of Rajput customs yet open to artistic exchange with neighbouring empires. 
            Udaipur's heritage sites remain among India's finest Rajput palace architecture, and its lake-and-hill 
            setting continues to inspire Indian art, cinema, and design.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786683020/pexels-visuals-media-2153719228-33230289_fzhmgt.jpg"
              alt="Udaipur architecture - Rajput and Mughal palace design with Sheesh Mahal"
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