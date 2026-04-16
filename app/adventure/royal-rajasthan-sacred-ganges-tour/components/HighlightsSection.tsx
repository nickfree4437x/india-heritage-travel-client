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
    <div className="grid md:grid-cols-2 gap-8">

      {/* Highlights */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Highlights
        </h3>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-2">
            <Check className="text-[#9b7a50]" /> Witness the Taj Mahal at sunrise in Agra
          </li>
          <li className="flex items-center gap-2">
            <Check className="text-[#9b7a50]" /> Explore Delhi's bustling markets
          </li>
          <li className="flex items-center gap-2">
            <Check className="text-[#9b7a50]" /> Jaipur's royal history
          </li>
          <li className="flex items-center gap-2">
            <Check className="text-[#9b7a50]" /> Discover Udaipur's serene lakes and palaces
          </li>
          <li className="flex items-center gap-2">
            <Check className="text-[#9b7a50]" /> Marvel at Jodhpur's Mehrangarh Fort
          </li>
        </ul>
      </div>

      {/* Inclusions */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-6 text-center">
          Inclusions
        </h3>

        <div className="grid grid-cols-2 gap-6 text-center text-sm">

          <div>
            <Hotel className="mx-auto text-[#9b7a50]" />
            <p>20 nights, chosen hotels</p>
          </div>

          <div>
            <Car className="mx-auto text-[#9b7a50]" />
            <p>Local driver, guide</p>
          </div>

          <div>
            <Utensils className="mx-auto text-[#9b7a50]" />
            <p>Daily breakfast</p>
          </div>

          <div>
            <Key className="mx-auto text-[#9b7a50]" />
            <p>All costs covered</p>
          </div>

          <div>
            <Wifi className="mx-auto text-[#9b7a50]" />
            <p>In Car Wi-fi</p>
          </div>

          <div>
            <Utensils className="mx-auto text-[#9b7a50]" />
            <p>Cooking classes, dinner</p>
          </div>

          <div>
            <Plane className="mx-auto text-[#9b7a50]" />
            <p>Airport transfer</p>
          </div>

          <div>
            <Bus className="mx-auto text-[#9b7a50]" />
            <p>Delhi rickshaw</p>
          </div>

        </div>
      </div>

    </div>
  );
}