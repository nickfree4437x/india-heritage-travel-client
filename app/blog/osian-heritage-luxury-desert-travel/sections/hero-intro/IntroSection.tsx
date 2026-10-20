"use client";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Why Osian Deserves a Place on Your Rajasthan Itinerary
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
             Most tourists visiting Rajasthan for the first time generally have the same itinerary - 
             Jaipur, Jodhpur, Jaisalmer and Udaipur. Rarely is Osian part of the plan and for that 
             reason this itinerary should include Osian. Osian luxury heritage desert travel has a 
             unique meaning here; it refers to a small town located in the eastern edge of the Thar, 
             whose temples were built more than a thousand years ago while surrounded by dunes. At 
             night one can dine at candlelight in front of a sky full of stars.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Locally Osian is referred to as the "Khajuraho of the Thar". Sometimes visitors liken Osian 
            ruins to Hampi. However none of these two references do justice to the place. The town was a 
            flourishing trade and pilgrimage center between the 8th and 12th centuries and the temples 
            left from that period are now considered one of the few intact remains of the early medieval 
            western India. Together with the silence of the desert and some luxurious camps recently 
            opened here, Osian provides one of the most authentic short trips from Jodhpur.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1792493079/pexels-axp-photography-500641970-19160089_rvzykn.jpg"
              alt="Why Osian deserves a place on your Rajasthan itinerary - ancient temples and Thar Desert"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
          This guide is what we needed when we started researching private Osian journeys - accurate 
          historical information, explanation of Osian temples
        </p>
      </div>
    </section>
  );
}