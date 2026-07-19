"use client";

import { CheckCircle2 } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
        text: "Private chauffeur-driven transfers from Chennai - timed for sunrise or sunset.",
    },
    {
        text: "Fully customised itineraries - blend Mahabalipuram with Kanchipuram, Puducherry, or Tamil Nadu.",
    },
    {
        text: "Handpicked luxury stays - boutique heritage to five-star beach resorts.",
    },
    {
        text: "Local historians and ASI-certified guides - bring mythology and engineering to life.",
    },
    {
        text: "Women-only tours with verified women-safe arrangements.",
    },
    {
        text: "Premium door-to-door service - for couples, families, and solo travellers.",
    },
    ];

  return (
    <section className="w-full bg-white py-6 md:py-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-2 md:mb-4">
          
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            font-semibold
            tracking-wide
            text-[#2c2c2c]
            mb-1
          ">
            Why Choose India Heritage Travel
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                group
                flex items-start gap-3 sm:gap-4
                p-3 sm:p-3
                bg-white
                rounded-lg
                border border-gray-200
                transition-all duration-300
              "
            >
              
              <p className="
                text-[12px] sm:text-[13px]
                text-gray-600
                leading-relaxed
                font-light
              ">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}