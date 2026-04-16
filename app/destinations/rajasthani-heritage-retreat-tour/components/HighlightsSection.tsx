"use client";

import { Check } from "lucide-react";

export default function HighlightsSection() {
  return (
    <section className="grid md:grid-cols-2 gap-8">

      {/* LEFT - Highlights */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Highlights
        </h2>

        <ul className="space-y-3 text-gray-700">
          {[
            "Witness the Taj Mahal at sunrise in Agra",
            "Explore Delhi's bustling markets",
            "Experience Jaipur's royal history",
            "Open art gallery of Mandawa",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="text-[#9b7a50]" size={18} />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT - Inclusions */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Inclusions
        </h2>

        <div className="grid grid-cols-2 gap-4 text-center text-sm text-gray-700">

          <div>🏨 15 nights, chosen hotels</div>
          <div>🚗 Local driver, guide</div>
          <div>🍽 Daily breakfast</div>
          <div>💳 All costs covered</div>
          <div>📶 In Car Wi-fi</div>
          <div>🍳 Cooking classes, dinner</div>
          <div>✈ Airport transfer</div>
          <div>🛺 Delhi rickshaw</div>

        </div>
      </div>

    </section>
  );
}