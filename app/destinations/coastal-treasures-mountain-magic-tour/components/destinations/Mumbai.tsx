"use client";

import Image from "next/image";

export default function Mumbai() {
  return (
    <div id="mumbai" className="max-w-5xl">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Mumbai – A City Of Dreams
      </h2>

      {/* Description */}
      <div className="text-gray-700 mb-6 leading-relaxed text-[15px] space-y-4 text-justify">

        <p>
          Mumbai, the {" "}
          <span className="font-semibold text-black">
            “City of Dreams”
          </span>, 
          is a bustling financial capital of India & also the largest city in the country. The location of it along the Arabian Sea makes it a beautiful city with diverse culture, fast-paced life & historic landmark.
        </p>

        <p> 
          The most famous iconic landmark Gateway of India, & Chhatrapati Shivaji Maharaj Terminus,is also a UNESCO World Heritage site & architectural marvel. The most famous Marine Drive also called as “Queen’s Necklace” due to due to its twinkling night lights & another charm of Mumbai is Juhu beach provides an endless experience.
        </p>
      </div>

      {/* Image */}
      <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md">
        <Image
          src="/destination/coastal-tour/mumbai.jpg"
          alt="Gateway of India Mumbai"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}