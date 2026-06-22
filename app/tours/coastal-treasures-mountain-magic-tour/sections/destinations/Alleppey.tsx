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
        Alleppey - World Of Coastal Delights
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
        relative
        w-full
        h-[250px] sm:h-[320px] md:h-[400px] lg:h-[450px]
        rounded-md
        overflow-hidden
        shadow-md
      ">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779529254/alleppey_uqguvc.jpg"
          alt="Alleppey Kerala backwaters with traditional houseboats during South India tour package"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>
    </div>
  );
}