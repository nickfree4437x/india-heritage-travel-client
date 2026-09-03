"use client";

import {
  ShieldCheck,
  MapPinned,
  Hotel,
  Car,
  Headphones,
  BadgeCheck,
} from "lucide-react";

// Why Choose data
const reasons = [
  {
    icon: MapPinned,
    title: "Well-Planned Route",
    desc: "Explore Rajasthan's most iconic heritage destinations in one seamless journey.",
  },
  {
    icon: Hotel,
    title: "Comfortable Stays",
    desc: "Handpicked hotels offering comfort, convenience, and authentic experiences.",
  },
  {
    icon: Car,
    title: "Private Transportation",
    desc: "Travel comfortably with experienced drivers throughout the tour.",
  },
  {
    icon: BadgeCheck,
    title: "Authentic Experiences",
    desc: "Discover forts, palaces, local culture, markets, and hidden gems.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable",
    desc: "Professionally managed itineraries with trusted local support.",
  },
  {
    icon: Headphones,
    title: "Dedicated Assistance",
    desc: "Travel support before and during your Rajasthan adventure.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="max-w-5xl mx-auto">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reasons.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="
                border border-[#eee7dd]
                rounded-md
                p-5
                bg-white
                transition-all duration-300
                hover:shadow-sm
              "
            >
              <Icon size={18} className="text-[#AF956C] mb-3" />
              <h3 className="
                text-[14px]
                font-medium
                text-[#2c2c2c]
                mb-1
              ">
                {item.title}
              </h3>
              <p className="
                text-[12px]
                text-gray-600
                leading-relaxed
                font-light
              ">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}