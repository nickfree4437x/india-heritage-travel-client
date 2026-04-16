"use client";

import { Check, Hotel, Car, Utensils, Wifi, Plane, CreditCard } from "lucide-react";

export default function HighlightsInclusions() {
  return (
    <section className="grid md:grid-cols-2 gap-8 mt-16">

      {/* LEFT - Highlights */}
      <div className="bg-white shadow-md rounded-xl p-6 border">

        <h2 className="text-2xl font-semibold text-center mb-6">
          Highlights
        </h2>

        <ul className="space-y-4 text-gray-700">

          <li className="flex items-start gap-3">
            <Check className="text-[#9b7a50] mt-1" />
            Witness the Taj Mahal at sunrise in Agra
          </li>

          <li className="flex items-start gap-3">
            <Check className="text-[#9b7a50] mt-1" />
            Explore Delhi's bustling markets
          </li>

          <li className="flex items-start gap-3">
            <Check className="text-[#9b7a50] mt-1" />
            Experience Jaipur's royal history
          </li>

          <li className="flex items-start gap-3">
            <Check className="text-[#9b7a50] mt-1" />
            Open art gallery of Mandawa
          </li>

        </ul>
      </div>

      {/* RIGHT - Inclusions */}
      <div className="bg-white shadow-md rounded-xl p-6 border">

        <h2 className="text-2xl font-semibold text-center mb-6">
          Inclusions
        </h2>

        <div className="grid grid-cols-2 gap-6 text-center text-sm text-gray-700">

          <div className="flex flex-col items-center gap-2">
            <Hotel className="text-[#9b7a50]" size={28} />
            <p>7 nights, chosen hotels</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Car className="text-[#9b7a50]" size={28} />
            <p>Local driver, guide</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Utensils className="text-[#9b7a50]" size={28} />
            <p>Daily breakfast</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <CreditCard className="text-[#9b7a50]" size={28} />
            <p>All costs covered</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Wifi className="text-[#9b7a50]" size={28} />
            <p>In Car Wi-fi</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Utensils className="text-[#9b7a50]" size={28} />
            <p>Cooking classes, dinner</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Plane className="text-[#9b7a50]" size={28} />
            <p>Airport transfer</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <Car className="text-[#9b7a50]" size={28} />
            <p>Delhi rickshaw</p>
          </div>

        </div>
      </div>

    </section>
  );
}