"use client";

const ticketData = [
  {
    site: "Location",
    indian: "East Rajasthan, in the Braj region, on the Bhadravati river, a tributary of the Banas",
  },
  {
    site: "Distances (by road)",
    indian: "Karauli is about 160–180 km from Jaipur, 180 km from Agra, 100 km from Sawai Madhopur (Ranthambore), 110 km from Bharatpur, and 290–300 km from Delhi.",
  },
  {
    site: "Known for",
    indian: "City Palace, Madan Mohan Ji Temple, Kaila Devi Temple, Timangarh Fort, Kaila Devi Wildlife Sanctuary",
  },
  {
    site: "Heritage stay",
    indian: "Bhanwar Vilas Palace, a royal-family heritage hotel built in 1938",
  },
  {
    site: "Character",
    indian: "Quiet, devout, local; red sandstone, ravines and Krishna devotion",
  },
  {
    site: "Ideal for",
    indian: "Heritage and temple lovers, offbeat travellers, photographers, and families seeking spiritual travel.",
  },
  {
    site: "Ideal stay",
    indian: "One to two nights, combined with Jaipur, Ranthambore or Agra",
  },
];

export default function TicketPricesSection() {
  return (
    <section className="bg-white py-0 sm:py-4">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}

        <div className="max-w-6xl mb-2 md:mb-4">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1">
            Karauli at a Glance
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