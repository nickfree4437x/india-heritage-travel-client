"use client";

import Image from "next/image";

export default function Alleppey() {
  return (
    <div id="alleppey" className="w-full max-w-5xl mx-auto scroll-mt-24 md:scroll-mt-28">

      {/* Heading */}
      <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold sm:mb-3 mb-4">
        Alleppey – World Of Coastal Delights
      </h2>

      {/* Description */}
      <div className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-[300] text-justify">
        <p>
          Alleppey, officially known as Alappuzha, famous among the travellers is also known as{" "}
          <span className="font-medium">"Venice of the East"</span>. 
          The is an immensely beautiful town, embraced by Arabian Sea in the west & many lakes, lagoons & freshwater rivers. Alleppey offers a unique experience with lush paddy fields, traditional houseboats in serene water & coconut groves.
        </p>

        <p>
          This town is also famous for its{" "}
          <span className="font-medium">Nehru Trophy Boat Race</span>, 
          where tourists come across the globe. This town has rich cultural heritage & natural beauty, which makes it a must visit destination for travellers which assures peace of mind amidst nature's beauty
        </p>
      </div>

      {/* Image */}
      <div className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[450px] rounded-md overflow-hidden shadow-md">
        <Image
          src="/destination/coastal-tour/alleppey.jpg"
          alt="Alleppey Backwaters"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

    </div>
  );
}