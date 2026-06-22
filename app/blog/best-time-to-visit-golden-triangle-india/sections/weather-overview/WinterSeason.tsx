"use client";

import { Sun, Cloud, Moon, CheckCircle, AlertCircle, Star } from "lucide-react";

export default function WinterSeason() {
  const highlights = [
    {
      title: "Comfortable Temperatures",
      description:
        "Daytime temperatures generally stay within the mid-teens to high twenties Celsius, making it comfortable to explore Amber Fort, Fatehpur Sikri, Humayun's Tomb, and the Taj Mahal without the fatigue caused by extreme heat.",
    },
    {
      title: "Best Sightseeing Conditions",
      description:
        "Blue skies, lower humidity, and soft natural light provide the ideal conditions for monument visits, walking tours, and outdoor exploration throughout Delhi, Agra, and Jaipur.",
    },
    {
      title: "Festival Season",
      description:
        "Winter coincides with some of India's most celebrated cultural events including Diwali, Pushkar Camel Fair, Jaipur Literature Festival, and Republic Day celebrations in Delhi.",
    },
    {
      title: "Photography Opportunities",
      description:
        "Crisp air, warm golden sunlight, and reduced atmospheric haze create exceptional conditions for both professional and amateur photographers.",
    },
    {
      title: "Luxury Travel Advantages",
      description:
        "Heritage hotels, palace properties, rooftop dining, garden breakfasts, and open-air cultural experiences are at their best during the winter season.",
    },
  ];

  const pros = [
    "Comfortable walking and sightseeing temperatures",
    "Excellent photography conditions",
    "Major festivals take place during this season",
    "Heritage hotels and luxury experiences at their peak",
  ];

  const cons = [
    "High demand means higher hotel rates",
    "Advance booking is strongly recommended",
    "Popular monuments can become crowded at midday",
    "Winter fog in Delhi may occasionally affect flights",
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ===== SECTION HEADER ===== */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#c9a45c]">
              Peak Travel Season
            </span>
          </div>

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] text-[#2c2c2c] font-semibold mb-3">
            Golden Triangle in Winter (October-March)
          </h2>

          <p className="text-gray-600 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
            Winter is widely considered the best season to experience the Golden Triangle. Comfortable weather, major cultural festivals, excellent photography conditions, and ideal sightseeing temperatures combine to create the most rewarding travel experience of the year.
          </p>
        </div>

        {/* ===== QUICK STATS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="border border-[#e7dfd4] rounded-lg p-4 bg-white">
            <h3 className="text-[12px] uppercase tracking-wider text-gray-500 font-medium mb-1">
              Best Overall
            </h3>
            <p className="text-[14px] font-semibold text-[#2c2c2c]">
              October – March
            </p>
            <p className="text-[12px] text-gray-500 font-light mt-1">
              Most comfortable conditions
            </p>
          </div>

          <div className="border border-[#e7dfd4] rounded-lg p-4 bg-white">
            <h3 className="text-[12px] uppercase tracking-wider text-gray-500 font-medium mb-1">
              Temperature
            </h3>
            <p className="text-[14px] font-semibold text-[#2c2c2c]">
              15°C – 28°C
            </p>
            <p className="text-[12px] text-gray-500 font-light mt-1">
              Daytime range
            </p>
          </div>

          <div className="border border-[#e7dfd4] rounded-lg p-4 bg-white">
            <h3 className="text-[12px] uppercase tracking-wider text-gray-500 font-medium mb-1">
              Travel Rating
            </h3>
            <div className="flex items-center gap-2">
              <p className="text-[14px] font-semibold text-green-700">
                Excellent
              </p>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={14} className="fill-[#c9a45c] text-[#c9a45c]" />
                ))}
              </div>
            </div>
            <p className="text-[12px] text-gray-500 font-light mt-1">
              ★★★★★ Best season
            </p>
          </div>
        </div>

        {/* ===== HIGHLIGHTS ===== */}
        <div className="mb-10">
          <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-4">
            Why Visit in Winter
          </h3>

          <div className="space-y-3">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className=" hover:border-[#a8843a] transition-colors duration-200"
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
          <div className="border border-[#e7dfd4] rounded-lg p-5 bg-white">
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
          <div className="border border-[#e7dfd4] rounded-lg p-5 bg-white">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle size={18} className="text-amber-600" />
              <h3 className="text-[14px] font-semibold text-[#2c2c2c]">
                Considerations
              </h3>
            </div>

            <ul className="space-y-2">
              {cons.map((item, idx) => (
                <li key={idx} className="text-[13px] text-gray-600 flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
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