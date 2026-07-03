"use client";

import { CheckCircle, AlertCircle, Star } from "lucide-react";

export default function SummerSeason() {
  const highlights = [
    {
      title: "Heat Conditions",
      description:
        "Summer temperatures frequently rise above 40°C (104°F), especially in Agra and Jaipur during May and June. Midday sightseeing can become challenging, making early mornings and evenings the most comfortable times to explore.",
    },
    {
      title: "Lower Travel Costs",
      description:
        "Flights, luxury hotels, private tours, and heritage palace stays often become 30–50% more affordable compared to peak winter pricing, making summer the most budget-friendly season.",
    },
    {
      title: "Smaller Crowds",
      description:
        "Visitor numbers drop significantly. Early morning visits to the Taj Mahal, Agra Fort, and Amber Fort often feel more relaxed and less crowded than during the winter season.",
    },
    {
      title: "Luxury Hotel Opportunities",
      description:
        "This is the season when many of India's most prestigious palace hotels and five-star resorts offer room upgrades, promotional packages, and exceptional value for luxury travelers.",
    },
  ];

  const pros = [
    "Lower hotel and tour prices",
    "Fewer visitors at major attractions",
    "Easier access to premium accommodations",
    "Better chances of complimentary upgrades",
  ];

  const cons = [
    "Extreme heat limits daytime sightseeing",
    "Outdoor activities best reserved for mornings and evenings",
    "Greater risk of heat exhaustion and dehydration",
    "Hazy skies can reduce photography quality during midday",
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ===== SECTION HEADER ===== */}
        <div className="mb-8">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] text-[#2c2c2c] font-bold mb-3">
            Golden Triangle in Summer (April-June)
          </h2>

          <p className="text-gray-600 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
            Summer is easily the most debated season for visiting the Golden Triangle. While soaring temperatures make sightseeing more demanding, significantly lower prices, quieter monuments, and luxury hotel deals create opportunities that many experienced travelers actively seek out.
          </p>
        </div>

        {/* ===== QUICK STATS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="border borer-gray-200 rounded-lg p-4 bg-white">
            <h3 className="text-[12px] uppercase tracking-wider text-gray-500 font-medium mb-1">
              Hottest Period
            </h3>
            <p className="text-[14px] font-semibold text-[#2c2c2c]">
              May – June
            </p>
            <p className="text-[12px] text-gray-500 font-light mt-1">
              Often exceeds 40°C
            </p>
          </div>

          <div className="border borer-gray-200 rounded-lg p-4 bg-white">
            <h3 className="text-[12px] uppercase tracking-wider text-gray-500 font-medium mb-1">
              Biggest Advantage
            </h3>
            <p className="text-[14px] font-semibold text-[#2c2c2c]">
              Best Rates
            </p>
            <p className="text-[12px] text-gray-500 font-light mt-1">
              Luxury hotels at lower prices
            </p>
          </div>

          <div className="border borer-gray-200 rounded-lg p-4 bg-white">
            <h3 className="text-[12px] uppercase tracking-wider text-gray-500 font-medium mb-1">
              Travel Rating
            </h3>
            <div className="flex items-center gap-2">
              <p className="text-[14px] font-semibold text-amber-700">
                Fair
              </p>
              <div className="flex gap-0.5">
                {[1, 2, 3].map((star) => (
                  <Star key={star} size={14} className="fill-[#d97706] text-[#d97706]" />
                ))}
                {[4, 5].map((star) => (
                  <Star key={star} size={14} className="fill-gray-200 text-gray-200" />
                ))}
              </div>
            </div>
            <p className="text-[12px] text-gray-500 font-light mt-1">
              ★★★☆☆ Best for budget travelers
            </p>
          </div>
        </div>

        {/* ===== PROS & CONS ===== */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {/* Pros */}
          <div className="border borer-gray-200 rounded-lg p-5 bg-white">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle size={18} className="text-green-600" />
              <h3 className="text-[14px] font-semibold text-[#2c2c2c]">
                Advantages
              </h3>
            </div>

            <ul className="space-y-2">
              {pros.map((item, idx) => (
                <li key={idx} className="text-[13px] text-gray-600 flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="border borer-gray-200 rounded-lg p-5 bg-white">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle size={18} className="text-red-600" />
              <h3 className="text-[14px] font-semibold text-[#2c2c2c]">
                Considerations
              </h3>
            </div>

            <ul className="space-y-2">
              {cons.map((item, idx) => (
                <li key={idx} className="text-[13px] text-gray-600 flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}