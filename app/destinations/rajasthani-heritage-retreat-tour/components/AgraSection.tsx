"use client";

import Image from "next/image";

export default function AgraSection() {
  return (
    <div id="agra" className="max-w-5xl">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Agra – Where History Rules Supreme
      </h2>

      {/* Description */}
      <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">
       A world where the echoes of the Mughal empire still linger, and uncover a marvel born from a timeless love tale: The Taj Mahal. Explore beautiful tombs, stately forts, and vibrant marketplaces that eagerly await your presence.
      </p>

      {/* Image */}
      <div className="relative w-full h-[420px] rounded-md overflow-hidden shadow-md">
        <Image
          src="/destination/heritage-tour/agra.jpg"
          alt="Agra"
          fill
          className="object-cover"
        />
      </div>

    </div>
  );
}