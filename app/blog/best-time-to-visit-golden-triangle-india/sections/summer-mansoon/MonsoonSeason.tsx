"use client";

import {  Star, } from "lucide-react";

export default function MonsoonSeason() {
  const highlights = [
    {
      title: "Rainfall Patterns",
      description:
        "Monsoon showers are usually short, intense bursts rather than all-day rainfall. July and August see the highest precipitation, while conditions gradually improve throughout September.",
    },
    {
      title: "Green Landscapes",
      description:
        "Rajasthan's normally dry terrain transforms dramatically. Fields become lush green, lakes around Jaipur fill with water, and the sandstone forts stand out beautifully against vibrant natural surroundings.",
    },
    {
      title: "Fewer Tourists",
      description:
        "Visitor numbers remain relatively low compared to winter, allowing a more relaxed experience at major attractions including the Taj Mahal, Agra Fort, Amber Fort, and City Palace.",
    },
    {
      title: "Photography Benefits",
      description:
        "Dramatic clouds, rain-soaked marble, reflective surfaces, and rich colors create photographs that look completely different from the classic winter images seen across most travel brochures.",
    },
  ];

  const pros = [
    "Unique photography opportunities",
    "Beautiful green landscapes and filled lakes",
    "Lower costs and fewer crowds",
    "Cooler than peak summer months",
  ];

  const cons = [
    "Humidity can remain high",
    "Sudden rain showers may interrupt sightseeing",
    "Outdoor activities require more flexibility",
    "Certain open fort areas may have limited accessibility",
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ===== SECTION HEADER ===== */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#c9a45c]">
              Photographer's Season
            </span>
          </div>

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] text-[#2c2c2c] font-semibold mb-3">
            Golden Triangle in Monsoon (July-September)
          </h2>

          <p className="text-gray-600 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] font-light">
            Monsoon is perhaps the most underrated season for exploring the Golden Triangle. While many travelers automatically focus on winter, experienced visitors and photographers often appreciate the dramatic skies, lush landscapes, and quieter atmosphere that arrive with the rains.
          </p>
        </div>

        {/* ===== QUICK STATS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="border borer-gray-200 rounded-lg p-4 bg-white">
            <h3 className="text-[11px] uppercase tracking-wider text-gray-500 font-medium mb-1">
              Rainy Season
            </h3>
            <p className="text-[15px] font-semibold text-[#2c2c2c]">
              July – August
            </p>
            <p className="text-[12px] text-gray-500 font-light mt-1">
              Highest rainfall, easing by September
            </p>
          </div>

          <div className="border borer-gray-200 rounded-lg p-4 bg-white">
            <h3 className="text-[11px] uppercase tracking-wider text-gray-500 font-medium mb-1">
              Biggest Advantage
            </h3>
            <p className="text-[15px] font-semibold text-[#2c2c2c]">
              Green Landscapes
            </p>
            <p className="text-[12px] text-gray-500 font-light mt-1">
              Dramatic skies and unique views
            </p>
          </div>

          <div className="border borer-gray-200 rounded-lg p-4 bg-white">
            <h3 className="text-[11px] uppercase tracking-wider text-gray-500 font-medium mb-1">
              Travel Rating
            </h3>
            <div className="flex items-center gap-2">
              <p className="text-[15px] font-semibold text-emerald-700">
                Good
              </p>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} size={14} className="fill-emerald-600 text-emerald-600" />
                ))}
                {[5].map((star) => (
                  <Star key={star} size={14} className="fill-gray-200 text-gray-200" />
                ))}
              </div>
            </div>
            <p className="text-[12px] text-gray-500 font-light mt-1">
              ★★★★☆ Best for photographers
            </p>
          </div>
        </div>

        {/* ===== HIGHLIGHTS ===== */}
        <div className="mb-10">
          <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#2c2c2c] mb-4">
            What to Expect in Monsoon
          </h3>

          <div className="space-y-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className=" hover:border-emerald-800 transition-colors duration-200"
              >
                <h4 className="text-[14px] sm:text-[15px] font-medium text-[#2c2c2c] mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-[13px] sm:text-[14px] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== PROS & CONS ===== */}
        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {/* Pros */}
          <div className="border borer-gray-200 rounded-lg p-5 bg-white">
            <h3 className="text-[14px] font-semibold text-green-700 mb-4">
              Advantages
            </h3>

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
            <h3 className="text-[14px] font-semibold text-red-700 mb-4">
              Considerations
            </h3>

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