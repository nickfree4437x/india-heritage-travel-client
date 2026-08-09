"use client";

const ticketData = [
  {
    site: "Holi",
    indian: "March",
    foreign: "North India, especially Rajasthan & Uttar Pradesh",
  },
  {
    site: "Summer hill season",
    indian: "April – June",
    foreign: "Himachal Pradesh, Ladakh, Sikkim",
  },
  {
    site: "Onam",
    indian: "August – September",
    foreign: "Kerala",
  },
  {
    site: "Diwali",
    indian: "October – November",
    foreign: "Nationwide, especially North India",
  },
  {
    site: "Winter heritage season",
    indian: "December – February",
    foreign: "Rajasthan & the Golden Triangle",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
            Should You Travel to India During Monsoon?
          </h2>
        </div>
        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            Monsoon travel is way more workable than the reputation says, if you pick the correct region. 
            Rajasthan and the desert states are honestly challenging in full monsoon, but Kerala, Goa, and 
            the Western Ghats are arguably at their most beautiful, lush and dramatic, and also far less 
            crowded. You’ll often see lower prices on luxury stays too. The trick is flexibility, don’t 
            lock in too many fixed outdoor plans, choose lodging with covered areas, and try to see those 
            quick heavy downpours as a feature, not a problem.
        </p>

        {/* Header */}
        <div className="mb-2 sm:mb-2">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
            Festival & Seasonal Travel Calendar
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm bg-white">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#9A6A2F] text-white">
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Festival
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Typical Timing 
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Best Region to Experience It
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