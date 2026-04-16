"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const itineraryData = [
  {
    title: "Day 1-2: Delhi",
    content: "Arrival in Delhi, city tour, local markets, and welcome dinner.",
  },
  {
    title: "Day 2-5: Mandawa",
    content: "Explore havelis, fresco art, and heritage walks.",
  },
  {
    title: "Day 5-6: Bikaner",
    content: "Visit Junagarh Fort, camel breeding farm, and local bazaars.",
  },
  {
    title: "Day 6-8: Jaisalmer",
    content: "Desert safari, camel ride, and cultural night in dunes.",
  },
  {
    title: "Day 8-9: Jodhpur",
    content: "Mehrangarh Fort, blue city walk, and local cuisine.",
  },
  {
    title: "Day 9-11: Udaipur",
    content: "Lake Pichola, City Palace, and sunset boat ride.",
  },
  {
    title: "Day 11-12: Pushkar",
    content: "Temple visit, lake exploration, and peaceful town vibes.",
  },
  {
    title: "Day 12-14: Jaipur",
    content: "Amber Fort, Hawa Mahal, and shopping experience.",
  },
  {
    title: "Day 14-15: Agra",
    content: "Visit Taj Mahal and Agra Fort.",
  },
  {
    title: "Day 15: Delhi",
    content: "Return to Delhi and leisure day.",
  },
  {
    title: "Day 16: Departure",
    content: "Airport transfer and departure.",
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
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-[#9b7a50] mb-12">
          Detailed Itinerary
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE - ACCORDION */}
          <div className="space-y-4">
            {itineraryData.map((item, i) => (
              <div key={i} className="bg-[#e9e2d8] rounded-lg overflow-hidden">

                {/* Header */}
                <div
                  onClick={() => toggle(i)}
                  className="flex justify-between items-center px-6 py-4 cursor-pointer"
                >
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <ChevronDown
                    className={`transition-transform ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Content */}
                <div
                  className={`px-6 transition-all duration-300 ${
                    openIndex === i
                      ? "max-h-40 py-4 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="text-gray-700">{item.content}</p>
                </div>

              </div>
            ))}
          </div>

          {/* RIGHT SIDE - STICKY MAP */}
          <div className="relative">

            <div className="sticky top-24">
              <div className="rounded-xl overflow-hidden shadow-lg">

                <Image
                  src="/festivals/holi/map.jpg" // 👉 apna map image public me daal
                  alt="Route Map"
                  width={500}
                  height={600}
                  className="object-cover w-full h-auto"
                />

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}