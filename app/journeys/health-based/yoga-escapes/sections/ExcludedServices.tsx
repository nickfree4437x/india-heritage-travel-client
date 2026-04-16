"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ExcludedServices() {
  const [open, setOpen] = useState(true);

  return (
    <section className="mt-16">

      {/* CTA Button */}
      <div className="flex justify-center mb-10">
        <button className="bg-[#9b7a50] text-white px-8 py-3 rounded-lg">
          Book This Tour Or Modify This Itinerary
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-[#9b7a50] mb-6"></div>

      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer mb-4"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-xl font-semibold text-red-500">
          Excluded Services in this Journey:
        </h3>

        <ChevronDown
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </div>

      {/* Content */}
      {open && (
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
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