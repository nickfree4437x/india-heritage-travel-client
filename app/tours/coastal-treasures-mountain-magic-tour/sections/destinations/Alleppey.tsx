"use client";

import Image from "next/image";

export default function Alleppey() {
  return (
    <div id="alleppey" className="w-full max-w-5xl mx-auto scroll-mt-24 md:scroll-mt-28">
      {/* Section Heading */}
      <h3 className="
        text-[16px] sm:text-[20px] md:text-[22px]
        tracking-wide
        text-[#2c2c2c]
        font-semibold
        mb-4 sm:mb-3
      ">
        Alleppey – Kerala Backwaters & Coastal Heritage
      </h3>

      {/* Description */}
      <div className="
        text-gray-700
        text-[12px] sm:text-[13px] md:text-[14px]
        font-[300]
        leading-relaxed
        text-justify
        mb-6
      ">
        <p>
          Alleppey, officially known as Alappuzha, famous among the travellers is also known as{" "}
          <span className="font-medium">"Venice of the East"</span>. 
          The is an immensely beautiful town, embraced by Arabian Sea in the west & many lakes, lagoons & freshwater rivers. Alleppey offers a unique experience with lush paddy fields, traditional houseboats in serene water & coconut groves.
        </p>

        <p className="mt-4">
          This town is also famous for its{" "}
          <span className="font-medium">Nehru Trophy Boat Race</span>, 
          where tourists come across the globe. This town has rich cultural heritage & natural beauty, which makes it a must visit destination for travellers which assures peace of mind amidst nature's beauty.
        </p>
      </div>

      {/* Image */}
      <div className="
        w-full rounded-md overflow-hidden shadow-md -mb-2 md:mb-0
      ">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779529254/alleppey_uqguvc.jpg"
          alt="Alleppey Kerala backwaters and traditional houseboats during a South India tour"
          width={1200}
          height={800}
          className="w-full h-auto max-h-[500px] object-cover"
        />
      </div>
    </div>
  );
}