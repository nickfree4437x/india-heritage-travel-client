"use client";

import {
  Check,
  Hotel,
  Car,
  Utensils,
  CreditCard,
  Wifi,
  CookingPot,
  Plane,
  Bus,
} from "lucide-react";

export default function HighlightsInclusions() {

  const highlights = [
    "Explore Srinagar’s Dal Lake, houseboats, Mughal gardens, and Kashmiri culture.",
    "Experience Gulmarg’s skiing adventures, Gondola rides, and alpine landscapes.",
    "Discover Pahalgam’s scenic valleys, rivers, pine forests, and Himalayan views.",
  ];

  const inclusions = [
    { icon: Hotel, text: "14 nights, chosen hotels" },
    { icon: Car, text: "Local driver, guide" },
    { icon: Utensils, text: "Daily breakfast" },
    { icon: CreditCard, text: "All costs covered" },
    { icon: Wifi, text: "In Car Wi-fi" },
    { icon: CookingPot, text: "Cooking classes, dinner" },
    { icon: Plane, text: "Airport transfer" },
    { icon: Bus, text: "Local travel experiences" },
  ];

  return (

    <section>

      {/* 🔥 SAME CONTENT WIDTH */}
      <div className="max-w-5xl mx-auto">

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">

          {/* 🔹 HIGHLIGHTS */}
          <div
            className="
              bg-white
              rounded-md
              shadow-sm
              border border-[#eee7dd]

              p-5 sm:p-6
            "
          >

            {/* TITLE */}
            <h2
              className="
                text-[18px] md:text-[20px]
                font-medium
                text-center
                tracking-[0.02em]
                text-[#2c2c2c]

                mb-5
              "
            >
              Highlights
            </h2>

            {/* LIST */}
            <ul
              className="
                space-y-1.5

                text-[12px] sm:text-[13px]
                text-gray-700
                font-light
              "
            >

              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2"
                >

                  <Check
                    size={16}
                    className="
                      text-[#AF956C]
                      mt-[2px]
                      shrink-0
                    "
                  />

                  <span className="leading-relaxed">
                    {item}
                  </span>

                </li>
              ))}

            </ul>

          </div>

          {/* 🔹 INCLUSIONS */}
          <div
            className="
              bg-white
              rounded-md
              shadow-sm
              border border-[#eee7dd]

              p-5 sm:p-6
            "
          >

            {/* TITLE */}
            <h2
              className="
                text-[18px] md:text-[20px]
                font-medium
                text-center
                tracking-[0.02em]
                text-[#2c2c2c]

                mb-6
              "
            >
              Inclusions
            </h2>

            {/* ICON GRID */}
            <div
              className="
                grid grid-cols-4

                gap-y-6
                gap-x-4

                text-center
              "
            >

              {inclusions.map((item, index) => {
                const Icon = item.icon;

                return (

                  <div
                    key={index}
                    className="
                      flex flex-col items-center
                      gap-1.5
                    "
                  >

                    {/* ICON */}
                    <Icon
                      size={18}
                      className="text-[#AF956C]"
                    />

                    {/* TEXT */}
                    <p
                      className="
                        text-[11px]
                        leading-tight
                        font-light
                        text-gray-700
                      "
                    >
                      {item.text}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}