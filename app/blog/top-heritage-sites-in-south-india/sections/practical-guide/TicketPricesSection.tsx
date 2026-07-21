"use client";

const ticketData = [
  {
    site: "Hampi Group of Monuments, Karnataka",
    indian: "₹40",
    foreign: "₹600",
  },
  {
    site: "Pattadakal Group of Monuments, Karnataka",
    indian: "₹40",
    foreign: "₹600",
  },
  {
    site: "Mahabalipuram Group of Monuments, Tamil Nadu",
    indian: "₹40",
    foreign: "₹600",
  },
  {
    site: "Brihadeeswarar Temple, Thanjavur",
    indian: "free",
    foreign: "free",
  },
  {
    site: "Mysore Palace, Karnataka",
    indian: "₹70–100",
    foreign: "₹200–250",
  },
  {
    site: "Golconda Fort, Hyderabad",
    indian: "₹25–30",
    foreign: "₹300",
  },
  {
    site: "Charminar, Hyderabad",
    indian: "₹25",
    foreign: "₹300",
  },
  {
    site: "Ramappa Temple, Telangana",
    indian: "₹25–35",
    foreign: "₹300–350",
  },
  {
    site: "Mattancherry Palace, Kochi",
    indian: "₹₹5–35",
    foreign: "₹300",
  },
];

export default function TicketPricesSection() {
  return (
    <section className="bg-white py-4 sm:py-0">
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}

        <div className="max-w-6xl mb-2 md:mb-4">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1">
            Ticket Prices at a Glance
          </h2>

          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-gray-700 text-justify">
            Approximate entry fees across the region's major heritage sites, current as of 2026. Rates 
            change periodically, so always confirm on the official ASI or state tourism booking portal 
            before you travel.
          </p>

        </div>

        {/* Table */}

        <div className="overflow-x-auto rounded-sm bg-white">

          <table className="min-w-full border-collapse">

            <thead>

              <tr className="bg-[#9A6A2F] text-white">

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Heritage Site
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Indian Nationals
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Foreign Nationals
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