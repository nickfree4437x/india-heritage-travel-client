"use client";

// ============================================================
// 1. IMPORTS
// ============================================================
import { useState } from "react";

// ============================================================
// 2. DATA
// ============================================================
const EXCLUSIONS = [
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
] as const;

// ============================================================
// 3. TYPES
// ============================================================
type ExclusionItem = typeof EXCLUSIONS[number];

// ============================================================
// 4. COMPONENT
// ============================================================
export default function ExcludedServices() {
  // State
  const [isOpen, setIsOpen] = useState(true);

  // Handlers
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="mt-4 max-w-6xl mx-auto">
      {/* ===== HEADER ===== */}
      <div
        onClick={toggleOpen}
        className="
          bg-[#e9e2d8]
          px-6 py-5
          cursor-pointer
          flex justify-between items-center
          transition-all duration-300
          rounded-t-md
        "
      >
        <h4 className="
          text-[13px] sm:text-[14px]
          font-light
          tracking-[0.08em]
          text-[#2c2c2c]
        ">
          Excluded Services in this Journey
        </h4>

        <span className={`text-xs transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}>
          ▼
        </span>
      </div>

      {/* ===== CONTENT ===== */}
      <div
        className={`
          overflow-hidden
          transition-all duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="
          bg-white 
          px-6 py-6 
          border border-[#eee7dd] border-t-0 
          rounded-b-md
        ">
          {/* Exclusions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            {EXCLUSIONS.map((item, index) => (
              <ExclusionItem key={index} text={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// 5. SUB-COMPONENT
// ============================================================
function ExclusionItem({ text }: { text: ExclusionItem }) {
  return (
    <div className="flex items-start gap-3 text-[#3a3a3a]">
      {/* Bullet */}
      <span className="
        mt-[8px]
        w-[5px] h-[5px]
        bg-[#9A7A58]
        rounded-full
        shrink-0
      " />

      {/* Text */}
      <p className="
        text-[11px] sm:text-[12px]
        font-light
        leading-7
        tracking-[0.03em]
        text-gray-600
      ">
        {text}
      </p>
    </div>
  );
}