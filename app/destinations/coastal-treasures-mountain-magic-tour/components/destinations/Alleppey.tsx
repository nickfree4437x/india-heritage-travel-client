"use client";

import Image from "next/image";

export default function Alleppey() {
  return (
    <div id="alleppey" className="max-w-5xl">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Alleppey – World Of Coastal Delights
      </h2>

      {/* Description */}
      <div className="text-gray-700 mb-6 leading-relaxed text-[15px] space-y-4 text-justify">

        <p>
          Alleppey, officially known as Alappuzha, famous among the travellers is also known as{" "}
          <span className="font-semibold text-black">
            “Venice of the East”
          </span>. 
           The is an immensely beautiful town, embraced by Arabian Sea in the west & many lakes, lagoons & freshwater rivers. Alleppey offers a unique experience with lush paddy fields, traditional houseboats in serene water & coconut groves.
        </p>

        <p>
          This town is also famous for its{" "}
          <span className="font-semibold text-black">
            Nehru Trophy Boat Race
          </span>, 
           where tourists come across the globe. This town has rich cultural heritage & natural beauty, which makes it a must visit destination for travellers which assures peace of mind amidst nature’s beauty
        </p>

      </div>

      {/* Image */}
      <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md">
        <Image
          src="/destination/coastal-tour/alleppey.jpg"
          alt="Alleppey Backwaters"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}