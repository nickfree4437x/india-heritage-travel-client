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
    { icon: <Hotel size={26} />, text: "15 nights, chosen hotels" },
    { icon: <Car size={26} />, text: "Local driver, guide" },
    { icon: <Utensils size={26} />, text: "Daily breakfast" },
    { icon: <CreditCard size={26} />, text: "All costs covered" },
    { icon: <Wifi size={26} />, text: "In Car Wi-fi" },
    { icon: <ChefHat size={26} />, text: "Cooking classes, dinner" },
    { icon: <Plane size={26} />, text: "Airport transfer" },
    { icon: <Bus size={26} />, text: "Delhi rickshaw" },
  ];

  return (
    <section className="bg-[#f4f0ea] pt-20 pb-10 px-6" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE - ABOUT */}
        <div>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#2c2c2c] tracking-wide mb-6">
            Diwali – A Festival of Light & New Beginnings
          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed text-[15px] md:text-base text-justify">

            <p>
              There’s something about Diwali that’s hard to put into words. It’s not
              just the lamps or fireworks — it’s the feeling. A kind of warmth that
              fills homes, streets, and hearts.
            </p>

            <p>
              At its core, Diwali marks the return of Lord Rama after 14 years in
              exile — a story where light finally wins. Families clean their homes,
              light candles, and welcome Goddess Lakshmi, hoping for peace and
              prosperity in the year ahead.
            </p>

            <p>
              It’s a five-day celebration. Each day has its own flavour:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Day 1: Dhanteras – Start fresh. People buy something new.</li>
              <li>Day 2: Choti Diwali – The warm-up before the big day.</li>
              <li>Day 3: Main Diwali – Lights, prayers, sweets, and family time.</li>
              <li>Day 4: Govardhan Puja – Gratitude for nature.</li>
              <li>Day 5: Bhai Dooj – Celebration of sibling bonds.</li>
            </ul>

            <p> 
              You’ll see it all — glowing homes, sparkling lights, buzzing markets.
              And the food? You won’t go hungry.
            </p>

            <p>
              Join us on this unforgettable journey and take home memories that
              last a lifetime.
            </p>

          </div>
        </div>

        {/* RIGHT SIDE - INCLUSIONS */}
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