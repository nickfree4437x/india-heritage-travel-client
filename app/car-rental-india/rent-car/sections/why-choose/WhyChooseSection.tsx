"use client";

import { Car, MapPin, UserCheck, Map } from "lucide-react";

// Features data for Why Choose section
const features = [
  {
    icon: Car,
    label: "Well-Maintained Vehicles",
  },
  {
    icon: MapPin,
    label: "Stress-Free Travel",
  },
  {
    icon: UserCheck,
    label: "Professional Drivers",
  },
  {
    icon: Map,
    label: "Customised Itineraries",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="w-full bg-white pt-14 sm:pt-16 pb-8 sm:pb-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="
            text-[20px] sm:text-[24px] md:text-[26px]
            font-semibold
            text-[#8b6a3d]
            tracking-wide
            mb-3
          ">
            Why Choose Us?
          </h2>
          <p className="
            text-[#5a5a5a]
            text-[13px] sm:text-[14px] md:text-[13.5px]
            leading-relaxed
            max-w-2xl
            mx-auto
            font-light
          ">
            Enjoy safe, comfortable, and chauffeur-driven travel experiences across India.
          </p>
        </div>

        {/* Features Grid */}
        <div className="
          grid grid-cols-2 md:grid-cols-4
          gap-x-4 sm:gap-x-8 md:gap-x-12
          gap-y-8 sm:gap-y-10
          text-center
        ">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="
                  group flex flex-col items-center
                  gap-3 sm:gap-4
                  px-2 sm:px-4 md:px-6
                  py-4 sm:py-6 md:py-8
                  rounded-md
                  transition-all duration-500
                "
              >
                <Icon
                  size={34}
                  className="
                    text-[#9A7A58]
                    transition-all duration-500
                    sm:w-[38px] sm:h-[38px]
                    md:w-[42px] md:h-[42px]
                  "
                />
                <p className="
                  font-light
                  text-[#3a3a3a]
                  text-[12px] sm:text-[13px] md:text-[13px]
                  leading-relaxed
                ">
                  {feature.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}