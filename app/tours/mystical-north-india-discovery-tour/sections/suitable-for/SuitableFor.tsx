"use client";

import { Briefcase, Flower2, Users, PersonStanding } from "lucide-react";
import Breadcrumb from "@/src/common/Breadcrumb/Breadcrumb";

export default function SuitableFor() {
  const navLinks = [
    { name: "Delhi", id: "delhi" },
    { name: "Mandawa", id: "mandawa" },
    { name: "Jaipur", id: "jaipur" },
    { name: "Agra", id: "agra" },
    { name: "Orchha", id: "orchha" },
    { name: "Khajuraho", id: "khajuraho" },
    { name: "Varanasi", id: "varanasi" },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* 🔥 STICKY NAV */}
      <div className="sticky top-0 z-30 bg-[#9A7A58] shadow-sm">

      {/* SCROLL CONTAINER */}
      <div
        className="
          overflow-x-auto
          scrollbar-hide
        "
      >

        <div
          className="
            min-w-max
            max-w-6xl mx-auto

            px-4 sm:px-6 lg:px-8
            py-3 sm:py-4

            flex items-center justify-start sm:justify-center

            gap-4 sm:gap-5 md:gap-6
          "
        >

          {navLinks.map((link, i) => (
            <div
              key={i}
              className="flex items-center gap-4 sm:gap-5 md:gap-6 shrink-0"
            >

              <span
                onClick={() => handleScroll(link.id)}
                className="
                  cursor-pointer
                  text-white/95

                  text-[11px]
                  sm:text-[13px]
                  md:text-[14px]

                  font-medium
                  tracking-[0.02em]

                  whitespace-nowrap

                  transition-all duration-300
                  hover:text-white hover:underline
                "
              >
                {link.name}
              </span>

              {i !== navLinks.length - 1 && (
                <span className="text-white/40">|</span>
              )}

            </div>
          ))}

        </div>

       </div>

    </div>

    <Breadcrumb
        title="Mystical North India Discovery Tour"
     />

      {/* 🎯 MAIN SECTION */}
      <section className="bg-white pt-8 sm:pt-8 pb-8 sm:pb-10 px-4 sm:px-6">

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

        {/* 🎯 Cards */}
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