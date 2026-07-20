"use client";

const ticketData = [
  {
    site: "Taj Mahal, Agra",
    indian: "₹50 + ₹200 (Mausoleum)",
    foreign: "₹1,300",
  },
  {
    site: "Agra Fort",
    indian: "₹40",
    foreign: "₹550",
  },
  {
    site: "Fatehpur Sikri",
    indian: "₹35",
    foreign: "₹550",
  },
  {
    site: "Red Fort, Delhi",
    indian: "₹35",
    foreign: "₹500–550",
  },
  {
    site: "Humayun's Tomb, Delhi",
    indian: "₹35",
    foreign: "₹550",
  },
  {
    site: "Qutub Minar, Delhi",
    indian: "₹35",
    foreign: "₹550",
  },
  {
    site: "Amber Fort, Jaipur",
    indian: "₹200",
    foreign: "₹700",
  },
  {
    site: "City Palace, Jaipur",
    indian: "₹200–700 (By Zone)",
    foreign: "Up to ₹3,000",
  },
  {
    site: "Jantar Mantar, Jaipur",
    indian: "₹50",
    foreign: "₹200",
  },
  {
    site: "Mehrangarh Fort, Jodhpur",
    indian: "₹100–130",
    foreign: "₹600–700",
  },
  {
    site: "Golden Temple, Amritsar",
    indian: "Free",
    foreign: "Free",
  },
  {
    site: "Varanasi Ghats",
    indian: "Free (Boat Extra)",
    foreign: "Free (Boat Extra)",
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
            The table below provides approximate entry fees for some of North
            India's most popular heritage attractions. Ticket prices may change
            periodically, so it's always advisable to confirm the latest rates
            on the official Archaeological Survey of India (ASI) or respective
            state tourism websites before your visit.
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

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
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