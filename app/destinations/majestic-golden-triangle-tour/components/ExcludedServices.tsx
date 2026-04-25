"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function ExcludedServices() {
  const [open, setOpen] = useState(false); // 🔥 default closed

  return (
    <section className="py-6">

      <div className="max-w-5xl mx-auto">

        {/* 🔹 Divider */}
        <div className="w-full h-[1.5px] bg-[#A38664] mb-6" />

        {/* 🔹 Header */}
        <div
          className="flex justify-between items-center cursor-pointer group"
          onClick={() => setOpen(!open)}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-red-500">
            Excluded Services in this Journey
          </h2>

          {/* 🔥 Rotate Animation */}
          <div
            className={`transition-transform duration-500 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            <ChevronDown
              size={20}
              className="text-[#A38664] group-hover:scale-110 transition"
            />
          </div>
        </div>

        {/* 🔹 Content (Smooth Accordion) */}
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            open ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">

            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 text-[13.5px] text-gray-700 pl-4 list-disc">

              <li>Flights: International or Domestic</li>
              <li>Drinks: Unless specified</li>
              <li>Visa: Obtain your Indian visa independently</li>
              <li>Meals: Not specified</li>
              <li>Tips: Housekeeping, bellboys</li>
              <li>Insurance: Travel insurance required</li>
              <li>Expenses: Laundry, telephone bills</li>
              <li>Entrance: Monument fees</li>
              <li>Camera: Video camera fees</li>
              <li>Health: Medical, baggage insurance</li>
              <li>Taxes: Airport departure taxes</li>
              <li>Others: Unspecified services</li>
              <li>Safaris: Not included unless specified</li>

            </ul>

          </div>
        </div>

      </div>

    </section>
  );
}