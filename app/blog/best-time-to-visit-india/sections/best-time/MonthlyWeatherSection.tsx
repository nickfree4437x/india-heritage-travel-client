"use client";

const ticketData = [
  {
    site: "January",
    indian: "Winter",
    foreign: "Cool, dry; occasional Delhi fog",
    best: "Rajasthan, Golden Triangle, Kerala"
  },
  {
    site: "February",
    indian: "Winter",
    foreign: "Mild, clear, low humidity",
    best: "Best all-round month; heritage tours"
  },
  {
    site: "March",
    indian: "Late winter / spring",
    foreign: "Warming; Holi festival",
    best: "Central India, wildlife safaris, Holi"
  },
  {
    site: "April",
    indian: "Summer begins",
    foreign: "Hot in plains, pleasant in hills",
    best: "Hill stations; shoulder-season value"
  },
  {
    site: "May",
    indian: "Peak summer",
    foreign: "Very hot in plains; Ladakh opens",
    best: "Ladakh, Himachal, Uttarakhand"
  },
  {
    site: "June",
    indian: "Monsoon arrives (south)",
    foreign: "Humid; rains begin in Kerala",
    best: "Kerala wellness retreats begin"
  },
  {
    site: "July",
    indian: "Monsoon",
    foreign: "Heavy rains; lush landscapes",
    best: "Ayurveda, Meghalaya, Western Ghats"
  },
  {
    site: "August",
    indian: "Monsoon",
    foreign: "Rains continue; Onam festival",
    best: "Wellness travel; off-season value"
  },
  {
    site: "September",
    indian: "Monsoon retreats",
    foreign: "Rains ease; humidity lingers",
    best: "Transition month; fewer crowds"
  },
  {
    site: "October",
    indian: "Shoulder season",
    foreign: "Clearing skies; Diwali season",
    best: "Best value; heritage circuits reopen"
  },
  {
    site: "November",
    indian: "Peak season begins",
    foreign: "Cool, dry, festival-rich",
    best: "Golden Triangle, Rajasthan, safaris"
  },
  {
    site: "December",
    indian: "Peak winter",
    foreign: "Cold nights, clear days, festival",
    best: "Rajasthan, Kerala, Goa; luxury peak"
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Month-by-Month Weather in India
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
          A quick-reference guide to India weather by month - use it alongside the regional breakdown above 
          to pinpoint your ideal travel window.
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm bg-white">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#9A6A2F] text-white">
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Month
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Season
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Typical Conditions
                </th>
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Best For
                </th>
              </tr>
            </thead>
            <tbody>

              {ticketData.map((item, index) => (

                <tr
                  key={item.site}
                  className={`border-b border-[#eee3d7] hover:bg-[#faf6f1] transition ${
                    index % 2 === 0 ? "bg-white" : "bg-[#fcfbf9]"
                  }`}
                >
                  <td className="px-6 py-3 text-[12px] md:text-[13px] font-light text-[#2c2c2c] whitespace-nowrap">
                    {item.site}
                  </td>

                  <td className="px-6 py-3 text-[12px] md:text-[13px] font-light text-gray-700 whitespace-nowrap">
                    {item.indian}
                  </td>

                  <td className="px-6 py-3 text-[12px] md:text-[13px] font-light text-gray-700 whitespace-nowrap">
                    {item.foreign}
                  </td>

                  <td className="px-6 py-3 text-[12px] md:text-[13px] font-light text-gray-700 whitespace-nowrap">
                    {item.best}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}