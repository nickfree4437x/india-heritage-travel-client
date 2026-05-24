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

export default function OdysseyHighlights() {
  const highlights = [
    "Explore Delhi, Agra, and Jaipur's rich heritage",
    "Discover timeless beauty and sensuous artistry",
    "Immerse in Ganges Ghats and ancient temples",
    "Enjoy performances and vibrant markets",
    "Relax with seamless logistics and accommodations",
  ];

  const inclusions = [
    { icon: Hotel, text: "9 nights,\nchosen hotels" },
    { icon: Car, text: "Local driver,\nguide" },
    { icon: Utensils, text: "Daily breakfast" },
    { icon: CreditCard, text: "All costs covered" },
    { icon: Wifi, text: "In Car Wi-fi" },
    { icon: ChefHat, text: "Cooking dinner" },
    { icon: Plane, text: "Airport transfer" },
    { icon: Bus, text: "Rickshaw ride" },
  ];

  return (
    <section className="md:py-0 py-8">
      
      {/* 🔥 SAME WIDTH AS DELHI SECTION */}
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

            <ul className="space-y-3 text-gray-700 text-xs font-light">
              {highlights.map((item, index) => (
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
              {inclusions.map((item, index) => {
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
                        text-[11px] font-light
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