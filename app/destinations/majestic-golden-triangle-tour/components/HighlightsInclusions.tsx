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
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="grid md:grid-cols-2 gap-10">

        {/* 🔹 Highlights */}
        <div className="bg-white rounded-xl shadow-md p-8">

          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Highlights
          </h2>

          <ul className="space-y-4 text-gray-700">

            <li className="flex items-center gap-3">
              <Check className="text-[#8b6b3e]" />
              Delhi's History and Vibrancy
            </li>

            <li className="flex items-center gap-3">
              <Check className="text-[#8b6b3e]" />
              Jaipur's Regal Charms
            </li>

            <li className="flex items-center gap-3">
              <Check className="text-[#8b6b3e]" />
              Taj Mahal's Timeless Beauty
            </li>

            <li className="flex items-center gap-3">
              <Check className="text-[#8b6b3e]" />
              Seamless Travel
            </li>

            <li className="flex items-center gap-3">
              <Check className="text-[#8b6b3e]" />
              Personalized Adventures
            </li>

          </ul>

        </div>

        {/* 🔹 Inclusions */}
        <div className="bg-white rounded-xl shadow-md p-8">

          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Inclusions
          </h2>

          <div className="grid grid-cols-2 gap-6 text-center text-sm">

            <div className="flex flex-col items-center gap-2">
              <Hotel className="text-[#8b6b3e]" />
              <p>6 nights, chosen hotels</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Car className="text-[#8b6b3e]" />
              <p>Local driver, guide</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Utensils className="text-[#8b6b3e]" />
              <p>Daily breakfast</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <CreditCard className="text-[#8b6b3e]" />
              <p>All costs covered</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Wifi className="text-[#8b6b3e]" />
              <p>In Car Wi-fi</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <ChefHat className="text-[#8b6b3e]" />
              <p>Cooking classes, dinner</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Plane className="text-[#8b6b3e]" />
              <p>Airport transfer</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Bus className="text-[#8b6b3e]" />
              <p>Delhi rickshaw</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}