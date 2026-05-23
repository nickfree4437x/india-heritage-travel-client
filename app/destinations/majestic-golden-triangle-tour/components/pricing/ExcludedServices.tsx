"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function ExcludedServices() {
  // ==========================================================================
  // STATE DECLARATIONS
  // ==========================================================================

  const [open, setOpen] = useState(false); // Default closed

  // ==========================================================================
  // DATA - Excluded Services List
  // ==========================================================================

  const excludedServicesList = [
    "Flights: International or Domestic",
    "Drinks: Unless specified",
    "Visa: Obtain your Indian visa independently",
    "Meals: Not specified",
    "Tips: Housekeeping, bellboys",
    "Insurance: Travel insurance required",
    "Expenses: Laundry, telephone bills",
    "Entrance: Monument fees",
    "Camera: Video camera fees",
    "Health: Medical, baggage insurance",
    "Taxes: Airport departure taxes",
    "Others: Unspecified services",
    "Safaris: Not included unless specified",
  ];

  // ==========================================================================
  // EVENT HANDLERS
  // ==========================================================================

  const toggleAccordion = () => setOpen(!open);

  // ==========================================================================
  // MAIN RENDER
  // ==========================================================================

  return (
    <section>
      <div className="max-w-5xl mx-auto">
        {/* ====================================================================
            DIVIDER LINE
        ==================================================================== */}
        <div className="w-full h-[1.5px] bg-[#A38664] mb-6" />

        {/* ====================================================================
            ACCORDION HEADER
        ==================================================================== */}
        <div
          className="flex justify-between items-center cursor-pointer group"
          onClick={toggleAccordion}
        >
          <h2 className="text-[16px] md:text-[18px] font-medium text-[#AF956C] tracking-[0.01em]">
            Excluded Services in this Journey
          </h2>

          {/* Chevron Icon with rotation animation */}
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

        {/* ====================================================================
            ACCORDION CONTENT (Smooth Expand/Collapse)
        ==================================================================== */}
        <div
          className={`grid transition-all duration-500 ease-in-out ${
            open ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 text-[11px] md:text-[12px] font-[300] text-gray-700 pl-4 list-disc">
              {excludedServicesList.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}