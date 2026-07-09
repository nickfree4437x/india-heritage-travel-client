"use client";

import { Briefcase, Users, User, Flower } from "lucide-react";

export default function DesignedFor() {
  // Designed for items data
  const items = [
    {
      icon: Flower,
      text: "Spiritual, Cultural, Artistic & Gastronomic Interests",
    },
    {
      icon: Briefcase,
      text: "Corporate Travel",
    },
    {
      icon: Users,
      text: "Friends & Family Travel",
    },
    {
      icon: User,
      text: "Solo Travel",
    },
  ];

  return (
    <section
      className="
        bg-white
        pt-8 sm:pt-8
        pb-8 sm:pb-10
        px-4 sm:px-6
        scroll-mt-24 md:scroll-mt-16
      "
      id="about"
    >
      {/* Section Heading */}
      <h2 className="
        text-[20px] sm:text-[24px] md:text-[26px]
        font-semibold
        text-center
        text-[#2c2c2c]
        tracking-wide
        mb-6 sm:mb-8
      ">
        Designed For
      </h2>

      {/* Items Grid */}
      <div className="
        grid grid-cols-2 md:grid-cols-4
        gap-x-4 sm:gap-x-8 md:gap-x-12
        gap-y-8 sm:gap-y-10
        max-w-7xl mx-auto
        text-center
      ">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
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
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}