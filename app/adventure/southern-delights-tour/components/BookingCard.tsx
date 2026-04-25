"use client";

import Image from "next/image";

export default function BookingCard() {
  return (
    <div className="sticky top-24 bg-white shadow-md rounded-md p-2 border border-[#eee7dd] max-w-[350px] ml-auto">

      {/* Map */}
      <div className="mb-4 rounded-md overflow-hidden">
        <Image
          src="/adventure/delights/map.jpg"
          alt="Tour Map"
          width={400}
          height={250}
          className="w-full object-cover"
        />
      </div>

      <div className="p-5">

        {/* Title */}
        <h3 className="text-[16.5px] font-semibold text-[#AF956C] mb-2 leading-snug">
          Southern Delights: A Journey Through Time Tour
        </h3>

        {/* Label */}
        <p className="text-[13.5px] text-gray-800 font-medium mb-3">
          Price-Per Person Starting From:
        </p>

        {/* Pricing */}
        <ul className="text-[13.5px] text-gray-600 space-y-2 mb-5">

          <li className="flex justify-between items-center">
            <span>Pocket Friendly</span>
            <span className="font-semibold text-gray-800">$1810 USD</span>
          </li>

          <li className="flex justify-between items-center">
            <span>Semi Luxury</span>
            <span className="font-semibold text-gray-800">$2320 USD</span>
          </li>

          <li className="flex justify-between items-center">
            <span>Luxury</span>
            <span className="font-semibold text-gray-800">$3420 USD</span>
          </li>

        </ul>

        {/* CTA */}
        <button className="w-full bg-[#AF956C] text-white py-2.5 rounded-full 
                           text-sm tracking-wide
                           transition-all duration-300
                           hover:bg-[#8f7654] hover:shadow-sm hover:-translate-y-[1px]">
          Book This Journey
        </button>

      </div>
    </div>
  );
}