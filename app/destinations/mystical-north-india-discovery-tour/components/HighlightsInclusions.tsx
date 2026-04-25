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

              {[
                "Explore Delhi, Agra, and Jaipur's rich heritage",
                "Discover timeless beauty and sensuous artistry",
                "Immerse in Ganges Ghats and ancient temples",
                "Enjoy performances and vibrant markets",
                "Relax with seamless logistics and accommodations",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">

                  <Check
                    size={16}
                    className="text-[#AF956C]"
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

      </div>

    </section>
  );
}