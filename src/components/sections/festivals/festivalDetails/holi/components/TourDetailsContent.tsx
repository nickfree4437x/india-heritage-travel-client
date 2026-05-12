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

export default function TourDetailsContent() {
  const [open, setOpen] = useState(true);

  const inclusions = [
    { icon: <Hotel size={28} />, text: "15 nights, chosen hotels" },
    { icon: <Car size={28} />, text: "Local driver, guide" },
    { icon: <Utensils size={28} />, text: "Daily breakfast" },
    { icon: <CreditCard size={28} />, text: "All costs covered" },
    { icon: <Wifi size={28} />, text: "In Car Wi-fi" },
    { icon: <ChefHat size={28} />, text: "Cooking classes, dinner" },
    { icon: <Plane size={28} />, text: "Airport transfer" },
    { icon: <Bus size={28} />, text: "Delhi rickshaw" },
  ];

  return (
    <section className="bg-[#f4f0ea] pb-10 px-6" id="about">

      <div className="max-w-6xl mx-auto">

        {/* 🔹 TOP GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT - ABOUT */}
          <div>
            <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
              Holi - A Joyful Start to Spring
            </h2>

            <div className="space-y-5 text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] font-[350] md:text-[14.5px] text-justify">
              <p>
                Holi has its roots in a legend of a fearless prince named Prahlad
                and a demoness named Holika. She tried to burn him, but in the end,
                she burned instead.
              </p>

              <p>
                It’s a story that’s stuck around for centuries because it says
                something timeless: good wins, always.
              </p>

              <p>
                Today, Holi is still about that. But it’s also about letting go.
                You leave behind the heavy stuff – grudges, stress, winter – and
                step into spring with laughter, colours, and a whole lot of joy.
              </p>

              <p>
                In <span className="font-semibold underline">Rajasthan</span>, Holi is
                something else. Music bounces off old palace walls. Colour flies
                everywhere. Strangers become friends. It’s wild, warm, and unforgettable.
              </p>

              <p>
                Join us in this mesmerising journey and take home memories and
                stories that live with you forever.
              </p>
            </div>
          </div>

          {/* RIGHT - INCLUSIONS */}
          <div className="bg-white rounded-md p-6">

            <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#2c2c2c] text-center mb-8 tracking-wide">
              Inclusions
            </h3>

            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {inclusions.map((item, i) => (
                <div
                  key={i}
                  className="
                    flex flex-col items-center
                    text-center
                    gap-2
                  "
                >

                  {/* 🔥 ICON */}
                  <div
                    className="
                      text-[#9A7A58]
                      scale-[0.85]
                    "
                  >
                    {item.icon}
                  </div>

                  {/* 🔥 TEXT */}
                  <p
                    className="
                      text-[11px]
                      sm:text-[12px]
                      font-[400]
                      text-[#3a3a3a]
                      leading-[1.5]
                    "
                  >
                    {item.text}
                  </p>

                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 🔹 EXCLUSIONS */}
        <div className="mt-12 max-w-6xl mx-auto">

        {/* HEADER */}
        <div
          onClick={() => setOpen(!open)}
          className="bg-[#e9e2d8] px-6 py-5 cursor-pointer flex justify-between items-center
                    transition-all duration-300"
        >
          <h4
          className="
            text-[13px]
            sm:text-[14px]
            font-[400]
            text-[#2c2c2c]
            tracking-[0.03em]
           "
          >
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
                <div key={i} className="flex items-start gap-2 text-[#3a3a3a] text-xs">

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

      </div>
    </section>
  );
}