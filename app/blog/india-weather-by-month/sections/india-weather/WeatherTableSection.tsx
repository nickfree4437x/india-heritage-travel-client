"use client";

const ticketData = [
  {
    site: "January",
    indian: "8–20°C, dry",
    foreign: "20–31°C, dry",
    best: "Golden Triangle, Rajasthan"
  },
  {
    site: "February",
    indian: "11–24°C, dry",
    foreign: "22–33°C, dry",
    best: "Heritage touring, gardens in bloom"
  },
  {
    site: "March",
    indian: "16–30°C, warming",
    foreign: "24–34°C, dry",
    best: "Holi festival, early Himalayan trips"
  },
  {
    site: "April",
    indian: "22–36°C, hot",
    foreign: "26–35°C, humid rising",
    best: "Himalayan foothills, hill stations"
  },
  {
    site: "May",
    indian: "26–41°C, very hot",
    foreign: "27–36°C, pre-monsoon",
    best: "Ladakh opens, Himachal & Sikkim"
  },
  {
    site: "June",
    indian: "28–40°C, monsoon arrives north",
    foreign: "24–31°C, monsoon begins",
    best: "Kerala monsoon experiences begin"
  },
  {
    site: "July",
    indian: "26–35°C, monsoon",
    foreign: "23–29°C, heavy monsoon",
    best: "Western Ghats waterfalls"
  },
  {
    site: "August",
    indian: "26–34°C, monsoon",
    foreign: "23–29°C, monsoon",
    best: "Lush Kerala backwaters"
  },
  {
    site: "September",
    indian: "25–34°C, monsoon ",
    foreign: "23–30°C, monsoon easing",
    best: "Transitional, fewer "
  },
  {
    site: "October",
    indian: "20–33°C, clearing",
    foreign: "23–31°C, clearing",
    best: "Post-monsoon touring, Diwali"
  },
  {
    site: "November",
    indian: "13–27°C, cool & dry",
    foreign: "22–31°C, dry",
    best: "Ideal all-round travel month"
  },
  {
    site: "December",
    indian: "8–21°C, cool & dry",
    foreign: "20–30°C, dry",
    best: "Peak season, Christmas & New Year"
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           India Weather by Month: Quick Reference Table
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
          This table, roughly sketches typical conditions in North India (Delhi/Rajasthan) and South India 
          (Kerala/Tamil Nadu) for each month, basically at the two ends of India’s climate spectrum or 
          something similar. It’s kind of a broad picture… you know.
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
                  North India (avg.) 
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  South India (avg.)
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