"use client";

import { CheckCircle2 } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
        text: "Specialist Knowledge of Delhi Sultanate History and Architecture",
    },
    {
        text: "Private Chauffeured Transfers Throughout",
    },
    {
        text: "Fully Personalised Delhi Itineraries",
    },
    {
        text: "Luxury Heritage Delhi Accommodation",
    },
    {
        text: "Safe and Thoughtful Tours for Women Travelers",
    },
    {
        text: "Designed for International Luxury Travelers",
    },
    ];

  return (
    <section className="w-full bg-white py-4 md:py-4">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-1 md:mb-2">
          
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            font-semibold
            tracking-wide
            text-[#2c2c2c]
          ">
            Why Choose India Heritage Travel for Your Qutub Minar Visit?
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
                p-4 sm:p-5
                bg-white
                rounded-lg
                border border-gray-200
                transition-all duration-300
              "
            >
              <div className="
                flex-shrink-0
                w-5 h-5 sm:w-6 sm:h-6
                mt-0.5
                text-[#AF956C]
                bg-[#AF956C]/10
                rounded-full
                flex items-center justify-center
              ">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              
              <p className="
                text-[12px] sm:text-[14px]
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