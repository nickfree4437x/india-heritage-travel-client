"use client";

import Image from "next/image";

export default function MumbaiSection() {
  return (
    <div>

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Mumbai – A City Of Dreams
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        Mumbai, the “City of Dreams”, is a bustling financial capital of India & also the largest city in the country. 
        The location of it along the Arabian Sea makes it a beautiful city with diverse culture, fast-paced life & historic landmark.
        The most famous iconic landmark Gateway of India, & Chhatrapati Shivaji Maharaj Terminus is also a UNESCO World Heritage site & architectural marvel.
        The most famous Marine Drive also called as “Queen’s Necklace” due to its twinkling night lights & another charm of Mumbai is Juhu beach provides an endless experience.
      </p>

      {/* Image */}
      <div className="relative w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow">
        <Image
          src="/adventure/splendors/mumbai.jpg"
          alt="Mumbai"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}