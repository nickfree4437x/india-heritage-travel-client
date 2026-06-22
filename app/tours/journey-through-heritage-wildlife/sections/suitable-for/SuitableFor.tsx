"use client";

import {
  Briefcase,
  Leaf,
  Users,
  Mountain,
} from "lucide-react";
import Breadcrumb from "@/src/common/Breadcrumb/Breadcrumb";

export default function SuitableFor() {
  // Navigation links for sticky nav
  const navLinks = [
    { name: "Delhi", id: "delhi" },
    { name: "Mandawa", id: "mandawa" },
    { name: "Pushkar", id: "pushkar" },
    { name: "Bundi", id: "bundi" },
    { name: "Ranthambore", id: "ranthambore" },
    { name: "Jaipur", id: "jaipur" },
    { name: "Agra", id: "agra" },
  ];

  // Suitable for items data
  const items = [
    {
      icon: Briefcase,
      title: "Corporate Travel",
    },
    {
      icon: Leaf,
      title: "Nature & Wildlife Enthusiasts",
    },
    {
      icon: Users,
      title: "Friends & Family Travel",
    },
    {
      icon: Mountain,
      title: "Adventure Seekers",
    },
  ];

  return (
    <>
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-30 bg-[#9A7A58] text-white shadow-sm">
        <div className="overflow-x-auto scrollbar-hide">
          {/* Centered Nav */}
          <div className="flex justify-center min-w-max">
            <div className="
              flex items-center
              px-4 sm:px-6
              py-3 sm:py-4
              gap-3 sm:gap-5 md:gap-6
              text-[11px] sm:text-[13px] md:text-[15px]
              font-medium
              whitespace-nowrap
            ">
              {navLinks.map((link, index) => (
                <div key={link.id} className="flex items-center gap-3 sm:gap-5 md:gap-6">
                  <a
                    href={`#${link.id}`}
                    className="hover:underline transition-colors shrink-0"
                  >
                    {link.name}
                  </a>
                  {index !== navLinks.length - 1 && (
                    <span className="opacity-60 shrink-0">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <Breadcrumb title="Journey Through Heritage Wildlife Tour" />

      {/* Main Section */}
      <section className="bg-white pt-8 sm:pt-8 pb-8 sm:pb-10 px-4 sm:px-6">
        {/* Section Heading */}
        <h2 className="
          text-[20px] sm:text-[24px] md:text-[26px]
          font-semibold
          text-center
          text-[#2c2c2c]
          tracking-wide
          mb-6 sm:mb-8
        ">
          Suitable For
        </h2>

        {/* Cards Grid */}
        <div className="
          grid grid-cols-2 md:grid-cols-4
          gap-x-4 sm:gap-x-8 md:gap-x-12
          gap-y-8 sm:gap-y-10
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
                  gap-3 sm:gap-4
                  px-2 sm:px-4 md:px-6
                  py-4 sm:py-6 md:py-8
                  rounded-md
                  transition-all duration-500
                "
              >
                <Icon
                  size={34}
                  className="
                    text-[#9A7A58]
                    transition-all duration-500
                    sm:w-[38px] sm:h-[38px]
                    md:w-[42px] md:h-[42px]
                  "
                />
                <p className="
                  font-light
                  text-[#3a3a3a]
                  text-[12px] sm:text-[13px] md:text-[13px]
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