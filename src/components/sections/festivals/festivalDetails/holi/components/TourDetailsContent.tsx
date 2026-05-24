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
import ExcludedServices from "../../../common/ExcludedServices";

export default function TourDetailsContent() {

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
    <section className="bg-white pb-10 px-6 scroll-mt-24 md:scroll-mt-28" id="about">

      <div className="max-w-6xl mx-auto">

        {/* 🔹 TOP GRID */}
        <div className="grid md:grid-cols-2 gap-2 md:gap-12 items-start">

          {/* LEFT - ABOUT */}
          <div>
            <h2 className="text-[16px] sm:text-[20px] md:text-[20px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
              Holi - A Joyful Start to Spring
            </h2>

            <div className="space-y-5 font-light text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] text-justify">
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
                In <span className="font-semibold">Rajasthan</span>, Holi is
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
          <div className="bg-white rounded-md p-6 shadow-sm border border-[#eee7dd] scroll-mt-24 md:scroll-mt-28" id="inclusions">

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

        <div id="excluded-services" className="scroll-mt-24 md:scroll-mt-28">
          <ExcludedServices />
        </div>

      </div>
    </section>
  );
}