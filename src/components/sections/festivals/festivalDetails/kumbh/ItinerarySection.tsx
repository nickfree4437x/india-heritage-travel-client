"use client";

import { useState } from "react";
import Image from "next/image";

const itinerary = [
  {
    title: "Day 1–3: Delhi",
    desc: "Arrival in Delhi. Explore historical landmarks, local markets, and experience the vibrant capital city.",
  },
  {
    title: "Day 3–5: Jaipur",
    desc: "Visit Amber Fort, City Palace, and Hawa Mahal. Experience royal heritage and culture.",
  },
  {
    title: "Day 5–6: Agra",
    desc: "Visit the Taj Mahal and Agra Fort. Witness Mughal architecture at its finest.",
  },
  {
    title: "Day 6–9: Prayagraj",
    desc: "Experience the Kumbh Mela. Participate in sacred rituals and holy river bathing.",
  },
  {
    title: "Day 10: Delhi",
    desc: "Return to Delhi for rest and final shopping.",
  },
  {
    title: "Day 11: Departure",
    desc: "Transfer to airport with unforgettable spiritual memories.",
  },
];

export default function ItinerarySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#f4f0ea]" id="itinerary">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#9b7a50] mb-12">
          Detailed Itinerary
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT - ACCORDION */}
          <div className="space-y-4">

            {itinerary.map((item, index) => (
              <div key={index} className="bg-[#e9e2d8] rounded-lg overflow-hidden">

                {/* Header */}
                <div
                  onClick={() => toggle(index)}
                  className="flex justify-between items-center px-5 py-4 cursor-pointer"
                >
                  <h3 className="font-semibold text-[#9b7a50]">
                    {item.title}
                  </h3>
                  <span>{openIndex === index ? "▲" : "▼"}</span>
                </div>

                {/* Content */}
                {openIndex === index && (
                  <div className="bg-white px-5 py-4 text-gray-700">
                    {item.desc}
                  </div>
                )}

              </div>
            ))}

          </div>

          {/* RIGHT - STICKY MAP */}
          <div className="relative">

            <div className="sticky top-24">
              <div className="rounded-xl overflow-hidden shadow-md">

                <Image
                  src="/festivals/kumbh/map.jpg"
                  alt="Kumbh Route Map"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}