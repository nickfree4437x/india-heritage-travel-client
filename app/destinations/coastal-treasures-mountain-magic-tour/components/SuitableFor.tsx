"use client";

import { Briefcase, Leaf, Users, User } from "lucide-react";

export default function SuitableFor() {
  const navLinks = [
    { name: "Cochin", id: "cochin" },
    { name: "Alleppey", id: "alleppey" },
    { name: "Thekkady", id: "thekkady" },
    { name: "Munnar", id: "munnar" },
    { name: "Mumbai", id: "mumbai" },
  ];

  const items = [
    {
      icon: <Briefcase size={34} />,
      text: "Corporate Travel",
      id: "corporate",
    },
    {
      icon: <Leaf size={34} />,
      text: "Spiritual, Cultural, Artistic & Gastronomic Interests",
      id: "spiritual",
    },
    {
      icon: <Users size={34} />,
      text: "Friends & Family Travel",
      id: "family",
    },
    {
      icon: <User size={34} />,
      text: "Solo Travel",
      id: "solo",
    },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 🔥 STICKY NAV */}
      <div className="sticky top-0 z-30 bg-[#9A7A58] text-white overflow-x-auto">

        <div
          className="
            max-w-6xl mx-auto
            px-4 sm:px-6
            py-4
            flex justify-center items-center
            gap-4 sm:gap-6
            text-[12px] sm:text-[13px] md:text-[15px]
            font-medium
            whitespace-nowrap
          "
        >

          {navLinks.map((link, i) => (
            <div
              key={i}
              className="flex items-center gap-4 sm:gap-6"
            >

              <span
                onClick={() => handleScroll(link.id)}
                className="cursor-pointer hover:underline"
              >
                {link.name}
              </span>

              {i !== navLinks.length - 1 && (
                <span className="opacity-60">|</span>
              )}

            </div>
          ))}

        </div>

      </div>

      {/* 🎯 MAIN SECTION */}
      <section className="bg-[#f4f0ea] pt-10 sm:pt-12 pb-8 sm:pb-10 px-4 sm:px-6">

        {/* 🏷 HEADING */}
        <h2
          className="
            text-[20px] sm:text-[24px] md:text-[28px]
            font-semibold
            text-center
            mb-6 sm:mb-8
            text-[#2c2c2c]
            tracking-wide
          "
        >
          Suitable For
        </h2>

        {/* 🎯 CARDS */}
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
              onClick={() => handleScroll(item.id)}
              className="
                group flex flex-col items-center
                gap-3 sm:gap-4
                px-2 sm:px-4 md:px-6
                py-4 sm:py-6 md:py-8
                rounded-md
                transition-all duration-500
                cursor-pointer
              "
            >

              {/* ICON */}
              <div
                className="
                  text-[#9A7A58]
                  transition-all duration-500
                  group-hover:scale-110
                  sm:w-[38px] sm:h-[38px]
                  md:w-[42px] md:h-[42px]
                  flex items-center justify-center
                "
              >
                {item.icon}
              </div>

              {/* TEXT */}
              <p
                className="
                  font-normal
                  text-[#3a3a3a]
                  text-[12px] sm:text-[13px] md:text-[13px]
                  leading-relaxed
                "
              >
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </section>
    </>
  );
}