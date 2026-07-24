"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
             Solo Female Traveler Tips
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783868706/kristina-wagner-PKLoOomB5Cs-unsplash_gcc8g3.jpg"
              alt="Mahabalipuram solo travel tips - safe heritage site for female travelers"
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
            Mahabalipuram Mahabalipuram is kind of a manageable, walkable town with this steady flow 
            of visitors all day long, so it can feel like a comfortable stop for solo travelers. For 
            solo female travelers, staying within daylight hours around the monuments, using a pre-arranged 
            private vehicle instead of trying to hail transport on the street, and booking accommodation 
            that has strong reviews specifically for solo, and women guests are pretty simple ways to 
            travel with more ease. A vetted local guide also brings extra context, and honestly, an 
            additional layer of comfort, specially if it is your first visit to Tamil Nadu.
          </p>
        </div>
      </div>
    </section>
  );
}