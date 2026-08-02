"use client";

const ticketData = [
  {
    site: "Airtel/Jio entry tourist plan",
    indian: "₹300–₹400 (~$4–$5)",
    foreign: "1.5–2.5GB/day",
  },
  {
    site: "Airtel/Jio extended plan",
    indian: "Higher, still budget-friendly",
    foreign: "2GB+/day",
  },
  {
    site: "eSIM - capped bundle",
    indian: "$2–$10",
    foreign: "A few GB total",
  },
  {
    site: "eSIM - unlimited daily rate",
    indian: "$40–$75",
    foreign: "Unlimited (fair use)",
  },
];

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 md:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Data Plans & Pricing
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            So as a kind of rough 2026 benchmark, entry level tourist SIM plans on Airtel and Jio they usually 
            start around ₹300–₹400, like about $4–$5, for 28–30 days. Most of the time they toss in roughly 
            1.5–2.5GB of data each day, plus unlimited local calls, and something like 100 SMS per day , give 
            or take. Then the higher tier ones, say 2GB per day and up, with longer validity, like 56–90 days, 
            cost a bit more but it’s still pretty cheap compared to international prices.    
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm bg-white">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#9A6A2F] text-white">
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Plan Type
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Typical Price
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Data
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}