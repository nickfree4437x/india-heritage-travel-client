"use client";

import Image from "next/image";

export default function BookingCard() {
  return (
    <div className="sticky top-24 bg-white shadow-lg rounded-xl p-5 border">

      {/* Map Image */}
      <Image
        src="/adventure/delights/map.jpg"
        alt="Tour Map"
        width={400}
        height={250}
        className="rounded-md mb-4"
      />

      <h3 className="text-lg font-semibold mb-3">
        Southern Delights: A Journey Through Time Tour
      </h3>

      <p className="font-medium mb-2">
        Price Per Person Starting From:
      </p>

      <ul className="text-sm text-gray-700 space-y-1 mb-4">
        <li>• Pocket Friendly: $1810 USD</li>
        <li>• Semi Luxury: $2320 USD</li>
        <li>• Luxury: $3420 USD</li>
      </ul>

      <button className="w-full bg-[#9b7a50] text-white py-3 rounded-md hover:opacity-90 transition">
        Book This Journey
      </button>

    </div>
  );
}