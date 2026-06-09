"use client";

import Image from "next/image";

export default function BookingCard() {

  const handleScrollToForm = () => {
    const formSection = document.getElementById("booking-form");

    if (formSection) {
      formSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className="
        ticky top-24 bg-white 
        rounded-md shadow-md p-2 
        border border-[#eee7dd]  max-w-[350px] ml-auto
      "
    >

      {/* Map Image */}
      <div className="rounded-md overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779531381/map_nc9xhj.png"
          alt="Route map of Royal Rajasthan and Sacred Ganges Tour by India Heritage Travel"
          width={400}
          height={250}
          className="
            w-full object-cover
          "
        />
      </div>

      {/* Content */}
      <div className="px-3 pb-3">

        {/* Title */}
        <h3
          className="
            text-[13px] sm:text-[14px] md:text-[15px] mt-2 text-center font-medium text-[#AF956C] mb-2 leading-snug tracking-[0.01em]
          "
        >
          Royal Rajasthan & Sacred Ganges Tour
        </h3>

        {/* Pricing Label */}
        <p
          className="
            text-[12px] sm:text-[13px] md:text-[13.5px] text-center text-gray-800 font-medium mb-3
          "
        >
          Price-Per Person Starting From:
        </p>

        {/* Pricing List */}
        <ul
          className="
            text-[11px] sm:text-[11.5px] md:text-[12px] text-gray-600 space-y-1.5 sm:space-y-2 mb-4 sm:mb-5
          "
        >

          <li className="flex justify-between items-center">
            <span>Pocket Friendly</span>
            <span className="text-gray-700">
              $1821USD
            </span>
          </li>

          <li className="flex justify-between items-center">
            <span>Semi Luxury</span>
            <span className="text-gray-700">
              $2480USD
            </span>
          </li>

          <li className="flex justify-between items-center">
            <span className="text-gray-700">
              Luxury
            </span>

            <span className="text-gray-700">
              $4279USD
            </span>
          </li>

        </ul>

        {/* CTA Button */}
        <button
        onClick={handleScrollToForm}
          className="
            w-full
            bg-[#AF956C]
            text-white
            py-2.5
            rounded-full
            text-xs
            tracking-wide
            transition-all
            duration-300
            hover:bg-[#8f7654]
            hover:shadow-sm
          "
        >
          Book This Journey
        </button>

      </div>
    </div>
  );
}