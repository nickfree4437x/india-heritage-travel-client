"use client";

const bestTimeData = [
  {
    month: "January",
    weather: "Cool, 8–22°C, occasional Delhi fog",
    recommendation: "Excellent - peak season, book ahead",
    status: "excellent",
  },
  {
    month: "February",
    weather: "Mild, 12–25°C",
    recommendation:
      "Excellent - ideal balance of comfort and lighter crowds",
    status: "excellent",
  },
  {
    month: "March",
    weather: "Warming, 17–32°C",
    recommendation:
      "Good - Holi festival falls here, but afternoons get warm",
    status: "good",
  },
  {
    month: "April",
    weather: "Hot, 22–38°C",
    recommendation:
      "Caution - only for early morning/evening touring",
    status: "caution",
  },
  {
    month: "May",
    weather: "Very hot, 27–42°C",
    recommendation:
      "Avoid for outdoor sightseeing - extreme heat",
    status: "avoid",
  },
  {
    month: "June",
    weather: "Hot, pre-monsoon, 28–41°C",
    recommendation:
      "Avoid - extreme heat persists until monsoon arrives",
    status: "avoid",
  },
  {
    month: "July",
    weather: "Monsoon, humid, 26–35°C",
    recommendation:
      "Fair - fewer crowds, lush landscapes, but rain may disrupt plans",
    status: "good",
  },
  {
    month: "August",
    weather: "Monsoon continues, 26–34°C",
    recommendation: "Fair - similar to July",
    status: "good",
  },
  {
    month: "September",
    weather: "Post-monsoon, cooling, 24–34°C",
    recommendation:
      "Good - improving conditions toward month's end",
    status: "good",
  },
  {
    month: "October",
    weather: "Pleasant, 18–32°C",
    recommendation:
      "Excellent - Diwali season, comfortable touring",
    status: "excellent",
  },
  {
    month: "November",
    weather: "Cool, 12–28°C",
    recommendation:
      "Excellent - among the best months overall",
    status: "excellent",
  },
  {
    month: "December",
    weather: "Cool, 7–23°C",
    recommendation:
      "Excellent - peak season, occasional cold mornings in Delhi",
    status: "excellent",
  },
];

export default function BestTimeToVisit() {
  const getBadgeClasses = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-green-50 text-green-700 border border-green-100";

      case "good":
        return "bg-amber-50 text-amber-700 border border-amber-100";

      case "caution":
        return "bg-orange-50 text-orange-700 border border-orange-100";

      case "avoid":
        return "bg-red-50 text-red-700 border border-red-100";

      default:
        return "bg-gray-50 text-gray-700 border border-gray-100";
    }
  };

  return (
    <section className="mb-10 w-full bg-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-bold mb-2">
            Best Time To Visit
        </h2>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-6">
            The Golden Triangle can be visited throughout the year,
            but weather conditions vary significantly by season.
            This month-by-month guide will help you choose the ideal
            time for comfortable sightseeing and memorable travel experiences.
        </p>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-md">

            <table className="w-full border-collapse">

            <thead>
                <tr className="bg-[#f8f5f1]">

                <th className="px-5 py-4 text-left text-[13px] font-semibold text-[#2c2c2c] border-b border-[#e8dfd4]">
                    Month
                </th>

                <th className="px-5 py-4 text-left text-[13px] font-semibold text-[#2c2c2c] border-b border-[#e8dfd4]">
                    Weather
                </th>

                <th className="px-5 py-4 text-left text-[13px] font-semibold text-[#2c2c2c] border-b border-[#e8dfd4]">
                    Recommendation
                </th>

                </tr>
            </thead>

            <tbody>

                {bestTimeData.map((item) => (
                <tr
                    key={item.month}
                    className="hover:bg-[#faf8f5] transition-colors duration-200"
                >

                    <td className="px-5 py-4 border-b border-[#f0ebe5] text-[13px] text-[#2c2c2c]">
                    {item.month}
                    </td>

                    <td className="px-5 py-4 border-b border-[#f0ebe5] text-[13px] text-gray-600">
                    {item.weather}
                    </td>

                    <td className="px-5 py-4 border-b border-[#f0ebe5]">

                    <span
                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-[11px] ${getBadgeClasses(
                        item.status
                        )}`}
                    >
                        {item.recommendation}
                    </span>

                    </td>

                </tr>
                ))}

            </tbody>

            </table>

        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">

            {bestTimeData.map((item) => (
            <div
                key={item.month}
                className="rounded-md border border-gray-200 p-4 bg-white"
            >

                <div className="flex items-center justify-between mb-3">

                <h3 className="text-[13px] text-[#2c2c2c]">
                    {item.month}
                </h3>

                <span
                    className={`px-2.5 py-1 rounded-full text-[10px] ${getBadgeClasses(
                    item.status
                    )}`}
                >
                    {item.status.toUpperCase()}
                </span>

                </div>

                <p className="text-[12px] text-gray-700 leading-relaxed mb-2">
                <span className="text-[#2c2c2c]">
                    Weather:
                </span>{" "}
                {item.weather}
                </p>

                <p className="text-[12px] text-gray-700 leading-relaxed">
                <span className=" text-[#2c2c2c]">
                    Recommendation:
                </span>{" "}
                {item.recommendation}
                </p>

            </div>
            ))}

        </div>
      </div>

    </section>
  );
}