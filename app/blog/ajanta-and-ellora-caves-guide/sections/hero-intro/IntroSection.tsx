"use client";

import Link from "next/link";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-2
        ">
          Ajanta and Ellora Caves: Two UNESCO Sites, One Extraordinary Journey
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            There There are places in India where history just does not feel historical. The Ajanta and
            Ellora Caves are two of them. Carved not built, these are monuments, hewn straight out of 
            the living basalt of the Deccan Plateau not stone structures laid upon the land, but the 
            ground itself, hollowed into temples, monasteries, and galleries of art so refined that some
            19th-century Western art historians, meeting Ajanta’s murals for the first time, refused to
            believe they were truly ancient.
          </p>
        </div>

        {/* Image */}
        <div className="mt-4 mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783593610/Ajanta__63_krdk25.jpg"
              alt="Ajanta and Ellora Caves UNESCO - Buddhist murals and Kailasa rock-cut temple in Maharashtra"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via wikipedia
          </p>
        </div>

        <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          This full Ajanta and Ellora Caves guide, covers everything you might want the story of both
          locations, cave-by-cave highlights you cannot really skip, the staggering Kailasa Temple at
          Ellora, practical ticket details, and travel logistics . You also get a nicely structured
          2-day plan from Aurangabad. Both sites are  <Link href="https://whc.unesco.org" className="hover:underline font-[400] text-[#8f6d42]">UNESCO World Heritage Sites</Link> together they form
          one of the most tightly packed, accumulations of creative genius anywhere on earth.
        </p>
      </div>
    </section>
  );
}