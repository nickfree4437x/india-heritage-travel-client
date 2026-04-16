"use client";

import Image from "next/image";

export default function DelhiSection() {
  return (
    <section id="delhi" className="max-w-7xl mx-auto px-6 py-16">

      {/* 🔹 Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Delhi - A blend of history & royalty
      </h2>

      {/* 🔹 Description */}
      <p className="text-gray-700 mb-8 leading-relaxed max-w-4xl">
        <span className="font-semibold">Discover Delhi</span>, which is the mixture
        of history and modernity with vibrant, contemporary, and bursting colours.
        In Old Delhi, you’ll experience the rich colours of humanity in all its
        shades and sensations.
      </p>

      {/* 🔹 Main Layout */}
      <div className="grid md:grid-cols-3 gap-10 items-start">

        {/* LEFT SIDE */}
        <div className="md:col-span-2 space-y-6">

          {/* Image */}
          <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/destination/golden-triangle/delhi.jpg"
              alt="Delhi"
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* RIGHT SIDE CARD */}
        <div className="bg-white rounded-xl shadow-lg p-5 sticky top-24">

          {/* Map */}
          <div className="relative w-full h-[200px] rounded-md overflow-hidden mb-4">
            <Image
              src="/destination/golden-triangle/map.jpg"
              alt="Map"
              fill
              className="object-cover"
            />
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold mb-2 text-[#8b6b3e]">
            Majestic Golden Triangle Tour
          </h3>

          {/* Pricing */}
          <p className="font-semibold mb-2">
            Price-Per Person Starting From:
          </p>

          <ul className="text-sm text-gray-700 space-y-1 mb-4">
            <li>• Pocket Friendly: $579 USD</li>
            <li>• Semi Luxury: $899 USD</li>
            <li>• Luxury: $1698 USD</li>
          </ul>

          {/* CTA */}
          <button className="w-full bg-[#8b6b3e] text-white py-2 rounded-full hover:bg-[#6f532f] transition">
            Book This Journey
          </button>

        </div>

      </div>
    </section>
  );
}