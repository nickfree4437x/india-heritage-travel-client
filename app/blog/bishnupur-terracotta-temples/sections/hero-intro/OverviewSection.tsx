"use client";

const ticketData = [
  {
    site: "Location",
    indian: "Bankura district, West Bengal, in the Rarh region west of the Damodar",
  },
  {
    site: "From Kolkata",
    indian: "About 135 km; roughly 3.5 hours by road or 3.5 hours by direct train from Howrah",
  },
  {
    site: "Known for",
    indian: "Terracotta temples, Rasmancha, Jor Bangla, Dalmadal Cannon, Baluchari silk, terracotta horses",
  },
  {
    site: "Built by",
    indian: "The Malla dynasty, mainly in the 17th century, under Mughal-era patronage",
  },
  {
    site: "Character",
    indian: "Quiet, small-town, walkable; devotional and artisan-led",
  },
  {
    site: "Ideal for",
    indian: "Architecture, photography, textile and craft enthusiasts, culturally curious couples and families",
  },
  {
    site: "Ideal stay",
    indian: "One long day or, better, one night",
  },
];

export default function TicketPricesSection() {
  return (
    <section className="bg-white py-0 sm:py-4">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}

        <div className="max-w-6xl mb-1 md:mb-2">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1">
          Bishnupur at a Glance
          </h2>

        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm bg-white">

          <table className="min-w-full border-collapse">

            <thead>

              <tr className="bg-[#9A6A2F] text-white">

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Detail
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  What to know
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
                </tr>

              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}