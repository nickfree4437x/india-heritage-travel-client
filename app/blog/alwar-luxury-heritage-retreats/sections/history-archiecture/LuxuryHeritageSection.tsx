"use client";

const ticketData = [
  {
    site: "Lake palace",
    indian: "Siliserh Lake Palace, a former royal hunting lodge on Siliserh Lake",
    foreign: "Romantic weekends, sunsets, birdwatchers",
  },
  {
    site: "Hill fort",
    indian: "Hill Fort Kesroli, a 14th-century fort converted into a hotel (opened to guests in 1998)",
    foreign: "Atmosphere seekers, history lovers, photography",
  },
  {
    site: "Fort-palace",
    indian: "Tijara Fort-Palace, a 19th-century property restored as a heritage hotel",
    foreign: "Comfort and polish on a Delhi road trip",
  },
  {
    site: "Forest retreat",
    indian: "Properties near Sariska, plus Sariska Palace subject to current status",
    foreign: "Tiger safari combined with a heritage stay",
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
            Alwar Luxury Heritage Retreats: Where to Stay
          </h2>

          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-gray-700 text-justify">
             And this is the real essence of the journey for many people. The culture of Alwar can be 
             classified into three types, depending upon the type of tourist that visits. Property, 
             price and quality vary, which we always confirm before suggesting.
          </p>

        </div>

        {/* Table */}

        <div className="overflow-x-auto rounded-sm bg-white">

          <table className="min-w-full border-collapse">

            <thead>

              <tr className="bg-[#9A6A2F] text-white">

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Type
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Examples
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Best for
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