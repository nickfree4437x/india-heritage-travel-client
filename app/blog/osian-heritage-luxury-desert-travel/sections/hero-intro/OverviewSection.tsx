"use client";

const ticketData = [
  {
    site: "Location",
    indian: "Jodhpur district, Rajasthan, on the Jodhpur to Phalodi and Jaisalmer corridor; roughly 65 km (about 1 to 1.5 hours) north of Jodhpur",
  },
  {
    site: "Known for",
    indian: "Around 15 to 18 surviving temples from the 8th to 12th centuries, Hindu and Jain, in Gurjara-Pratihara style",
  },
  {
    site: "Headline sites",
    indian: "Mahavira Jain Temple, Sachiya Mata Temple, Surya (Sun) Temple, Harihara temples, Pipla Devi Temple, Katan Baori step-well",
  },
  {
    site: "Desert experience",
    indian: "Camel and jeep safaris over scrub dunes, luxury tented camps, folk music evenings",
  },
  {
    site: "Ideal for",
    indian: "Heritage lovers, architecture and photography enthusiasts, couples, solo women travellers, slow-travel families",
  },
  {
    site: "Ideal stay",
    indian: "One day at minimum; one night in the desert is strongly recommended",
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
          Osian at a Glance
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