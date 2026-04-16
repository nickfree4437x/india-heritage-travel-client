"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const itineraryData = [
  {
    title: "Day 1-2: Delhi",
    content: "Arrival, sightseeing of Old & New Delhi, cultural introduction.",
  },
  {
    title: "Day 2-5: Mandawa",
    content: "Explore heritage havelis and fresco art in Shekhawati region.",
  },
  {
    title: "Day 4-6: Pushkar",
    content: "Experience Pushkar Camel Fair, cultural events, and local markets.",
  },
  {
    title: "Day 6-8: Udaipur",
    content: "Visit City Palace, Lake Pichola, and enjoy sunset views.",
  },
  {
    title: "Day 8-10: Jodhpur",
    content: "Explore Mehrangarh Fort, blue city walk, and local cuisine.",
  },
  {
    title: "Day 10-13: Jaipur",
    content: "Amber Fort, Hawa Mahal, shopping & vibrant city experience.",
  },
  {
    title: "Day 13-15: Agra",
    content: "Visit Taj Mahal and Agra Fort.",
  },
  {
    title: "Day 15: Delhi",
    content: "Return to Delhi, leisure time, and preparation for departure.",
  },
  {
    title: "Day 16: Departure",
    content: "Transfer to airport and departure with beautiful memories.",
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

          {/* LEFT - ACCORDION */}
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

          {/* RIGHT - STICKY MAP */}
          <div className="relative">
            <div className="sticky top-24">

              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/festivals/pushkar/map.jpg"
                  alt="Pushkar Route Map"
                  width={500}
                  height={600}
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