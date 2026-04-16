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
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT - ABOUT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#9b7a50] mb-6">
            Holi - A Joyful Start to Spring
          </h2>

          <div className="space-y-5 text-gray-700 leading-relaxed">
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
      <div className="max-w-6xl mx-auto mt-10">

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
              <li>Flights: International or Domestic</li>
              <li>Personal expenses</li>
              <li>Travel insurance</li>
              <li>Anything not mentioned above</li>
            </ul>
          </div>
        )}
      </div>

    </section>
  );
}