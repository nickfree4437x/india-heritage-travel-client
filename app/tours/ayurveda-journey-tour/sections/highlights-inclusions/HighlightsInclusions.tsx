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
    "Authentic Ayurveda wellness therapies in Kerala",
    "Personalized Panchakarma and healing programs",
    "Daily yoga and meditation sessions",
    "Rejuvenating wellness retreat in Kumarakom",
    "Scenic Kerala backwaters and cultural experiences",
    "Traditional Ayurvedic treatments guided by experts",
  ];

  // Inclusions data with icons
  const inclusions = [
    { icon: Hotel, text: "14 nights, chosen hotels" },
    { icon: Car, text: "Local driver, guide" },
    { icon: Utensils, text: "Daily breakfast" },
    { icon: CreditCard, text: "All costs covered" },
    { icon: Wifi, text: "In Car Wi-fi" },
    { icon: CookingPot, text: "Cooking classes, dinner" },
    { icon: Plane, text: "Airport transfer" },
  ];

  return (
    <section className="md:-mt-8 mt-0">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Highlights */}
          <div className="
            bg-white rounded-md
            shadow-sm
            border border-[#eee7dd]
            p-6
          ">
            <h2 className="
              text-[18px] md:text-[20px]
              font-medium
              mb-5
              text-center
              tracking-[0.02em]
            ">
              Highlights
            </h2>

            <ul className="space-y-3 text-gray-700 font-light text-xs">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check size={16} className="text-[#AF956C] mt-[2px]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Inclusions */}
          <div className="
            bg-white rounded-md
            shadow-sm
            border border-[#eee7dd]
            p-6
          ">
            <h2 className="
              text-[18px] md:text-[20px]
              font-medium
              mb-5
              text-center
              tracking-[0.02em]
            ">
              Inclusions
            </h2>

            {/* 4 Column Grid */}
            <div className="grid grid-cols-4 gap-y-6 gap-x-4 text-center">
              {inclusions.map((item, index) => {
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