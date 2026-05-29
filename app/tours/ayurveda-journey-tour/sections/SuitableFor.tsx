"use client";

import {
  Briefcase,
  Leaf,
  Users,
  PersonStanding,
} from "lucide-react";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";

export default function SuitableFor() {

  const items = [
    {
      icon: Briefcase,
      title: "Corporate Travel",
    },
    {
      icon: Leaf,
      title:
        "Spiritual, Cultural, Artistic & Gastronomic Interests",
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

  const locations = [
    { name: "Mumbai", id: "mumbai" },
    { name: "Cochin", id: "cochin" },
    { name: "Kumarakom", id: "kumarakom" },
    { name: "Alleppey", id: "alleppey" },
    { name: "Thekkady", id: "thekkady" },
    { name: "Munnar", id: "munnar" },
    { name: "Mumbai", id: "mumbai2" },
  ];

  return (
    <>

      {/* 🔥 STICKY NAV */}
      <div className="sticky top-0 z-30 bg-[#9A7A58] shadow-sm">

        {/* 🔥 MOBILE SCROLL CONTAINER */}
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

            {locations.map((loc, index) => (

              <div
                key={loc.id}
                className="
                  flex items-center
                  gap-3 sm:gap-5 md:gap-6
                  shrink-0
                "
              >

                <a
                  href={`#${loc.id}`}
                  className="
                    whitespace-nowrap

                    text-[11px]
                    sm:text-[13px]
                    md:text-[14px]

                    font-medium
                    tracking-[0.02em]

                    text-white/95
                    hover:text-white hover:underline

                    transition-all duration-300
                  "
                >
                  {loc.name}
                </a>

                {index !== locations.length - 1 && (
                  <span className="text-white/40 shrink-0">
                    |
                  </span>
                )}

              </div>

            ))}
          </div>
        </div>
      </div>

      <Breadcrumb
        title="Ayurveda Journey Tour"
      />

      {/* 🎯 MAIN SECTION */}
      <section
        className="
          bg-white

          pt-8 sm:pt-8
          pb-8 sm:pb-10

          px-4 sm:px-6
        "
      >

        <div className="max-w-7xl mx-auto">

          {/* 🏷 HEADING */}
          <h2
            className="
              text-[20px]
              sm:text-[24px]
              md:text-[26px]

              font-semibold
              tracking-wide

              text-center
              text-[#2c2c2c]

              mb-6 sm:mb-8
            "
          >
            Suitable For
          </h2>

          {/* 🎯 CARDS */}
          <div
            className="
              grid grid-cols-2
              md:grid-cols-4

              gap-x-4
              sm:gap-x-8
              md:gap-x-12

              gap-y-8
              sm:gap-y-10

              text-center
            "
          >

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

                  {/* 🔥 ICON */}
                  <Icon
                    size={34}
                    className="
                      text-[#9A7A58]

                      transition-all duration-500

                      sm:w-[38px]
                      sm:h-[38px]

                      md:w-[42px]
                      md:h-[42px]
                    "
                  />

                  {/* 🔥 TEXT */}
                  <p
                    className="
                      font-light
                      text-[#3a3a3a]

                      text-[12px]
                      sm:text-[13px]
                      md:text-[13px]

                      leading-relaxed

                      max-w-[220px]
                    "
                  >
                    {item.title}
                  </p>

                </div>

              );
            })}

          </div>

        </div>

      </section>

    </>
  );
}