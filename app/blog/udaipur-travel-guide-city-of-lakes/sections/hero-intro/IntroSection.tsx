"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Udaipur Travel Guide: The City of Lakes
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Few cities in the world feel as cinematic on arrival as Udaipur. This complete travel guide is 
            built for travellers who want more than just a checklist - to understand why the City of Lakes 
            has captivated maharajas, painters, and honeymooners for over 450 years. White marble palaces 
            rise from mirror-like water, havelis catch amber and rose light at sunset, and every rooftop 
            café frames a view that belongs in a painting.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Whether you're planning a luxury escape, a romantic honeymoon, a family getaway, or a solo roam 
            through Rajasthan, this guide covers history, top attractions, hidden gems, food, itineraries, 
            and practical planning details - so your Udaipur trip is as effortless as it is unforgettable.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786682200/subhashis-das-Jmfy_ec20bk-unsplash_zrp0md.jpg"
              alt="Udaipur City of Lakes - travel guide with palaces and Lake Pichola"
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