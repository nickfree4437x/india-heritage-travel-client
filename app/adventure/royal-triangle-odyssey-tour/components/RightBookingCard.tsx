"use client";

import Image from "next/image";

export default function RightBookingCard() {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 border w-full">

      <Image
        src="/adventure/odyssey/map.jpg"
        alt="Tour Map"
        width={300}
        height={200}
        className="rounded-lg mb-4 object-cover w-full h-[180px]"
      />

      <h3 className="text-lg font-semibold text-center mb-3">
        The Royal Heritage Trail Tour
      </h3>

      <p className="text-sm font-medium text-gray-700 mb-2 text-center">
        Price Per Person Starting From:
      </p>

      <ul className="text-sm text-gray-600 space-y-1 mb-4">
        <li>• Pocket Friendly: $675USD</li>
        <li>• Semi Luxury: $1084USD</li>
        <li>• Luxury: $1991USD</li>
      </ul>

      <button className="w-full bg-[#9b7a50] text-white py-2 rounded-full hover:bg-[#7c5f3e] transition">
        Book This Journey
      </button>

    </div>
  );
}