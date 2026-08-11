"use client";

const ticketData = [
  {
    site: "Accommodation (mid-range/boutique)",
    foreign: "$420–630",
  },
  {
    site: "Private car & driver (sedan, full circuit)",
    foreign: "$300–380",
  },
  {
    site: "Meals & dining",
    foreign: "$210–350",
  },
  {
    site: "Entry fees & guides",
    foreign: "$120–180",
  },
  {
    site: "Visas (30-day e-Visa, both travelers)",
    foreign: "$20–80",
  },
  {
    site: "SIM cards, tips, incidentals",
    foreign: "$60–100",
  },
  {
    site: "Estimated 7-day total (2 people)",
    foreign: "$1,130–1,720",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Sample 7-Day Golden Triangle Cost Breakdown
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
          To make these numbers concrete, here's a realistic mid-range, two-person budget for a classic 
          7-day Delhi–Agra–Jaipur trip, excluding international flights.
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm bg-white mb-2 md:mb-6">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#9A6A2F] text-white">
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Category
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Estimated Cost (2 People, 7 Days)
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