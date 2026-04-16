"use client";

import Image from "next/image";

export default function AgraSection() {
  return (
    <section id="agra" className="space-y-6">

      <h2 className="text-3xl md:text-4xl font-semibold">
        Agra – Where History Rules Supreme
      </h2>

      <p className="text-gray-700 leading-relaxed">
        A world where the echoes of the Mughal empire still linger, uncover a marvel
        born from a timeless love tale: The Taj Mahal. Explore beautiful tombs,
        stately forts, and vibrant marketplaces.
      </p>

      <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/destination/heritage-tour/agra.jpg"
          alt="Agra"
          fill
          className="object-cover"
        />
      </div>

    </section>
  );
}