"use client";

import { Check, Hotel, Car, Wifi, Utensils } from "lucide-react";

export default function HighlightsInclusions() {
  return (
    <section className="grid md:grid-cols-2 gap-8">
      
      {/* Highlights */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4 text-[#3e2f1c]">
          Highlights
        </h3>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-2"><Check /> Red Fort, Qutub Minar</li>
          <li className="flex items-center gap-2"><Check /> Rajasthan Havelis</li>
          <li className="flex items-center gap-2"><Check /> Pushkar spiritual vibes</li>
          <li className="flex items-center gap-2"><Check /> Bundi step wells</li>
          <li className="flex items-center gap-2"><Check /> Tiger Safari 🐅</li>
          <li className="flex items-center gap-2"><Check /> Jaipur forts</li>
          <li className="flex items-center gap-2"><Check /> Taj Mahal</li>
        </ul>
      </div>

      {/* Inclusions */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4 text-[#3e2f1c]">
          Inclusions
        </h3>

        <div className="grid grid-cols-2 gap-6 text-center text-gray-700">
          <div><Hotel className="mx-auto" /><p>Hotels</p></div>
          <div><Car className="mx-auto" /><p>Driver</p></div>
          <div><Wifi className="mx-auto" /><p>WiFi</p></div>
          <div><Utensils className="mx-auto" /><p>Meals</p></div>
        </div>
      </div>
    </section>
  );
}