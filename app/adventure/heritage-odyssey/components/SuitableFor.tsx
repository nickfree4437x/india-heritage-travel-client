"use client";

import { Briefcase, Flower2, Users, PersonStanding } from "lucide-react";

export default function SuitableFor() {
  return (
    <>

      {/* 🔥 STICKY LOCATION BAR */}
      <div className="sticky top-0 z-30 bg-[#9A7A58] shadow-sm">

        {/* 🔥 SCROLL WRAPPER */}
        <div className="overflow-x-auto scrollbar-hide">

          <div
            className="
              min-w-max
              max-w-6xl mx-auto

              flex items-center
              justify-start sm:justify-center

              px-3 sm:px-5 lg:px-6
              py-3 sm:py-4

              gap-3 sm:gap-5 md:gap-6
            "
          >

            <a
              href="#delhi"
              className="
                whitespace-nowrap
                text-[11px] sm:text-[13px] md:text-[14px]
                font-medium
                tracking-[0.02em]
                text-white/95
                hover:text-white
                transition-all duration-300
                shrink-0 hover:underline
              "
            >
              Delhi
            </a>

            <span className="text-white/40 shrink-0">|</span>

            <a
              href="#jaipur"
              className="
                whitespace-nowrap
                text-[11px] sm:text-[13px] md:text-[14px]
                font-medium
                tracking-[0.02em]
                text-white/95
                hover:text-white
                transition-all duration-300
                shrink-0 hover:underline
              "
            >
              Jaipur
            </a>

            <span className="text-white/40 shrink-0">|</span>

            <a
              href="#agra"
              className="
                whitespace-nowrap
                text-[11px] sm:text-[13px] md:text-[14px]
                font-medium
                tracking-[0.02em]
                text-white/95
                hover:text-white
                transition-all duration-300
                shrink-0 hover:underline
              "
            >
              Agra
            </a>

            <span className="text-white/40 shrink-0">|</span>

            <a
              href="#ajanta"
              className="
                whitespace-nowrap
                text-[11px] sm:text-[13px] md:text-[14px]
                font-medium
                tracking-[0.02em]
                text-white/95
                hover:text-white
                transition-all duration-300
                shrink-0 hover:underline
              "
            >
              Ajanta & Ellora
            </a>

            <span className="text-white/40 shrink-0">|</span>

            <a
              href="#mumbai"
              className="
                whitespace-nowrap
                text-[11px] sm:text-[13px] md:text-[14px]
                font-medium
                tracking-[0.02em]
                text-white/95
                hover:text-white
                transition-all duration-300
                shrink-0 hover:underline
              "
            >
              Mumbai
            </a>

            <span className="text-white/40 shrink-0">|</span>

            <a
              href="#cochin"
              className="
                whitespace-nowrap
                text-[11px] sm:text-[13px] md:text-[14px]
                font-medium
                tracking-[0.02em]
                text-white/95
                hover:text-white
                transition-all duration-300
                shrink-0 hover:underline
              "
            >
              Cochin
            </a>

            <span className="text-white/40 shrink-0">|</span>

            <a
              href="#alleppey"
              className="
                whitespace-nowrap
                text-[11px] sm:text-[13px] md:text-[14px]
                font-medium
                tracking-[0.02em]
                text-white/95
                hover:text-white
                transition-all duration-300
                shrink-0 hover:underline
              "
            >
              Alleppey
            </a>

            <span className="text-white/40 shrink-0">|</span>

            <a
              href="#thekkady"
              className="
                whitespace-nowrap
                text-[11px] sm:text-[13px] md:text-[14px]
                font-medium
                tracking-[0.02em]
                text-white/95
                hover:text-white
                transition-all duration-300
                shrink-0 hover:underline
              "
            >
              Thekkady
            </a>

            <span className="text-white/40 shrink-0">|</span>

            <a
              href="#munnar"
              className="
                whitespace-nowrap
                text-[11px] sm:text-[13px] md:text-[14px]
                font-medium
                tracking-[0.02em]
                text-white/95
                hover:text-white
                transition-all duration-300
                shrink-0 hover:underline
              "
            >
              Munnar
            </a>
          </div>
        </div>
      </div>

      {/* 🎯 MAIN SECTION */}
      <section
        className="bg-[#f8f6f2] pt-10 sm:pt-12 pb-8 sm:pb-10 px-4 sm:px-6"
      >

        {/* 🔥 CONTAINER */}
        <div
          className="
            max-w-[1400px]
            mx-auto
            px-3 sm:px-4 md:px-6 lg:px-8
          "
        >

          {/* 🔥 TITLE */}
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

          {/* 🔥 ICON GRID */}
          <div
            className="
              grid grid-cols-2 md:grid-cols-4
            gap-x-4 sm:gap-x-8 md:gap-x-12
            gap-y-8 sm:gap-y-10
            max-w-7xl mx-auto
            text-center
            "
          >

            {/* 🔹 CARD */}
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

            {/* 🔹 CARD */}
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

              <Flower2
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
                Spiritual, Cultural, Artistic &
                Gastronomic Interests
              </p>

            </div>

            {/* 🔹 CARD */}
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

            {/* 🔹 CARD */}
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

              <PersonStanding
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
                Solo Travel
              </p>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}