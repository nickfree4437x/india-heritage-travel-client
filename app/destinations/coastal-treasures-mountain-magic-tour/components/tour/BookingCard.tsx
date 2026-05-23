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
        max-w-[260px] xs:max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[340px] xl:max-w-[350px]
        mx-auto
      "
    >

      {/* 🔥 MAP */}
      <div
        className="
          relative
          w-full
          h-[180px] xs:h-[270px] sm:h-[290px] md:h-[310px] lg:h-[330px] xl:h-[350px]
          overflow-hidden
          rounded-sm
        "
      >
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779529426/map_xfonwz.png"
          alt="Map"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 260px, (max-width: 768px) 280px, (max-width: 1024px) 300px, 340px"
        />
      </div>

      {/* 🔥 CONTENT */}
      <div className="p-3 sm:p-4 md:p-5">

        {/* TITLE */}
        <h3 className="text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] text-center font-medium text-[#AF956C] mb-2 leading-snug tracking-[0.01em]">
          Coastal Treasures & Mountain Magic
        </h3>

        {/* LABEL */}
        <p className="text-[11px] xs:text-[12px] sm:text-[13px] md:text-[13.5px] text-center text-gray-800 font-medium mb-3">
          Price-Per Person Starting From:
        </p>

        {/* PRICING */}
        <ul className="text-[10px] xs:text-[11px] sm:text-[11.5px] md:text-[12px] text-gray-600 space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
          <li className="flex justify-between items-center">
            <span>Pocket Friendly</span>
            <span className="text-gray-700">$1200 USD</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Semi Luxury</span>
            <span className="text-gray-700">$1560 USD</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Luxury</span>
            <span className="text-gray-700">$2270 USD</span>
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
            text-[10px] xs:text-[11px] sm:text-xs
            tracking-wide
            transition-all duration-300
            hover:bg-[#8f7654]
            hover:shadow-sm
            hover:-translate-y-[1px]
            cursor-pointer
          "
        >
          Book This Journey
        </button>

      </div>

    </div>
  );
}