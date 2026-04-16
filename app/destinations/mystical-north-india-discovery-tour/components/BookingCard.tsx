"use client";

import Image from "next/image";

export default function BookingCard() {
  return (
    <div className="sticky top-24 bg-white rounded-xl shadow-xl p-5 border max-w-[350px] ml-auto">

      {/* Map */}
      <div className="mb-4 rounded-md overflow-hidden">
        <Image
          src="/destination/north-tour/map.jpg"
          alt="Map"
          width={400}
          height={250}
          className="w-full object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg mb-3">
        Mystical North India Discovery Tour
      </h3>

      {/* Pricing */}
      <p className="font-semibold mb-2">
        Price-Per Person Starting From:
      </p>

      <ul className="text-sm text-gray-700 mb-4 space-y-1">
        <li>• Pocket Friendly: $1270 USD</li>
        <li>• Semi Luxury: $1669 USD</li>
        <li>• Luxury: $2710 USD</li>
      </ul>

      {/* Button */}
      <button className="w-full bg-[#9b7a50] text-white py-2 rounded-full hover:bg-[#7d6242] transition">
        Book This Journey
      </button>
    </div>
  );
}