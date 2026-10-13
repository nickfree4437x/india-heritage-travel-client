"use client";

const ticketData = [
  {
    site: "7:30 AM",
    indian: "Private chauffeur pick-up from your hotel",
  },
  {
    site: "11:00 AM",
    indian: "City Palace: Diwan-i-Aam, Rang Mahal and terrace",
  },
  {
    site: "12:30 PM",
    indian: "Madan Mohan Ji Temple",
  },
  {
    site: "1:30 PM",
    indian: "Lunch at a trusted local venue or the heritage hotel",
  },
  {
    site: "3:00 PM",
    indian: "SDrive to Kaila Devi Temple (about 23 km)",
  },
  {
    site: "5:00 PM",
    indian: "Aarti and sunset in the hills; return journey",
  },
];

export default function TicketPricesSection() {
  return (
    <section className="bg-white py-0 sm:py-0">
      <div className="max-w-6xl mx-auto px-4 md:px-7">

        {/* Heading */}

        <div className="max-w-6xl mb-2 md:mb-4">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1">
            Suggested Itineraries
          </h2>

          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-gray-700 text-justify">
             One-Day Karauli Itinerary from Jaipur or Sawai Madhopur
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
          Two-Day Heritage and Temple Escape (Recommended)
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 1: Arrive in the morning and visit the City Palace and old city and join the evening Aarti ceremony at Madan Mohan Ji. Accommodation will be at a heritage royal hotel.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 2: In the morning visit Kaila Devi and include Timangarh or the wildlife sanctuary guided tour, and proceed to Ranthambore, Jaipur or Agra.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}