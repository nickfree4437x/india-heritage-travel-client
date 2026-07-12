"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-2
        ">
          Overview of Mahabalipuram
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Mahabalipuram is on the Coromandel Coast , in Tamil Nadu , Chengalpattu district. There, 
            the Bay of Bengal meets long stretches of granite outcrop , and it kind of feels like 
            time is slowed down. Back in the 7th century, this quiet fishing town was more than just 
            scenery , it was a functioning Pallava port. Ships came and went with cotton, spices and 
            a steady flow of “ideas” too, moving onward toward Southeast Asia.  
          </p>
        </div>

        {/* Image */}
        <div className="mt-6 mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783856360/Mamallapuram__Shore_Temple__India_ygegak.jpg"
              alt="Mahabalipuram UNESCO heritage site with Shore Temple and Pallava rock-cut architecture"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via wikipedia
          </p>
        </div>

        <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          What the Pallava kings left behind isn’t just another set of ruins in a directory, it’s 
          something far more strange and specific: an open air workshop of rock carved caves, 
          monolithic chariot shaped shrines and even a separate stone temple that has been facing 
          the tide for more than 1,300 years. Now the town tries to juggle both, a kind of low key 
          beach town cadence. Batik studios , stone carving workshops and small seafood shacks are 
          only a short walk from the monuments that once sparked an architectural tradition across 
          South India and out into Southeast Asia.
        </p>
      </div>
    </section>
  );
}