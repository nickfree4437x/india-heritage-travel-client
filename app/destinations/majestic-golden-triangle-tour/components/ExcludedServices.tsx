"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function ExcludedServices() {
  const [open, setOpen] = useState(true);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      {/* 🔹 Top Divider */}
      <div className="w-full h-[2px] bg-[#c9a66b] mb-8" />

      {/* 🔹 Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-red-600">
          Excluded Services in this Journey:
        </h2>

        {open ? (
          <ChevronUp className="text-red-600" />
        ) : (
          <ChevronDown className="text-red-600" />
        )}
      </div>

      {/* 🔹 Content */}
      {open && (
        <ul className="mt-6 space-y-3 text-gray-700 list-disc pl-6">

          <li>Flights: International or Domestic</li>
          <li>Drinks: Unless specified.</li>
          <li>Visa: Obtain your Indian visa independently.</li>
          <li>Meals: Not specified.</li>
          <li>Tips: Housekeeping, bellboys, at your discretion.</li>
          <li>Insurance: Comprehensive travel insurance required.</li>
          <li>Expenses: Laundry, telephone bills.</li>
          <li>Entrance: Monument fees.</li>
          <li>Camera: Video camera fees.</li>
          <li>Health: Medical, baggage insurance.</li>
          <li>Taxes: Airport departure taxes.</li>
          <li>Others: Unspecified services.</li>
          <li>Safaris: Game safaris not included, unless specified.</li>

        </ul>
      )}

    </section>
  );
}