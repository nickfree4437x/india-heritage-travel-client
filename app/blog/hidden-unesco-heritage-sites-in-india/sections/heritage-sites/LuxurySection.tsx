"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 sm:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Luxury Travel Tips
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784732682/Hoysaleshwara_temple_in_Monsoon_houyxj.jpg"
              alt="Luxury travel tips for India - private tours and heritage stays"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via wikipedia
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Book a private, air-conditioned vehicle with a dedicated chauffeur for each regional circuit - 
            a lot of these locations are around 1-2 hours from the nearest airport , and honestly public 
            transport options are a bit limited. 
            Try to pair every hidden UNESCO site with a heritage or boutique luxury stay nearby, so for 
            Gujarat you’d do Vadodara and Ahmedabad, for Bhimbetka you go with Bhopal, and for the Hoysala 
            temples you can base in Hassan or Chikmagalur rather than rushing back to a metro city that 
            same night. Also hire a specialist heritage guide , not just a general driver-guide - the finer 
            points in Hoysala carving and the sculptural storyline of Rani ki Vav really do reward someone 
            who’s genuinely expert, not a quick generalist.
          </p>
        </div>
      </div>
    </section>
  );
}