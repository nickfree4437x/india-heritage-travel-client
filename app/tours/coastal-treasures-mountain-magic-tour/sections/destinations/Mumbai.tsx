"use client";

import Image from "next/image";

export default function Mumbai() {
  return (
    <div id="mumbai" className="w-full max-w-5xl mx-auto scroll-mt-24 md:scroll-mt-28">
      {/* Section Heading */}
      <h3 className="
        text-[16px] sm:text-[20px] md:text-[22px]
        tracking-wide
        text-[#2c2c2c]
        font-semibold
        mb-4 sm:mb-3
      ">
        Mumbai – Gateway of India & Cultural Heritage
      </h3>

      {/* Description */}
      <div className="
        text-gray-700
        text-[12px] sm:text-[13px] md:text-[14px]
        font-[300]
        leading-relaxed
        text-justify
        space-y-3 sm:space-y-4
        mb-4 sm:mb-5 md:mb-6
      ">
        <p>
          Mumbai, the <span className="font-medium">"City of Dreams"</span>, 
          is a bustling financial capital of India & also the largest city in the country. 
          The location of it along the Arabian Sea makes it a beautiful city with diverse culture, 
          fast-paced life & historic landmark.
        </p>

        <p>
          The most famous iconic landmark Gateway of India, & Chhatrapati Shivaji Maharaj Terminus, 
          is also a UNESCO World Heritage site & architectural marvel. The most famous Marine Drive 
          also called as "Queen's Necklace" due to its twinkling night lights & another charm of 
          Mumbai is Juhu beach provides an endless experience.
        </p>
      </div>

      {/* Image */}
      <div className="
        w-full rounded-md overflow-hidden shadow-md -mb-2 md:mb-0
      ">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779529329/mumbai_cgurku.jpg"
          alt="Mumbai city skyline featuring Gateway of India, Marine Drive and cultural landmarks during South India tour package"
          width={1200}
          height={800}
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </div>
    </div>
  );
}