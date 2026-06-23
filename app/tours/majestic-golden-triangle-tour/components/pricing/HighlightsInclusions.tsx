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

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function HighlightsInclusions() {
  // ==========================================================================
  // DATA - Highlights List
  // ==========================================================================

  const highlightsList = [
    "Explore Delhi's iconic landmarks including Red Fort and Qutub Minar",
    "Witness the timeless beauty of the Taj Mahal in Agra",
    "Discover Jaipur's magnificent forts, palaces, and royal heritage",
    "Experience India's famous Golden Triangle cultural circuit",
    "Enjoy comfortable travel with guided sightseeing experiences",
  ];

  // ==========================================================================
  // DATA - Inclusions List with Icons
  // ==========================================================================

  const inclusionsList = [
    { icon: Hotel, text: "6 nights, chosen hotels" },
    { icon: Car, text: "Local driver, guide" },
    { icon: Utensils, text: "Daily breakfast" },
    { icon: CreditCard, text: "All costs covered" },
    { icon: Wifi, text: "In Car Wi-fi" },
    { icon: ChefHat, text: "Cooking classes, dinner" },
    { icon: Plane, text: "Airport transfer" },
    { icon: Bus, text: "Delhi rickshaw" },
  ];

  // ==========================================================================
  // MAIN RENDER
  // ==========================================================================

  return (
    <section className="py-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* ==================================================================
              HIGHLIGHTS SECTION
          ================================================================== */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6">
            <h2 className="text-[18px] md:text-[20px] font-medium mb-5 text-center tracking-[0.02em]">
              Highlights
            </h2>

            <ul className="space-y-3 text-gray-700 text-xs font-light">
              {highlightsList.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="text-[#AF956C]" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ==================================================================
              INCLUSIONS SECTION
          ================================================================== */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6">
            <h2 className="text-[18px] md:text-[20px] font-medium mb-5 text-center tracking-[0.02em]">
              Inclusions
            </h2>

            {/* 4 Column Grid for Inclusions Icons */}
            <div className="grid grid-cols-4 gap-y-6 gap-x-4 text-center">
              {inclusionsList.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-1.5">
                    <Icon size={18} className="text-[#AF956C]" />
                    <p className="text-[11px] font-light leading-tight">
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