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
    <section className="bg-[#f4f0ea]">

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* 🔹 LEFT: Highlights */}
        <div className="bg-white rounded-md border border-[#eee7dd] p-6 transition-all duration-300">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-[#2c2c2c] tracking-wide">
            Highlights
          </h2>

          <ul className="space-y-2 text-[#3a3a3a] text-sm">

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
              <li key={index} className="flex items-start gap-3">

                <Check
                  size={18}
                  className="text-[#9A7A58] mt-0.5"
                />

                <span>{item}</span>
              </li>
            ))}

          </ul>
        </div>

        {/* 🔹 RIGHT: Inclusions */}
        <div className="bg-white rounded-md
                          shadow-sm 
                          border border-[#eee7dd] 
                          p-6">

            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
              Inclusions
            </h2>

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

    </section>
  );
}