"use client";

import Image from "next/image";

export default function BookingCard() {
  return (
    <div className="bg-[#f8f6f2] rounded-xl shadow-md p-5">

      {/* Map Image */}
      <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
        <Image
          src="/adventure/ganga-tour/map.jpg"
          alt="Tour Map"
          fill
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-[#3d2f1c] mb-3">
        Royal Rajasthan & Sacred Ganges Tour
      </h3>

      {/* Pricing */}
      <p className="font-semibold mb-2">
        Price-Per Person Starting From:
      </p>

      <ul className="text-sm text-gray-700 space-y-1 mb-4">
        <li>• Pocket Friendly: $1821USD</li>
        <li>• Semi Luxury: $2480USD</li>
        <li>• Luxury: $4279USD</li>
      </ul>

      {/* Button */}
      <button className="w-full bg-[#9b7a50] text-white py-3 rounded-full hover:bg-[#7c623f] transition">
        Book This Journey
      </button>
    </div>
  );
}