"use client";

import Image from "next/image";

export default function Mumbai() {
  return (
    <div id="mumbai" className="w-full max-w-5xl mx-auto scroll-mt-24 md:scroll-mt-28">

      {/* Heading */}
      <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold sm:mb-3 mb-4">
        Mumbai – A City Of Dreams
      </h2>

      {/* Description */}
      <div className="text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed font-[300] text-[12px] sm:text-[13px] md:text-[14px] text-justify space-y-3 sm:space-y-4">
        <p>
          Mumbai, the <span className="font-medium">"City of Dreams"</span>, 
          is a bustling financial capital of India & also the largest city in the country. The location of it along the Arabian Sea makes it a beautiful city with diverse culture, fast-paced life & historic landmark.
        </p>

        <p> 
          The most famous iconic landmark Gateway of India, & Chhatrapati Shivaji Maharaj Terminus, is also a UNESCO World Heritage site & architectural marvel. The most famous Marine Drive also called as "Queen's Necklace" due to its twinkling night lights & another charm of Mumbai is Juhu beach provides an endless experience.
        </p>
      </div>

      {/* Image */}
      <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden shadow-md">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779529329/mumbai_cgurku.jpg"
          alt="Cochin Kerala waterfront featuring historic Fort Kochi landmarks and scenic backwater views"
          fill
          className="object-cover object-center"
        />
      </div>

    </div>
  );
}