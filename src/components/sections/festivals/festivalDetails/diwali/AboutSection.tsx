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
    <section className="py-20 px-6 bg-[#f4f0ea]" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE - ABOUT */}
        <div>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#9b7a50] mb-6">
            Diwali – A Festival of Light & New Beginnings
          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed">

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
        <div className="bg-white rounded-xl shadow-md p-6">

          <h3 className="text-2xl font-semibold text-[#9b7a50] mb-6 text-center">
            Inclusions
          </h3>

          <div className="grid grid-cols-2 gap-6">
            {inclusions.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <div className="text-[#9b7a50]">{item.icon}</div>
                <p className="text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* EXCLUSIONS */}
      <div className="max-w-7xl mx-auto mt-10">

        <div
          onClick={() => setOpen(!open)}
          className="bg-[#e9e2d8] px-6 py-4 cursor-pointer flex justify-between items-center rounded-t-xl"
        >
          <h4 className="font-semibold text-lg">
            Excluded Services in this Journey:
          </h4>
          <span>{open ? "▲" : "▼"}</span>
        </div>

        {open && (
          <div className="bg-white px-6 py-4 rounded-b-xl shadow">
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Flights (International & Domestic)</li>
              <li>Personal expenses</li>
              <li>Travel insurance</li>
              <li>Anything not mentioned in inclusions</li>
            </ul>
          </div>
        )}
      </div>

    </section>
  );
}