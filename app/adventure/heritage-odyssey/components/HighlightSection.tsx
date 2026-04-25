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
    <section className="bg-[#f4f0ea] mt-10">

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* 🔹 Highlights */}
        <div className="bg-white rounded-md border border-[#eee7dd] p-6">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-[#2c2c2c]">
            Highlights
          </h2>

          <ul className="space-y-3 text-[#3a3a3a] text-sm">

            {[
              "Royal heritage in the Pink City",
              "Love story at the Taj Mahal",
              "Ancient artistry in Ajanta-Ellora’s stone",
              "India's vibrant coastal gem in Mumbai",
              "Elephants grace Thekkady's lush landscapes",
              "Nature's alpine paradise in Munnar",
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

        {/* 🔹 Inclusions */}
        <div className="bg-white rounded-md border border-[#eee7dd] p-6">

          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-[#2c2c2c]">
            Inclusions
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-x-4 text-center">

            {[
              { icon: Hotel, text: "18 nights,\nchosen hotels" },
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

                  <Icon size={20} className="text-[#AF956C]" />

                  <p className="text-[12px] leading-tight whitespace-pre-line">
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