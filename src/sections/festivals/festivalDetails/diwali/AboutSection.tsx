"use client";

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

import ExcludedServices from "../../common/ExcludedServices";

export default function AboutSection() {

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
    <section className="bg-white pb-10 px-6 scroll-mt-16 md:scroll-mt-24" id="about">

      <div className="max-w-6xl mx-auto">

        {/* 🔹 TOP GRID */}
        <div className="grid md:grid-cols-2 gap-2 md:gap-12 items-start">

          {/* LEFT - ABOUT */}
          <div>

            <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
              Diwali – A Festival of Light & New Beginnings
            </h2>

            <div className="space-y-5 font-light text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[13px] text-justify">

              <p>
                There’s something about Diwali that’s hard to put into words.
                It’s not just the lamps or fireworks — it’s the feeling.
                A kind of warmth that fills homes, streets, and hearts.
              </p>

              <p>
                At its core, Diwali marks the return of Lord Rama after
                14 years in exile — a story where light finally wins.
                Families clean their homes, light candles, and welcome
                Goddess Lakshmi, hoping for peace and prosperity in the
                year ahead.
              </p>

              <p>
                It’s a five-day celebration. Each day has its own flavour:
              </p>

              <ul className="list-disc pl-5 space-y-2">
                <li>Day 1: Dhanteras – Start fresh. People buy something new.</li>
                <li>Day 2: Choti Diwali – The warm-up before the big day.</li>
                <li>Day 3: Main Diwali – Lights, prayers, sweets, and family time.</li>
                <li>Day 4: Govardhan Puja – Gratitude for nature.</li>
                <li>Day 5: Bhai Dooj – Celebration of sibling bonds.</li>
              </ul>

              <p>
                You’ll see it all — glowing homes, sparkling lights,
                buzzing markets. And the food? You won’t go hungry.
              </p>

              <p>
                Join us on this unforgettable journey and take home
                memories that last a lifetime.
              </p>

            </div>

          </div>

          {/* RIGHT - INCLUSIONS */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6 scroll-mt-20 md:scroll-mt-24" id="inclusions">

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

                  {/* ICON */}
                  <div
                    className="
                      text-[#9A7A58]
                      scale-[0.85]
                    "
                  >
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <p
                    className="
                      text-[11px]
                      sm:text-[12px]
                      font-light
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
        <div id="excluded-services" className="scroll-mt-20 md:scroll-mt-24">
          <ExcludedServices />
        </div>

      </div>

    </section>
  );
}