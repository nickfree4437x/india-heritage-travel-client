"use client";

const ticketData = [
  {
    site: "6:00 AM",
    indian: "Private chauffeur departure from Kolkata (or from Berhampore at 8:30 AM)",
  },
  {
    site: "10:00 AM",
    indian: "Hazarduari Palace museum",
  },
  {
    site: "12:00 PM",
    indian: "Nizamat Imambara, Medina Masjid and clock tower",
  },
  {
    site: "1:00 PM",
    indian: "Lunch arranged in advance",
  },
  {
    site: "2:30 PM",
    indian: "Katra Mosque and Kathgola gardens",
  },
  {
    site: "4:30 PM",
    indian: "Motijheel at golden hour",
  },
  {
    site: "5:30 PM",
    indian: "Return journey",
  },
];

export default function TicketPricesSection() {
  return (
    <section className="bg-white py-0 sm:py-2">
      <div className="max-w-6xl mx-auto px-4 md:px-7">

        {/* Heading */}

        <div className="max-w-6xl mb-1 md:mb-2">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1">
            Suggested Itineraries
          </h2>

          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-gray-700 text-justify">
             One-Day Murshidabad Itinerary
          </p>

        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm bg-white mb-4 md:mb-5">

          <table className="min-w-full border-collapse">

            <thead>

              <tr className="bg-[#9A6A2F] text-white">

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Time
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Plan
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