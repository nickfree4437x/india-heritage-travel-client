"use client";

import {
  Briefcase,
  Flower2,
  Users,
  PersonStanding,
} from "lucide-react";

const cities = [
  "Delhi",
  "Mandawa",
  "Bikaner",
  "Jaisalmer",
  "Jodhpur",
  "Udaipur",
  "Pushkar",
  "Jaipur",
  "Agra",
];

export default function Suitable() {
  return (
    <>
      {/* 🔥 STICKY CITY NAV (Hero ke niche chipka hua) */}
      <div className="sticky top-0 z-30 bg-[#9A7A58] text-white overflow-x-auto">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex justify-start md:justify-center items-center gap-2 sm:gap-4 md:gap-6 text-[10px] sm:text-[12px] md:text-[13px] lg:text-[15px] font-medium whitespace-nowrap overflow-x-auto">
          {cities.map((city, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-4">
              <a
                href={`#${city.toLowerCase()}`}
                className="relative hover:underline transition"
              >
                {city}
              </a>
              {i !== cities.length - 1 && (
                <span className="opacity-60">|</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 🎯 MAIN SECTION */}
      <section className="bg-[#f8f6f2] pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-8 md:pb-10 px-3 sm:px-4 md:px-6">
        {/* 🏷 Heading */}
        <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-center mb-4 sm:mb-6 md:mb-8 text-[#2c2c2c] tracking-wide">
          Suitable For
        </h2>

        {/* 🎯 Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 sm:gap-x-6 md:gap-x-10 lg:gap-x-12 gap-y-6 sm:gap-y-8 md:gap-y-10 max-w-7xl mx-auto text-center">
          {/* CARD 1 */}
          <div className="group flex flex-col items-center gap-2 sm:gap-3 md:gap-4 px-1 sm:px-3 md:px-6 py-3 sm:py-5 md:py-8 rounded-md transition-all duration-500">
            <Briefcase
              size={28}
              className="text-[#9A7A58] transition-all duration-500 sm:w-[34px] sm:h-[34px] md:w-[38px] md:h-[38px] lg:w-[42px] lg:h-[42px]"
            />
            <p className="font-normal text-[#3a3a3a] text-[11px] sm:text-[12px] md:text-[13px] leading-relaxed">
              Corporate Travel
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group flex flex-col items-center gap-2 sm:gap-3 md:gap-4 px-1 sm:px-3 md:px-6 py-3 sm:py-5 md:py-8 rounded-md transition-all duration-500">
            <Flower2
              size={28}
              className="text-[#9A7A58] transition-all duration-500 sm:w-[34px] sm:h-[34px] md:w-[38px] md:h-[38px] lg:w-[42px] lg:h-[42px]"
            />
            <p className="font-normal text-[#3a3a3a] text-[11px] sm:text-[12px] md:text-[13px] leading-relaxed">
              Spiritual, Cultural, Artistic & Gastronomic Interests
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group flex flex-col items-center gap-2 sm:gap-3 md:gap-4 px-1 sm:px-3 md:px-6 py-3 sm:py-5 md:py-8 rounded-md transition-all duration-500">
            <Users
              size={28}
              className="text-[#9A7A58] transition-all duration-500 sm:w-[34px] sm:h-[34px] md:w-[38px] md:h-[38px] lg:w-[42px] lg:h-[42px]"
            />
            <p className="font-normal text-[#3a3a3a] text-[11px] sm:text-[12px] md:text-[13px] leading-relaxed">
              Friends & Family Travel
            </p>
          </div>

          {/* CARD 4 */}
          <div className="group flex flex-col items-center gap-2 sm:gap-3 md:gap-4 px-1 sm:px-3 md:px-6 py-3 sm:py-5 md:py-8 rounded-md transition-all duration-500">
            <PersonStanding
              size={28}
              className="text-[#9A7A58] transition-all duration-500 sm:w-[34px] sm:h-[34px] md:w-[38px] md:h-[38px] lg:w-[42px] lg:h-[42px]"
            />
            <p className="font-normal text-[#3a3a3a] text-[11px] sm:text-[12px] md:text-[13px] leading-relaxed">
              Solo Travel
            </p>
          </div>
        </div>
      </section>
    </>
  );
}