"use client";

const ticketData = [
  {
    site: "Day 1 morning",
    indian: "Start from Pattanam with a pre-booked guide/local expert.",
    indian2: "Introduction of archaeological finds and the issue of locating Muziris of the past."
  },
  {
    site: "Day 1 afternoon",
    indian: " Visit some of the sites of Muziris Heritage Project, depending upon the openings/access.",
    indian2: "Connects excavations with the wider region’s layered history."
  },
  {
    site: "Day 1 evening",
    indian: " Stay at a good heritage boutique hotel in the larger Kochi region.",
    indian2: "Allows time to unwind and enjoy Kerala’s cuisine."
  },
  {
    site: "Day 2 morning",
    indian: "Explore Kochi with a guided tour, with an emphasis on the layers of interaction with the port city in its later history.",
    indian2: "Illustration of maritime links that developed through time."
  },
  {
    site: "Day 2 afternoon",
    indian: "Have some leisure time for the backwaters or waterfront visit with a responsible agency/local museum.",
    indian2: "Location of the history within the present-day coastal landscape."
  },
];

export default function TicketPricesSection() {
  return (
    <section className="bg-white py-2 sm:py-3">
      <div className="max-w-6xl mx-auto px-4 md:px-7">

        {/* Heading */}

        <div className="max-w-6xl mb-1 md:mb-2">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1">
            Suggested itinerary: two days around Kerala’s maritime heritage
          </h2>

        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm bg-white mb-4 md:mb-5">

          <table className="min-w-full border-collapse">

            <thead>

              <tr className="bg-[#9A6A2F] text-white">

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Day / time
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Plan
                </th>
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Why it works
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
                    {item.indian2}
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