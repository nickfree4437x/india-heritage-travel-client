"use client";

import {
  Check,
  Hotel,
  Car,
  Utensils,
  CreditCard,
  Wifi,
  CookingPot,
  Plane,
  Bus,
} from "lucide-react";

export default function HighlightsInclusions() {
  return (
    <section className="py-6">

      {/* SAME WIDTH SYSTEM */}
      <div className="max-w-5xl mx-auto">

        <div className="grid md:grid-cols-2 gap-10">

          {/* 🔥 Highlights */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6">

            <h2 className="text-xl md:text-2xl font-semibold mb-5 text-center">
              Highlights
            </h2>

            <ul className="space-y-3 text-gray-700 text-sm">

              <li className="flex items-center gap-2">
                <Check className="text-[#AF956C]" size={16} />
                Journey from peaceful backwaters to thrilling wildlife
              </li>

              <li className="flex items-center gap-2">
                <Check className="text-[#AF956C]" size={16} />
                Munnar’s Tea Gardens & peace
              </li>

              <li className="flex items-center gap-2">
                <Check className="text-[#AF956C]" size={16} />
                Mumbai’s secret Charm
              </li>

              <li className="flex items-center gap-2">
                <Check className="text-[#AF956C]" size={16} />
                Cultural & Scenic journey
              </li>

              <li className="flex items-center gap-2">
                <Check className="text-[#AF956C]" size={16} />
                Kerala undiscovered
              </li>

            </ul>
          </div>

          {/* 🔥 Inclusions */}
          <div className="bg-white rounded-md shadow-sm border border-[#eee7dd] p-6">

            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center">
              Inclusions
            </h2>

            {/* SAME GRID STYLE */}
            <div className="grid grid-cols-4 gap-y-6 gap-x-4 text-center">

              <div className="flex flex-col items-center gap-1.5">
                <Hotel size={18} className="text-[#AF956C]" />
                <p className="text-[12px] leading-tight">
                  9 nights, chosen hotels
                </p>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <Car size={18} className="text-[#AF956C]" />
                <p className="text-[12px] leading-tight">
                  Local driver, guide
                </p>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <Utensils size={18} className="text-[#AF956C]" />
                <p className="text-[12px] leading-tight">
                  Daily breakfast
                </p>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <CreditCard size={18} className="text-[#AF956C]" />
                <p className="text-[12px] leading-tight">
                  All costs covered
                </p>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <Wifi size={18} className="text-[#AF956C]" />
                <p className="text-[12px] leading-tight">
                  In Car Wi-fi
                </p>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <CookingPot size={18} className="text-[#AF956C]" />
                <p className="text-[12px] leading-tight">
                  Cooking classes, dinner
                </p>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <Plane size={18} className="text-[#AF956C]" />
                <p className="text-[12px] leading-tight">
                  Airport transfer
                </p>
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <Bus size={18} className="text-[#AF956C]" />
                <p className="text-[12px] leading-tight">
                  Delhi rickshaw
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}