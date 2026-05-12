"use client";

import Image from "next/image";

export default function BookingCard() {
  return (
    <div
      className="
        sticky top-24
        bg-white
        rounded-md
        shadow-sm p-2 sm:p-3
        border border-[#eee7dd]
        overflow-hidden
        w-full
        max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[350px]
        mx-auto mb-8
      "
    >

      {/* 🔥 MAP */}
      <div className="relative w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] overflow-hidden">
        <Image
          src="/destination/golden-triangle/map.jpg"
          alt="Map"
          fill
          priority
          className="object-cover object-top"
        />
      </div>

      {/* 🔥 CONTENT */}
      <div className="p-3 sm:p-4 md:p-5">

        {/* Title */}
        <h3 className="text-[13px] sm:text-[14px] md:text-[15px] text-center font-medium text-[#AF956C] mb-2 leading-snug tracking-[0.01em]">
          Majestic Golden Triangle Tour
        </h3>

        {/* Label */}
        <p className="text-[12px] sm:text-[13px] md:text-[13.5px] text-center text-gray-800 font-medium mb-3">
          Price-Per Person Starting From:
        </p>

        {/* Pricing */}
        <ul className="text-[11px] sm:text-[11.5px] md:text-[12px] text-gray-600 space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">

          <li className="flex justify-between items-center">
            <span>Pocket Friendly</span>
            <span className="text-gray-700">$579</span>
          </li>

          <li className="flex justify-between items-center">
            <span>Semi Luxury</span>
            <span className="text-gray-700">$899</span>
          </li>

          <li className="flex justify-between items-center">
            <span>Luxury</span>
            <span className="text-gray-700">$1698</span>
          </li>

        </ul>
        {/* CTA */}
        <button
          className="
            w-full
            bg-[#AF956C]
            text-white
            py-2 sm:py-2.5
            rounded-full
            text-[11px] sm:text-xs
            tracking-wide
            transition-all duration-300
            hover:bg-[#8f7654]
            hover:shadow-sm
            hover:-translate-y-[1px]
          "
        >
          Book This Journey
        </button>

      </div>

    </div>
  );
}