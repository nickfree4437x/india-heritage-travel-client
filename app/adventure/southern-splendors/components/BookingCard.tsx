"use client";

import Image from "next/image";

export default function BookingCard() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border">

      {/* Map Image */}
      <div className="relative w-full h-48">
        <Image
          src="/adventure/splendors/map.jpg"
          alt="Tour Map"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 text-center">

        <h3 className="text-[#9b7a50] font-semibold mb-3">
          Southern Splendors: Culture & Nature Trail Tour
        </h3>

        <p className="font-semibold mb-4">
          Price-Per Person Starting From:
        </p>

        <ul className="text-sm text-gray-700 space-y-2 mb-5">
          <li>• Pocket Friendly: $2145USD</li>
          <li>• Semi Luxury: $2650USD</li>
          <li>• Luxury: $4025USD</li>
        </ul>

        <button className="bg-[#9b7a50] text-white px-6 py-3 rounded-full hover:bg-[#7d6242] transition">
          Book This Journey
        </button>

      </div>
    </div>
  );
}