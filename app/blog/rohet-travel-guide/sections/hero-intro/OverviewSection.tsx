"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            What Is Rohet? A Quick Overview
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Rohet is a small village in the Marwar region of Rajasthan , kind of sitting right on the edge 
            of the Great Thar Desert , and built around a rather modest lake that has pulled in wildlife 
            and settlers for centuries . Unlike Jodhpur or Jaipur , Rohet has no crowds, no ticketed 
            monument circuit, and not really any obvious “sight” except the fort itself , which is sort 
            of the point. It feels like the everyday rhythm of rural Rajasthan just keeps going on, pretty 
            much undisturbed, even if you’re looking at it from the outside.  
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The place sort of grew around two main communities : the Rajput family , who have kept Rohet 
            as their ancestral estate since the 1600s, and the Bishnoi farming communities in the nearby 
            hamlets. Their religious commitment to conservation, has shaped the whole landscape, and not 
            in a small way. Together, they make Rohet one of those more genuine stops in Rohet’s wider 
            area for anyone actually chasing an authentic Rajasthan experience rather than something 
            curated.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787716881/rohet-garh-entrance_can92f.webp"
              alt="Rohet overview - rural Rajasthan heritage village with Rohet Garh and safari"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via rareindia.com
          </p>
        </div>
      </div>
    </section>
  );
}