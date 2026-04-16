"use client";

import Image from "next/image";

export default function RightBookingCard() {
  return (
    <div className="sticky top-24 bg-white rounded-xl shadow-lg p-5 border">

      {/* Map Image */}
      <div className="rounded-lg overflow-hidden mb-4">
        <Image
          src="/adventure/wildlife/map.jpg"
          alt="Tour Map"
          width={400}
          height={300}
          className="w-full h-[200px] object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-center mb-3">
        A Journey Through Heritage & Wildlife
      </h3>

      {/* Pricing */}
      <div className="text-sm text-gray-700 space-y-2 mb-5">
        <p className="font-medium">Price Per Person Starting From:</p>

        <ul className="space-y-1">
          <li>• Pocket Friendly: <span className="font-semibold">$1111 USD</span></li>
          <li>• Semi Luxury: <span className="font-semibold">$1745 USD</span></li>
          <li>• Luxury: <span className="font-semibold">$33924 USD</span></li>
        </ul>
      </div>

      {/* Button */}
      <button className="w-full bg-[#9b7a50] hover:bg-[#856544] text-white py-3 rounded-lg font-medium transition">
        Book This Journey
      </button>

    </div>
  );
}