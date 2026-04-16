"use client";

import Image from "next/image";

export default function BookingCard() {
  return (
    <div className="sticky top-24 bg-white rounded-xl shadow-lg p-5">

      {/* Map */}
      <div className="relative w-full h-[200px] rounded-md overflow-hidden mb-4">
        <Image
          src="/destination/heritage-tour/map.jpg"
          alt="Map"
          fill
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2 text-[#8b6b3e]">
        Rajasthani Heritage Retreat Tour
      </h3>

      {/* Pricing */}
      <p className="font-semibold mb-2">
        Price-Per Person Starting From:
      </p>

      <ul className="text-sm text-gray-700 space-y-1 mb-4">
        <li>• Pocket Friendly: $1390 USD</li>
        <li>• Semi Luxury: $1902 USD</li>
        <li>• Luxury: $3392 USD</li>
      </ul>

      {/* CTA */}
      <button className="w-full bg-[#8b6b3e] text-white py-2 rounded-full hover:bg-[#6f532f] transition">
        Book This Journey
      </button>

    </div>
  );
}