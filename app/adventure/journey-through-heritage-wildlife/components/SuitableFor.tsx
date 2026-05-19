"use client";

import {
  Briefcase,
  Leaf,
  Users,
  Mountain,
} from "lucide-react";

export default function SuitableFor() {
  return (
    <>
      {/* 🔥 STICKY NAV */}
      <div className="sticky top-0 z-30 bg-[#9A7A58] text-white shadow-sm">
        <div className="overflow-x-auto scrollbar-hide">
          
          {/* CENTERED NAV */}
          <div className="flex justify-center min-w-max">
            <div
              className="
                flex items-center
                px-4 sm:px-6
                py-3 sm:py-4

                gap-3 sm:gap-5 md:gap-6

                text-[11px] sm:text-[13px] md:text-[15px]
                font-medium
                whitespace-nowrap
              "
            >
              <a
                href="#delhi"
                className="hover:underline transition-colors shrink-0"
              >
                Delhi
              </a>

              <span className="opacity-60 shrink-0">|</span>

              <a
                href="#mandawa"
                className="hover:underline transition-colors shrink-0"
              >
                Mandawa
              </a>

              <span className="opacity-60 shrink-0">|</span>

              <a
                href="#pushkar"
                className="hover:underline transition-colors shrink-0"
              >
                Pushkar
              </a>

              <span className="opacity-60 shrink-0">|</span>

              <a
                href="#bundi"
                className="hover:underline transition-colors shrink-0"
              >
                Bundi
              </a>

              <span className="opacity-60 shrink-0">|</span>

              <a
                href="#ranthambore"
                className="hover:underline transition-colors shrink-0"
              >
                Ranthambore
              </a>

              <span className="opacity-60 shrink-0">|</span>

              <a
                href="#jaipur"
                className="hover:underline transition-colors shrink-0"
              >
                Jaipur
              </a>

              <span className="opacity-60 shrink-0">|</span>

              <a
                href="#agra"
                className="hover:underline transition-colors shrink-0"
              >
                Agra
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🎯 MAIN SECTION */}
      <section className="bg-[#f8f6f2] pt-10 sm:pt-12 pb-8 sm:pb-10 px-4 sm:px-6">

        {/* 🏷 Heading */}
        <h2
          className="
            text-[20px] sm:text-[24px] md:text-[26px]
            font-semibold
            text-center
            mb-6 sm:mb-8
            text-[#2c2c2c]
            tracking-wide
          "
        >
          Suitable For
        </h2>

        {/* 🎯 GRID */}
        <div
          className="
            grid grid-cols-2 md:grid-cols-4
            gap-x-4 sm:gap-x-8 md:gap-x-12
            gap-y-8 sm:gap-y-10
            max-w-7xl mx-auto
            text-center
          "
        >

          {/* CARD */}
          <div
            className="
              group flex flex-col items-center
              gap-3 sm:gap-4
              px-2 sm:px-4 md:px-6
              py-4 sm:py-6 md:py-8
              rounded-md
              transition-all duration-500
            "
          >
            <Briefcase
              size={34}
              className="
                text-[#9A7A58]
                transition-all duration-500
                sm:w-[38px] sm:h-[38px]
                md:w-[42px] md:h-[42px]
              "
            />

            <p
              className="
                font-light
                text-[#3a3a3a]
                text-[12px] sm:text-[13px] md:text-[13px]
                leading-relaxed
              "
            >
              Corporate Travel
            </p>
          </div>

          {/* CARD */}
          <div
            className="
              group flex flex-col items-center
              gap-3 sm:gap-4
              px-2 sm:px-4 md:px-6
              py-4 sm:py-6 md:py-8
              rounded-md
              transition-all duration-500
            "
          >
            <Leaf
              size={34}
              className="
                text-[#9A7A58]
                transition-all duration-500
                sm:w-[38px] sm:h-[38px]
                md:w-[42px] md:h-[42px]
              "
            />

            <p
              className="
                font-light
                text-[#3a3a3a]
                text-[12px] sm:text-[13px] md:text-[13px]
                leading-relaxed
              "
            >
              Nature & Wildlife Enthusiasts
            </p>
          </div>

          {/* CARD */}
          <div
            className="
              group flex flex-col items-center
              gap-3 sm:gap-4
              px-2 sm:px-4 md:px-6
              py-4 sm:py-6 md:py-8
              rounded-md
              transition-all duration-500
            "
          >
            <Users
              size={34}
              className="
                text-[#9A7A58]
                transition-all duration-500
                sm:w-[38px] sm:h-[38px]
                md:w-[42px] md:h-[42px]
              "
            />

            <p
              className="
                font-light
                text-[#3a3a3a]
                text-[12px] sm:text-[13px] md:text-[13px]
                leading-relaxed
              "
            >
              Friends & Family Travel
            </p>
          </div>

          {/* CARD */}
          <div
            className="
              group flex flex-col items-center
              gap-3 sm:gap-4
              px-2 sm:px-4 md:px-6
              py-4 sm:py-6 md:py-8
              rounded-md
              transition-all duration-500
            "
          >
            <Mountain
              size={34}
              className="
                text-[#9A7A58]
                transition-all duration-500
                sm:w-[38px] sm:h-[38px]
                md:w-[42px] md:h-[42px]
              "
            />

            <p
              className="
                font-light
                text-[#3a3a3a]
                text-[12px] sm:text-[13px] md:text-[13px]
                leading-relaxed
              "
            >
              Adventure Seekers
            </p>
          </div>

        </div>
      </section>
    </>
  );
}