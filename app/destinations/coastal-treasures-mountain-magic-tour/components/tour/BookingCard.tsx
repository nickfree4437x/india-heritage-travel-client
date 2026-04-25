"use client";

import Image from "next/image";

export default function BookingCard() {
  return (
    <div
      className="sticky top-24 bg-white rounded-md p-2
                 shadow-sm
                 border border-[#eee7dd] 
                 overflow-hidden w-full max-w-sm ml-auto"
    >

      {/* 🔥 MAP (FULL WIDTH - NO GAPS) */}
      <div className="relative w-full h-[260px]">
        <Image
          src="/destination/coastal-tour/map.jpg"
          alt="Kerala Tour Map"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 🔥 CONTENT */}
      <div className="p-5">

        {/* Title */}
        <h3 className="text-[16.5px] font-semibold text-[#AF956C] mb-2 leading-snug">
          Coastal Treasures & Mountain Magic
        </h3>

        {/* Label */}
        <p className="text-[13.5px] text-gray-800 font-medium mb-3">
          Price-Per Person Starting From:
        </p>

        {/* Pricing */}
        <ul className="text-[13.5px] text-gray-600 space-y-2 mb-5 list-disc pl-4">

          <li className="flex justify-between items-center">
            <span>Pocket Friendly</span>
            <span className="font-semibold text-gray-800">$1200 USD</span>
          </li>

          <li className="flex justify-between items-center">
            <span>Semi Luxury</span>
            <span className="font-semibold text-gray-800">$1560 USD</span>
          </li>

          <li className="flex justify-between items-center">
            <span>Luxury</span>
            <span className="font-semibold text-gray-800">$2270 USD</span>
          </li>

        </ul>

        {/* Divider */}
        <div className="h-px bg-[#eee7dd] mb-4"></div>

        {/* CTA */}
        <button
          className="w-full bg-[#AF956C] text-white py-2.5 rounded-full 
                     text-sm tracking-wide
                     transition-all duration-300
                     hover:bg-[#8f7654] hover:shadow-sm hover:-translate-y-[1px]"
        >
          Book This Journey
        </button>

      </div>

    </div>
  );
}