"use client";

import { useState } from "react";
import {
  Hotel,
  Car,
  Utensils,
  CreditCard,
  Wifi,
  ChefHat,
  Plane,
  Bus,
} from "lucide-react";

export default function AboutSection() {
  const [open, setOpen] = useState(false);

  const inclusions = [
    { icon: <Hotel />, text: "15 nights, chosen hotels" },
    { icon: <Car />, text: "Local driver, guide" },
    { icon: <Utensils />, text: "Daily breakfast" },
    { icon: <CreditCard />, text: "All costs covered" },
    { icon: <Wifi />, text: "In Car Wi-fi" },
    { icon: <ChefHat />, text: "Cooking classes, dinner" },
    { icon: <Plane />, text: "Airport transfer" },
    { icon: <Bus />, text: "Delhi rickshaw" },
  ];

  return (
    <section className="py-24 px-6 bg-[#f4f0ea]" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT - ABOUT */}
        <div>
          <h2 className="text-3xl md:text-3xl font-semibold text-[#2c2c2c] tracking-wide mb-6">
            Where the Desert Comes Alive with Camels, Culture, and Camaraderie
          </h2>

          <div className="space-y-5 text-[#3a3a3a] leading-relaxed text-[15px] md:text-[16px] text-justify">
            <p>
              Pushkar during the camel fair feels like another world. For five days,
              the quiet desert town fills up with camels, traders, travellers, and
              locals — all coming together for something special.
            </p>

            <p>
              It’s not just about buying and selling camels (though there are thousands
              of them). There’s music in the air, dancers in bright clothes, people
              laughing, telling stories, and even unique competitions.
            </p>

            <p>
              Some people come to trade. Others just come to watch. But everyone
              leaves with something — a memory, a story, or just the feeling of
              being part of something truly Rajasthani.
            </p>
          </div>
        </div>

        {/* RIGHT - INCLUSIONS */}
        <div className="bg-white rounded-md p-8">

            <h3 className="text-2xl font-semibold text-[#2c2c2c] text-center mb-8 tracking-wide">
              Inclusions
            </h3>

            <div className="grid grid-cols-2 gap-y-8 gap-x-6">
              {inclusions.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <div className="text-[#9A7A58]">
                    {item.icon}
                  </div>
                  <p className="text-sm font-medium text-[#3a3a3a] leading-snug">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

      </div>

      {/* EXCLUSIONS */}
      <div className="max-w-7xl mx-auto mt-12">

        {/* HEADER */}
        <div
          onClick={() => setOpen(!open)}
          className="bg-[#e9e2d8] px-6 py-5 cursor-pointer flex justify-between items-center
                    transition-all duration-300"
        >
          <h4 className="font-medium text-[#2c2c2c] tracking-wide">
            Excluded Services in this Journey
          </h4>

          {/* ICON ROTATION */}
          <span
            className={`text-sm transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>

        {/* CONTENT */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="bg-white px-6 py-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">

              {[
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
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-[#3a3a3a] text-sm">

                  {/* BULLET */}
                  <span className="mt-[6px] w-[5px] h-[5px] bg-[#9A7A58] rounded-full shrink-0"></span>

                  {/* TEXT */}
                  <p className="leading-relaxed">{item}</p>

                </div>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}