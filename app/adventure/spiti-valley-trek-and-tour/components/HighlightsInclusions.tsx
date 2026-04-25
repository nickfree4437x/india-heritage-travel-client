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
    "Vibrant mix of history and modernity, with lively Old Delhi.",
    "Renowned for urban planning, designed by Le Corbusier.",
    "Beautiful views, lush valleys, and a gateway to Lahaul-Spiti and Leh-Ladakh.",
    "High-altitude crescent-shaped lake known for its crystal-clear waters.",
    "Capital of Spiti, featuring stunning scenery and historic monasteries.",
    "Home to the ancient Tabo Monastery, a protected cultural site.",
    "Surrounded by mountains, famous for fossils and a golden Buddha statue.",
  ];

  const inclusions = [
    { icon: Hotel, text: "14 nights, chosen hotels" },
    { icon: Car, text: "Local driver, guide" },
    { icon: Utensils, text: "Daily breakfast" },
    { icon: CreditCard, text: "All costs covered" },
    { icon: Wifi, text: "In Car Wi-fi" },
    { icon: CookingPot, text: "Cooking classes, dinner" },
    { icon: Plane, text: "Airport transfer" },
    { icon: Bus, text: "Delhi rickshaw" },
  ];

  return (
    <section>
      <div className="max-w-5xl mx-auto">

        <div className="grid md:grid-cols-2 gap-10">

          {/* 🔹 Highlights */}
          <div className="bg-white rounded-md
                          shadow-sm 
                          border border-[#eee7dd] 
                          p-6">

            <h2 className="text-xl md:text-2xl font-semibold mb-5 text-center">
              Highlights
            </h2>

            <ul className="space-y-3 text-gray-700 text-sm">

              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-2">

                  <Check
                    size={16}
                    className="text-[#AF956C] mt-[2px]"
                  />

                  <span>{item}</span>
                </li>
              ))}

            </ul>

          </div>

          {/* 🔹 Inclusions */}
          <div className="bg-white rounded-md
                          shadow-sm 
                          border border-[#eee7dd] 
                          p-6">

            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
              Inclusions
            </h2>

            <div className="grid grid-cols-4 gap-y-6 gap-x-4 text-center">

              {inclusions.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex flex-col items-center gap-1.5">

                    <Icon size={18} className="text-[#AF956C]" />

                    <p className="text-[12px] leading-tight">
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