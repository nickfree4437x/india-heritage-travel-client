"use client";

import Link from "next/link";

const itinerary = [
  {
    day: "Day 1 • Morning",
    title: "Taj Mahal",
    description:
      "Enter through the Eastern Gate and spend around two hours exploring the Taj Mahal, its gardens, reflecting pools, and marble mausoleum.",
  },
  {
    day: "Day 1 • Afternoon",
    title: "Agra Fort & Baby Taj",
    description:
      "Visit Agra Fort, followed by the Tomb of Itimad-ud-Daulah (the Baby Taj), before enjoying lunch in Agra's historic old city.",
  },
  {
    day: "Day 1 • Evening",
    title: "Mehtab Bagh Sunset",
    description:
      "Cross the Yamuna River to Mehtab Bagh for sunset views of the Taj Mahal before ending the day with a traditional Mughlai dinner.",
  },
  {
    day: "Day 2",
    title: "Fatehpur Sikri or Jaipur",
    description:
      "Take a half-day excursion to Fatehpur Sikri or depart early for Jaipur to continue your Golden Triangle journey.",
  },
];

export default function ItinerarySection() {
  return (
    <section className="w-full bg-white py-2 sm:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] leading-tight mb-2">
          A Typical 2-Day Trip to Agra
        </h2>

        <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify mb-6">
          Two days is usually enough to experience Agra's major attractions
          without feeling rushed. This itinerary combines the Taj Mahal,
          Mughal history, local culture, and nearby UNESCO sites into a
          comfortable and rewarding visit.
        </p>

        <div className="space-y-4">
          {itinerary.map((item, index) => (
            <div key={index} className="rounded-md p-5 sm:p-6 bg-[#faf8f5]">
              <span className="text-[11px] uppercase tracking-wide text-[#AF956C]">
                {item.day}
              </span>

              <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#2c2c2c] mt-1 mb-1">
                {item.title}
              </h3>

              <p className="text-[12px] sm:text-[13px] text-gray-700 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}