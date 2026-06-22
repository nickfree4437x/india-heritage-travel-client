"use client";

import Image from "next/image";

export default function BookingCard() {
  // Scroll to booking form
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
    <div className="bg-white shadow-md rounded-md p-2 border border-[#eee7dd] max-w-[350px] ml-auto">
      {/* Map Image */}
      <div className="rounded-t-md overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779538247/map_hwxmof.png"
          alt="Route map of Heritage Odyssey North to South India tour package covering major cultural and heritage destinations"
          width={400}
          height={250}
          className="w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Tour Title */}
        <h3 className="
          text-[13px] sm:text-[14px] md:text-[15px]
          text-center
          font-medium
          text-[#AF956C]
          mb-2
          leading-snug
          tracking-[0.01em]
        ">
          Heritage Odyssey: North to South India Tour
        </h3>

        {/* Price Label */}
        <p className="
          text-[12px] sm:text-[13px] md:text-[13.5px]
          text-center
          text-gray-800
          font-medium
          mb-3
        ">
          Price-Per Person Starting From:
        </p>

        {/* Pricing Options */}
        <ul className="
          text-[11px] sm:text-[11.5px] md:text-[12px]
          text-gray-600
          space-y-1.5 sm:space-y-2
          mb-4 sm:mb-5
        ">
          <li className="flex justify-between items-center">
            <span>Pocket Friendly</span>
            <span className="text-gray-700">₹45,000</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Semi Luxury</span>
            <span className="text-gray-700">₹65,000</span>
          </li>
          <li className="flex justify-between items-center">
            <span>Luxury</span>
            <span className="text-gray-700">₹95,000</span>
          </li>
        </ul>

        {/* CTA Button */}
        <button
          onClick={handleScrollToForm}
          className="
            w-full
            bg-[#AF956C] text-white
            py-2 sm:py-2.5
            rounded-full
            text-[11px] sm:text-xs
            tracking-wide
            transition-all duration-300
            hover:bg-[#8f7654] hover:shadow-sm
          "
        >
          Book This Journey
        </button>
      </div>
    </div>
  );
}