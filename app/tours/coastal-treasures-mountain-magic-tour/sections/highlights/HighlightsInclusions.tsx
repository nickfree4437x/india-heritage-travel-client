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
  // Highlights data
  const highlights = [
    "Experience South India's scenic backwaters and coastal landscapes",
    "Explore Munnar's tea plantations and beautiful hill station landscapes",
    "Discover wildlife and nature around Thekkady and Periyar",
    "Experience Kerala's cultural heritage, local traditions, and historic landmarks",
    "Explore South India through Kerala's coastal, natural, and cultural highlights",
  ];

  // Inclusions data with icons
  const inclusions = [
    { icon: Hotel, text: "9 nights, chosen hotels" },
    { icon: Car, text: "Local driver, guide" },
    { icon: Utensils, text: "Daily breakfast" },
    { icon: CreditCard, text: "All costs covered" },
    { icon: Wifi, text: "In Car Wi-fi" },
    { icon: CookingPot, text: "Cooking classes, dinner" },
    { icon: Plane, text: "Airport transfer" },
    { icon: Bus, text: "Guided local experiences" },
  ];

  return (
    <section>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {/* Highlights */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-4 sm:p-5 md:p-6">
            <h2 className="text-[18px] md:text-[20px] font-medium mb-5 text-center tracking-[0.02em]">
              Highlights
            </h2>

            <ul className="space-y-3 text-gray-700 text-[11px] sm:text-xs font-light leading-relaxed">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check
                    className="text-[#AF956C] mt-[2px] shrink-0"
                    size={16}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Inclusions */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-4 sm:p-5 md:p-6">
            <h2 className="text-[18px] md:text-[20px] font-medium mb-5 text-center tracking-[0.02em]">
              Inclusions
            </h2>

            <div className="grid grid-cols-4 gap-y-5 sm:gap-y-6 gap-x-3 sm:gap-x-4 text-center">
              {inclusions.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-1.5">
                    <Icon size={18} className="text-[#AF956C]" />
                    <p className="text-[10px] sm:text-[11px] font-light leading-tight">
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