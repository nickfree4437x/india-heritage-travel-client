"use client";

import {
  Check,
  Hotel,
  Car,
  Utensils,
  Wifi,
  Key,
  Plane,
  Bus,
} from "lucide-react";

export default function HighlightsSection() {
  return (
    <section>

      <div className="max-w-5xl mx-auto">

        <div className="grid md:grid-cols-2 gap-10">

          {/* 🔹 Highlights */}
          <div
            className="bg-white rounded-md 
                       border border-[#eee7dd] 
                       shadow-sm p-6
                       transition"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-5 text-center text-[#2c2c2c]">
              Highlights
            </h2>

            <ul className="space-y-3 text-gray-700 text-sm">

              {[
                "Witness the Taj Mahal at sunrise in Agra",
                "Explore Delhi's bustling markets",
                "Jaipur's royal history",
                "Discover Udaipur's serene lakes and palaces",
                "Marvel at Jodhpur's Mehrangarh Fort",
              ].map((item, index) => (
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
          <div
            className="bg-white rounded-md 
                       border border-[#eee7dd] 
                       shadow-sm p-6
                       transition"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center text-[#2c2c2c]">
              Inclusions
            </h2>

            <div className="grid grid-cols-4 gap-y-6 gap-x-4 text-center">

              {[
                { icon: Hotel, text: "20 nights,\nchosen hotels" },
                { icon: Car, text: "Local driver,\nguide" },
                { icon: Utensils, text: "Daily breakfast" },
                { icon: Key, text: "All costs covered" },
                { icon: Wifi, text: "In Car Wi-fi" },
                { icon: Utensils, text: "Cooking classes,\ndinner" },
                { icon: Plane, text: "Airport transfer" },
                { icon: Bus, text: "Delhi rickshaw" },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-1.5 group"
                  >
                    <Icon
                      size={18}
                      className="text-[#AF956C] transition group-hover:scale-110"
                    />

                    <p className="text-[12px] leading-tight whitespace-pre-line">
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