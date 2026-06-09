"use client";

import { useState } from "react";

export default function ExcludedServices() {
  const [open, setOpen] = useState(true);

  const exclusions = [
    "Flights: International or Domestic",
    "Drinks: Unless specified.",
    "Visa: Obtain your Indian visa independently.",
    "Meals: Not specified.",
    "Tips: Housekeeping, bellboys, at your discretion.",
    "Insurance: Comprehensive travel insurance required.",
    "Expenses: Laundry, telephone bills",
    "Entrance: Monument fees.",
    "Camera: Video camera fees.",
    "Health: Medical, baggage insurance.",
    "Taxes: Airport departure taxes.",
    "Others: Unspecified services.",
    "Safaris: Game safaris not included, unless specified.",
  ];

  return (
    <div className="mt-4 max-w-6xl mx-auto">

      {/* HEADER */}
      <div
        onClick={() => setOpen(!open)}
        className="
          bg-[#e9e2d8]
          px-6 py-5
          cursor-pointer
          flex justify-between items-center
          transition-all duration-300
          rounded-t-md
        "
      >
        <h4
          className="
            text-[13px]
            sm:text-[14px]
            font-light
            tracking-[0.08em]
            text-[#2c2c2c]
          "
        >
          Excluded Services in this Journey
        </h4>

        <span
          className={`text-xs transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </div>

      {/* CONTENT */}
      <div
        className={`
          overflow-hidden
          transition-all duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${open ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-white px-6 py-6 border border-[#eee7dd] border-t-0 rounded-b-md">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">

            {exclusions.map((item, i) => (
              <div
                key={i}
                className="
                  flex items-start gap-3
                  text-[#3a3a3a]
                "
              >

                {/* BULLET */}
                <span
                  className="
                    mt-[8px]
                    w-[5px]
                    h-[5px]
                    bg-[#9A7A58]
                    rounded-full
                    shrink-0
                  "
                />

                {/* TEXT */}
                <p
                  className="
                    text-[11px]
                    sm:text-[12px]
                    font-light
                    leading-7
                    tracking-[0.03em]
                    text-gray-600
                  "
                >
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>

    </div>
  );
}