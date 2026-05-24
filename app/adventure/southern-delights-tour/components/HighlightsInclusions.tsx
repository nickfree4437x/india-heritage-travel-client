"use client";

import {
  Check,
  Hotel,
  Car,
  Utensils,
  CreditCard,
  Wifi,
  ChefHat,
  Plane,
  Bus,
} from "lucide-react";

export default function HighlightsInclusions() {
  return (
    <section>

      {/* 🔥 SAME WIDTH AS OTHER INFO SECTIONS */}
      <div className="max-w-5xl mx-auto">

        <div className="grid md:grid-cols-2 gap-10">

          {/* 🔹 Highlights */}
          <div
            className="
              bg-white rounded-md
              shadow-sm
              border border-[#eee7dd]
              p-6
            "
          >

            <h2
              className="
                text-[18px] md:text-[20px]
                font-medium
                mb-5
                text-center
                tracking-[0.02em]
              "
            >
              Highlights
            </h2>

            <ul className="space-y-1.5 text-gray-700 text-xs font-light">

              {[
                "Cochin’s Culture Unveiled",
                "Alleppey’s Backwater Bliss",
                "Thekkady’s Wild Wonders",
                "Munnar’s Tea Paradise",
                "Madurai’s Temple Treasures",
                "Thanjavur’s Cultural Gem",
                "Pondicherry’s Serene Fusion",
                "Mahabalipuram’s Ancient Marvels",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2"
                >

                  <Check
                    className="text-[#AF956C]"
                    size={16}
                  />

                  <span>{item}</span>

                </li>
              ))}

            </ul>

          </div>

          {/* 🔹 Inclusions */}
          <div
            className="
              bg-white rounded-md
              shadow-sm
              border border-[#eee7dd]
              p-6
            "
          >

            <h2
              className="
                text-[18px] md:text-[20px]
                font-medium
                mb-5
                text-center
                tracking-[0.02em]
              "
            >
              Inclusions
            </h2>

            {/* 🔥 4 COLUMN GRID */}
            <div className="grid grid-cols-4 gap-y-6 gap-x-4 text-center">

              {[
                { icon: Hotel, text: "11 nights,\nchosen hotels" },
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
                    className="flex flex-col items-center gap-1.5"
                  >

                    <Icon
                      size={18}
                      className="text-[#AF956C]"
                    />

                    <p
                      className="
                        text-[11px]
                        font-light
                        leading-tight
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