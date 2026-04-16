"use client";

import {
  Check,
  Building2,
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
    <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* LEFT: Highlights */}
      <div className="bg-[#f5f5f5] rounded-xl shadow-md p-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Highlights
        </h2>

        <ul className="space-y-3 text-gray-800">
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
            <li key={index} className="flex items-center gap-3">
              <Check className="text-[#9b7a50] w-5 h-5" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT: Inclusions */}
      <div className="bg-[#f5f5f5] rounded-xl shadow-md p-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
          Inclusions
        </h2>

        <div className="grid grid-cols-2 gap-6 text-center">
          
          <div className="flex flex-col items-center gap-2">
            <Building2 className="w-7 h-7 text-[#9b7a50]" />
            <p className="text-sm font-medium">16 nights, chosen hotels</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Car className="w-7 h-7 text-[#9b7a50]" />
            <p className="text-sm font-medium">Local driver, guide</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Utensils className="w-7 h-7 text-[#9b7a50]" />
            <p className="text-sm font-medium">Daily breakfast</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <CreditCard className="w-7 h-7 text-[#9b7a50]" />
            <p className="text-sm font-medium">All costs covered</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Wifi className="w-7 h-7 text-[#9b7a50]" />
            <p className="text-sm font-medium">In Car Wi-fi</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ChefHat className="w-7 h-7 text-[#9b7a50]" />
            <p className="text-sm font-medium">Cooking classes, dinner</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Plane className="w-7 h-7 text-[#9b7a50]" />
            <p className="text-sm font-medium">Airport transfer</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Bus className="w-7 h-7 text-[#9b7a50]" />
            <p className="text-sm font-medium">Delhi rickshaw</p>
          </div>

        </div>
      </div>

    </section>
  );
}