"use client";

const ticketData = [
  {
    site: "Location",
    indian: "Eastern Rajasthan, near the Madhya Pradesh and Uttar Pradesh borders, about 4 km from the Chambal River.",
  },
  {
    site: "Distance from Agra",
    indian: "Roughly an hour by road; Agra is the nearest major airport and a natural base",
  },
  {
    site: "Known for",
    indian: "Raj Niwas Palace, Babur's Lotus Garden, Machkund Temple, Shergarh Fort, Talab-e-Shahi, red sandstone, Chambal safaris",
  },
  {
    site: "Heritage stay",
    indian: "Raj Niwas Palace, a restored royal residence with heritage suites and villas",
  },
  {
    site: "Character",
    indian: "Quiet, rural, riverine; palace comfort and wild landscape",
  },
  {
    site: "Ideal for",
    indian: "Heritage lovers, wildlife and birdwatching enthusiasts, couples, Agra-based travellers seeking an offbeat day or night",
  },
  {
    site: "Ideal stay",
    indian: "One to two nights, often combined with Agra, Bharatpur or Karauli",
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
            Dholpur at a Glance
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