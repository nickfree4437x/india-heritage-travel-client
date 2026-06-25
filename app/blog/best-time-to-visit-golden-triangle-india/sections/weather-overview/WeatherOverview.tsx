"use client";

import { Sparkles, Sun, Cloud, Moon } from "lucide-react";

const weatherData = [
  {
    month: "January",
    temp: "8–21°C (46–70°F)",
    crowd: "Peak",
    experience: "Chilly dawns with early fog, followed by bright afternoons",
    recommendation: "Excellent",
    icon: Sun,
  },
  {
    month: "February",
    temp: "11–25°C (52–77°F)",
    crowd: "High",
    experience: "Pleasant, blooming gardens, ideal sightseeing",
    recommendation: "Excellent",
    icon: Sun,
  },
  {
    month: "March",
    temp: "16–32°C (61–90°F)",
    crowd: "Moderate",
    experience: "Warm but manageable, Holi festival energy",
    recommendation: "Very Good",
    icon: Sun,
  },
  {
    month: "April",
    temp: "22–38°C (72–100°F)",
    crowd: "Low",
    experience: "Hot, dry, intense midday sun",
    recommendation: "Fair",
    icon: Sun,
  },
  {
    month: "May",
    temp: "27–43°C (81–109°F)",
    crowd: "Very Low",
    experience: "Peak heat, best for indoor luxury and deals",
    recommendation: "Caution",
    icon: Sun,
  },
  {
    month: "June",
    temp: "28–42°C (82–108°F)",
    crowd: "Very Low",
    experience: "Hot with pre-monsoon humidity building",
    recommendation: "Caution",
    icon: Cloud,
  },
  {
    month: "July",
    temp: "27–37°C (81–99°F)",
    crowd: "Very Low",
    experience: "Monsoon onset, lush but humid",
    recommendation: "Fair",
    icon: Cloud,
  },
  {
    month: "August",
    temp: "26–35°C (79–95°F)",
    crowd: "Very Low",
    experience: "Rainy, green, atmospheric",
    recommendation: "Fair",
    icon: Cloud,
  },
  {
    month: "September",
    temp: "25–35°C (77–95°F)",
    crowd: "Low",
    experience: "Monsoon retreating, occasional showers",
    recommendation: "Good",
    icon: Cloud,
  },
  {
    month: "October",
    temp: "19–33°C (66–91°F)",
    crowd: "Moderate",
    experience: "Festive season begins, comfortable evenings",
    recommendation: "Very Good",
    icon: Moon,
  },
  {
    month: "November",
    temp: "13–28°C (55–82°F)",
    crowd: "High",
    experience: "Crisp, golden light, Diwali season",
    recommendation: "Excellent",
    icon: Moon,
  },
  {
    month: "December",
    temp: "8–22°C (46–72°F)",
    crowd: "Very High",
    experience: "Cool, festive, peak luxury travel season",
    recommendation: "Excellent",
    icon: Moon,
  },
];

export default function WeatherOverview() {
  const getBadgeStyles = (recommendation: string) => {
    switch (recommendation) {
      case "Excellent":
        return "bg-green-50 text-green-700";
      case "Very Good":
        return "bg-emerald-50 text-emerald-700";
      case "Good":
        return "bg-amber-50 text-amber-700";
      case "Fair":
        return "bg-orange-50 text-orange-700";
      case "Caution":
        return "bg-red-50 text-red-700";
      default:
        return "bg-gray-50 text-gray-700";
    }
  };

  const seasonCards = [
    { label: "Best Overall", months: "Oc - Mar" },
    { label: "Ideal Weather", months: "Nov - Feb" },
    { label: "Budget Season", months: "Apr - Jun" },
    { label: "Photography", months: "Jul - Sep" },
  ];

  return (
    <section className="w-full bg-white py-2 sm:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ===== QUICK ANSWER ===== */}
        <div className=" mb-8 bg-white">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] text-[#2c2c2c] font-semibold mb-3">
            Best Time to Visit the Golden Triangle
          </h2>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light mb-3">
            The best time to visit the Golden Triangle is from{' '}
            <span className=" text-[#c9a45c]">October through March</span>, when temperatures remain comfortable, skies are clearer, and sightseeing conditions are at their best.
          </p>

          <p className="text-gray-600 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light">
            <span className="font-medium">November to February</span> offers the most pleasant weather, while{' '}
            <span className="font-medium">October and March</span> provide an excellent shoulder-season balance.
          </p>
        </div>

        {/* ===== SEASON SNAPSHOT ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {seasonCards.map((season, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-4 text-center bg-white transition-colors duration-200"
            >
              <h3 className="text-[18px] sm:text-[20px] font-bold text-[#c9a45c]">
                {season.months}
              </h3>
              <p className="text-[11px] sm:text-[12px] text-gray-500 mt-1">
                {season.label}
              </p>
            </div>
          ))}
        </div>

        {/* ===== WEATHER TABLE ===== */}
        <div className="mb-6">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] text-[#2c2c2c] font-semibold mb-2">
            Weather Overview
          </h2>

          <p className="text-gray-500 text-[13px] sm:text-[14px] font-light mb-6">
            Compare weather, crowds, and travel experience month by month.
          </p>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto border border-[#e7dfd4] rounded-lg">
            <table className="w-full text-left">
              <thead className="bg-[#faf7f3]">
                <tr>
                  <th className="px-4 py-3 text-[12px] uppercase tracking-wider font-semibold text-gray-600">
                    Month
                  </th>
                  <th className="px-4 py-3 text-[12px] uppercase tracking-wider font-semibold text-gray-600">
                    Temperature
                  </th>
                  <th className="px-4 py-3 text-[12px] uppercase tracking-wider font-semibold text-gray-600">
                    Crowd
                  </th>
                  <th className="px-4 py-3 text-[12px] uppercase tracking-wider font-semibold text-gray-600">
                    Experience
                  </th>
                  <th className="px-4 py-3 text-[12px] uppercase tracking-wider font-semibold text-gray-600">
                    Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                {weatherData.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <tr
                      key={item.month}
                      className={`border-t border-[#ece6df] ${
                        idx % 2 === 0 ? "bg-white" : "bg-[#fcfbf9]"
                      }`}
                    >
                      <td className="px-4 py-3 text-[13px] font-medium text-[#2c2c2c]">
                        <span className="flex items-center gap-2">
                          <Icon size={14} className="text-[#c9a45c]" />
                          {item.month}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[13px] text-gray-700">
                        {item.temp}
                      </td>
                      <td className="px-4 py-3 text-[13px] text-gray-700">
                        {item.crowd}
                      </td>
                      <td className="px-4 py-3 text-[13px] text-gray-600">
                        {item.experience}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-3 py-1 rounded-full text-[11px] font-medium ${getBadgeStyles(
                            item.recommendation
                          )}`}
                        >
                          {item.recommendation}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-3">
            {weatherData.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.month}
                  className="border border-[#e7dfd4] rounded-lg p-4 bg-white"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <Icon size={14} className="text-[#c9a45c]" />
                      <span className="font-semibold text-[#2c2c2c]">
                        {item.month}
                      </span>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-medium ${getBadgeStyles(
                        item.recommendation
                      )}`}
                    >
                      {item.recommendation}
                    </span>
                  </div>
                  <div className="text-[12px] text-gray-600 space-y-1">
                    <p><span className="font-medium text-gray-700">Temp:</span> {item.temp}</p>
                    <p><span className="font-medium text-gray-700">Crowd:</span> {item.crowd}</p>
                    <p><span className="font-medium text-gray-700">Experience:</span> {item.experience}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}