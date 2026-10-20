"use client";

const ticketData = [
  {
    site: "8:00 AM",
    indian: "Private chauffeur pick-up from your Jodhpur hotel",
  },
  {
    site: "9:30 AM",
    indian: "Southern group: Harihara temples, Vishnu and Shiva shrines, Sun Temple",
  },
  {
    site: "11:00 AM",
    indian: "Katan Baori step-well with your guide",
  },
  {
    site: "12:00 PM",
    indian: "Sachiya Mata Temple and the hilltop view",
  },
  {
    site: "1:15 PM",
    indian: "Lunch at a trusted local restaurant or camp",
  },
  {
    site: "4:00 PM",
    indian: "Sunset camel or jeep safari, followed by tea on the dunes",
  },
  {
    site: "6:30 PM",
    indian: "Return to Jodhpur",
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
             One-Day Osian Itinerary from Jodhpur
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
          Two-Day Heritage and Desert Escape (Recommended)
        </h2>

        {/* Content - List Format */}
        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 1. Depart Jodhpur mid-morning for Osian. Visit the Mahavira and Sachiya Mata temples, lunch, then check into a luxury desert camp. Enjoy a sunset safari, a private dinner and folk music under the stars.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Day 2.  Early morning visit to the southern temple cluster. Back for breakfast, explore the art of the local craftsman's house, and drive back to Jodhpur or travel further to Jaisalmer.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}