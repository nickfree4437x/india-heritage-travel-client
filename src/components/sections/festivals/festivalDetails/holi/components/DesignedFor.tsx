"use client";

import {
  Briefcase,
  Users,
  User,
  Flower,
} from "lucide-react";

export default function DesignedFor() {
  const items = [
    {
      icon: <Flower className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] md:w-[42px] md:h-[42px]" />,
      text: "Spiritual, Cultural, Artistic & Gastronomic Interests",
    },
    {
      icon: <Briefcase className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] md:w-[42px] md:h-[42px]" />,
      text: "Corporate Travel",
    },
    {
      icon: <Users className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] md:w-[42px] md:h-[42px]" />,
      text: "Friends & Family Travel",
    },
    {
      icon: <User className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] md:w-[42px] md:h-[42px]" />,
      text: "Solo Travel",
    },
  ];

  return (
    <section
      className="
        bg-[#f4f0ea]
        pt-10 sm:pt-12
        pb-8 sm:pb-10
        px-4 sm:px-6
      "
      id="about"
    >

      {/* 🔥 HEADING */}
      <h2
        className="
          text-[20px]
          sm:text-[24px]
          md:text-[26px]
          font-semibold
          text-center
          mb-6 sm:mb-8
          text-[#2c2c2c]
          tracking-wide
        "
      >
        Designed For
      </h2>

      {/* 🔥 GRID */}
      <div
        className="
          grid grid-cols-2 md:grid-cols-4
          gap-x-4 sm:gap-x-8 md:gap-x-12
          gap-y-8 sm:gap-y-10
          max-w-7xl mx-auto
          text-center
        "
      >

        {items.map((item, i) => (
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

            {/* 🔥 ICON */}
            <div
              className="
                text-[#9A7A58]
                transition-all duration-500
              "
            >
              {item.icon}
            </div>

            {/* 🔥 TEXT */}
            <p
              className="
                font-light
                text-[#3a3a3a]
                text-[12px]
                sm:text-[13px]
                md:text-[13px]
                leading-relaxed
              "
            >
              {item.text}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}