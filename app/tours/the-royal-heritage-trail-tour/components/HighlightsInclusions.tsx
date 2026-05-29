"use client";

import {
  Check,
  Hotel,
  Car,
  Utensils,
  Wifi,
  Plane,
  CreditCard,
  ChefHat,
  Bus,
} from "lucide-react";

export default function HighlightsInclusions() {
  return (
    <section
      className="
        w-full
        bg-white
        py-4 sm:py-2
      "
    >

      {/* 🔥 SAME WIDTH SYSTEM */}
      <div className="max-w-5xl mx-auto">

        <div
          className="
            grid md:grid-cols-2
            gap-6 sm:gap-8 md:gap-10
          "
        >

          {/* 🔹 Highlights */}
          <div
            className="
              bg-white
              rounded-md
              shadow-sm
              border border-[#eee7dd]
              p-5 sm:p-6
            "
          >

            <h2
              className="
                text-[18px] sm:text-[20px] md:text-[20px]
                font-medium
                mb-5
                text-center
                tracking-[0.02em]
                text-[#2c2c2c]
              "
            >
              Highlights
            </h2>

            <ul
              className="
                space-y-3
                text-[#555]
                text-[12px] sm:text-[13px] font-light
              "
            >

              {[
                "Witness the Taj Mahal at sunrise in Agra",
                "Explore Delhi's bustling markets",
                "Experience Jaipur's royal history",
                "Open art gallery of Mandawa",
              ].map((item, index) => (
                <li
                  key={index}
                  className="
                    flex items-start
                    gap-2
                  "
                >

                  <Check
                    size={15}
                    className="
                      text-[#AF956C]
                      shrink-0
                      mt-[2px]
                    "
                  />

                  <span className="leading-relaxed">
                    {item}
                  </span>

                </li>
              ))}

            </ul>

          </div>

          {/* 🔹 Inclusions */}
          <div
            className="
              bg-white
              rounded-md
              shadow-sm
              border border-[#eee7dd]
              p-5 sm:p-6
            "
          >

            <h2
              className="
                text-[18px] sm:text-[20px] md:text-[20px]
                font-medium
                mb-5
                text-center
                tracking-[0.02em]
                text-[#2c2c2c]
              "
            >
              Inclusions
            </h2>

            {/* 🔥 GRID */}
            <div
              className="
                grid grid-cols-2
                sm:grid-cols-4
                gap-y-6
                gap-x-4
                text-center
              "
            >

              {[
                { icon: Hotel, text: "7 nights,\nchosen hotels" },
                { icon: Car, text: "Local driver,\nguide" },
                { icon: Utensils, text: "Daily breakfast" },
                { icon: CreditCard, text: "All costs covered" },
                { icon: Wifi, text: "In Car Wi-fi" },
                { icon: ChefHat, text: "Cooking classes,\ndinner" },
                { icon: Plane, text: "Airport transfer" },
                { icon: Bus, text: "Delhi rickshaw" },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="
                      flex flex-col items-center
                      gap-1.5
                    "
                  >

                    <Icon
                      size={18}
                      className="text-[#AF956C]"
                    />

                    <p
                      className="
                        text-[10px] sm:text-[11px]
                        leading-tight
                        text-[#555]
                        whitespace-pre-line
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