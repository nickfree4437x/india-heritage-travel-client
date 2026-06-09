"use client";

import { Briefcase, Flower2, Users, PersonStanding } from "lucide-react";
import Breadcrumb from "@/src/common/Breadcrumb/Breadcrumb";

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Suitable() {
  // ==========================================================================
  // MAIN RENDER
  // ==========================================================================

  return (
    <>
      {/* ====================================================================
          STICKY NAVIGATION BAR - Tour Sections
      ==================================================================== */}
      <div className="sticky top-0 z-30 bg-[#9A7A58] text-white overflow-x-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-center items-center gap-4 sm:gap-6 text-[12px] sm:text-[13px] md:text-[15px] font-medium whitespace-nowrap">
          <a href="#delhi" className="relative group hover:underline">
            Delhi
          </a>
          <span className="opacity-60">|</span>
          <a href="#agra" className="relative group hover:underline">
            Agra
          </a>
          <span className="opacity-60">|</span>
          <a href="#jaipur" className="relative group hover:underline">
            Jaipur
          </a>
        </div>
      </div>

      <Breadcrumb
        title="Majestic Golden Triangle Tour"
      />

      {/* ====================================================================
          MAIN SECTION - Suitable For
      ==================================================================== */}
      <section className="bg-white pt-8 sm:pt-8 pb-8 sm:pb-10 px-4 sm:px-6">
        {/* Section Heading */}
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

        {/* Cards Grid */}
        <div
          className="
            grid grid-cols-2 md:grid-cols-4
            gap-x-4 sm:gap-x-8 md:gap-x-12
            gap-y-8 sm:gap-y-10
            max-w-7xl mx-auto
            text-center
          "
        >
          {/* Card 1 - Corporate Travel */}
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

          {/* Card 2 - Spiritual, Cultural, Artistic & Gastronomic Interests */}
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

          {/* Card 3 - Friends & Family Travel */}
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

          {/* Card 4 - Solo Travel */}
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
      </section>
    </>
  );
}