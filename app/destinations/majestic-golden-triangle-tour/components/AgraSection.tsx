"use client";

import Image from "next/image";

export default function AgraSection() {
  return (
    <section id="agra" className="max-w-7xl mx-auto px-6 py-16">

      {/* 🔹 Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Agra – Where history rules supreme
      </h2>

      {/* 🔹 Description */}
      <p className="text-gray-700 mb-8 leading-relaxed max-w-4xl">
        A world where the echoes of the Mughal empire still linger, and uncover a marvel born from a timeless love tale:{" "}
        <span className="font-semibold">The Taj Mahal</span>. Explore beautiful tombs,
        stately forts, and vibrant marketplaces that eagerly await your presence.
      </p>

      {/* 🔹 Image */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg group">
        <Image
          src="/destination/golden-triangle/agra.jpg"
          alt="Agra Taj Mahal"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Optional overlay for premium feel */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
      </div>

    </section>
  );
}