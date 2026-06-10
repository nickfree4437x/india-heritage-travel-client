"use client";

import { ShieldCheck, Compass, Headphones, Route } from "lucide-react";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

type ItemType = {
  icon: React.ReactNode;
  text: string;
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Difference() {
  // ==========================================================================
  // DATA - FEATURE ITEMS
  // ==========================================================================

  const items: ItemType[] = [
    {
      icon: <ShieldCheck size={55} />,
      text: "Safe And Secure Women Travel",
    },
    {
      icon: <Compass size={55} />,
      text: "100+ handpicked destinations ",
    },
    {
      icon: <Headphones size={55} />,
      text: "24×7 Round The Clock Support",
    },
    {
      icon: <Route size={55} />,
      text: "Traveler Friendly Curated Itineraries",
    },
  ];

  // ==========================================================================
  // MAIN RENDER
  // ==========================================================================

  return (
    <section className="relative py-8 sm:py-6 px-4 sm:px-6 bg-[#f8f6f2] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* ====================================================================
            HEADING SECTION
        ==================================================================== */}
        <div className="text-center mb-8 sm:mb-10 md:mb-10">
          <h2 className="text-[20px] sm:text-[24px] md:text-[22px] font-[550] text-[#8b6b47] tracking-wide leading-snug">
            How We Make a Difference
          </h2>
        </div>

        {/* ====================================================================
            FEATURES GRID
        ==================================================================== */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
                     gap-y-16 sm:gap-y-16 md:gap-y-20 
                     gap-x-16 md:gap-x-24 lg:gap-x-32 text-center md:mb-14"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center px-4"
            >
              {/* Icon */}
              <div className="text-[#8F6E4B] mb-4 transition duration-300">
                {item.icon}
              </div>

              {/* Feature text */}
              <p
                className="text-gray-800 text-[12px] font-light sm:text-[13px] md:text-[13px] 
                           leading-relaxed tracking-wide whitespace-nowrap"
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}