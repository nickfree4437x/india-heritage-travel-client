"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ExcludedServices() {
  const [open, setOpen] = useState(true);

  const items = [
    "Flights: International or Domestic",
    "Drinks: Unless specified",
    "Visa: Obtain your Indian visa independently",
    "Meals: Not specified",
    "Tips: Housekeeping, bellboys, at your discretion",
    "Insurance: Comprehensive travel insurance required",
    "Expenses: Laundry, telephone bills",
    "Entrance: Monument fees",
    "Camera: Video camera fees",
    "Health: Medical, baggage insurance",
    "Taxes: Airport departure taxes",
    "Others: Unspecified services",
    "Safaris: Game safaris not included, unless specified",
  ];

  return (
    <section className="mt-16">

      {/* CTA Button */}
      <div className="flex justify-center mb-10">
        <button className="bg-[#9b7a50] hover:bg-[#856744] text-white px-10 py-4 rounded-lg text-lg tracking-wide transition">
          Book This Tour Or Modify This Itinerary
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-[#9b7a50]/50 mb-8"></div>

      {/* Accordion Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-xl font-semibold text-red-600">
          Excluded Services in this Journey:
        </h3>

        <ChevronDown
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Content */}
      {open && (
        <ul className="mt-6 space-y-2 text-gray-700 list-disc pl-6">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

    </section>
  );
}