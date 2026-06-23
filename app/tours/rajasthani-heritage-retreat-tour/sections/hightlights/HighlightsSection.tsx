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

export default function HighlightsSection() {
  // Highlights data
  const highlights = [
    "Explore the vibrant heritage of Delhi and Old Delhi.",
    "Discover fresco-painted havelis in Mandawa.",
    "Experience Bikaner's desert culture and camel heritage.",
    "Visit the Golden City of Jaisalmer and its magnificent fort.",
    "Explore Jodhpur's royal palaces and blue city charm.",
    "Enjoy the lakes and palaces of romantic Udaipur.",
    "Experience the spiritual atmosphere of Pushkar.",
  ];

  // Inclusions data with icons
  const inclusions = [
    { icon: Hotel, text: "15 nights, chosen hotels" },
    { icon: Car, text: "Local driver, guide" },
    { icon: Utensils, text: "Daily breakfast" },
    { icon: CreditCard, text: "All costs covered" },
    { icon: Wifi, text: "In Car Wi-fi" },
    { icon: ChefHat, text: "Cooking classes, dinner" },
    { icon: Plane, text: "Airport transfer" },
    { icon: Bus, text: "Delhi rickshaw" },
  ];

  return (
    <section>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Highlights */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6">
            <h2 className="text-[18px] md:text-[20px] font-medium mb-5 text-center tracking-[0.02em]">
              Highlights
            </h2>

            <ul className="space-y-3 text-gray-700 font-light text-xs">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="text-[#AF956C]" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Inclusions */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6">
            <h2 className="text-[18px] md:text-[20px] font-medium mb-5 text-center tracking-[0.02em]">
              Inclusions
            </h2>

            <div className="grid grid-cols-4 gap-y-6 gap-x-4 text-center">
              {inclusions.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex flex-col items-center gap-1.5">
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