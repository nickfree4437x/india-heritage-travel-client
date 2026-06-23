"use client";

import {
  Briefcase,
  Flower2,
  Users,
  PersonStanding,
} from "lucide-react";
import Breadcrumb from "@/src/common/Breadcrumb/Breadcrumb";

// Navigation cities for sticky nav
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

// Suitable for items data
const items = [
  {
    icon: Briefcase,
    title: "Corporate Travel",
  },
  {
    icon: Flower2,
    title: "Spiritual, Cultural, Artistic & Gastronomic Interests",
  },
  {
    icon: Users,
    title: "Friends & Family Travel",
  },
  {
    icon: PersonStanding,
    title: "Solo Travel",
  },
];

export default function Suitable() {
  return (
    <>
      {/* Sticky City Navigation */}
      <div className="sticky top-0 z-30 bg-[#9A7A58] text-white overflow-x-auto">
        <div className="
          max-w-6xl mx-auto
          px-3 sm:px-4 md:px-6
          py-2 sm:py-3 md:py-4
          flex justify-start md:justify-center items-center
          gap-2 sm:gap-4 md:gap-6
          text-[10px] sm:text-[12px] md:text-[13px] lg:text-[15px]
          font-medium
          whitespace-nowrap
          overflow-x-auto
        ">
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

      {/* Breadcrumb */}
      <Breadcrumb title="Rajasthani Heritage Retreat Tour" />

      {/* Main Section */}
      <section className="
        bg-white
        pt-8 sm:pt-8 md:pt-8
        pb-6 sm:pb-8 md:pb-10
        px-3 sm:px-4 md:px-6
      ">
        {/* Section Heading */}
        <h2 className="
          text-[20px] sm:text-[24px] md:text-[28px]
          font-semibold
          text-center
          text-[#2c2c2c]
          tracking-wide
          mb-4 sm:mb-6 md:mb-8
        ">
          Suitable For
        </h2>

        {/* Cards Grid */}
        <div className="
          grid grid-cols-2 md:grid-cols-4
          gap-x-3 sm:gap-x-6 md:gap-x-10 lg:gap-x-12
          gap-y-6 sm:gap-y-8 md:gap-y-10
          max-w-7xl mx-auto
          text-center
        ">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="
                  group
                  flex flex-col items-center
                  gap-2 sm:gap-3 md:gap-4
                  px-1 sm:px-3 md:px-6
                  py-3 sm:py-5 md:py-8
                  rounded-md
                  transition-all duration-500
                "
              >
                <Icon
                  size={28}
                  className="
                    text-[#9A7A58]
                    transition-all duration-500
                    sm:w-[34px] sm:h-[34px]
                    md:w-[38px] md:h-[38px]
                    lg:w-[42px] lg:h-[42px]
                  "
                />
                <p className="
                  font-light
                  text-[#3a3a3a]
                  text-[11px] sm:text-[12px] md:text-[13px]
                  leading-relaxed
                ">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}