"use client";

const ticketData = [
  {
    site: "7:30 AM",
    indian: "Private chauffeur pick-up from your Agra hotel",
  },
  {
    site: "9:00 AM",
    indian: "Babur's Lotus Garden",
  },
  {
    site: "10:30 AM",
    indian: "Machkund Temple and lily pond",
  },
  {
    site: "12:30 PM",
    indian: "Lunch at Raj Niwas Palace (arranged in advance)",
  },
  {
    site: "2:30 PM",
    indian: "Chambal boat safari for gharials and birds",
  },
  {
    site: "5:00 PM",
    indian: "Tea overlooking the river; return to Agra",
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
             One-Day Dholpur Itinerary from Agra
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[14px] md:text-[16px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
        ">
          Two-Day Palace and River Escape (Recommended)
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 1. Arrive by noon, visit Babur’s Garden and Machkund and check into Raj Niwas Palace. Take a walk and have a candlelight dinner.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 2. A dawn Chambal boat safari, breakfast, then Talab-e-Shahi or Shergarh with a guide. Continue to Karauli, Bharatpur or Jaipur, or return to Agra.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}