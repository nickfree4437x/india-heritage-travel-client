"use client";

const ticketData = [
  {
    site: "Day 1 – Arrive in Assam",
    indian: "Travel to Guwahati and take your guide and then drive ahead to either Jorhat or Sivasagar as per your flight timings.",
    indian2: "Jorhat / Sivasagar"
  },
  {
    site: "Day 2 – Sivasagar’s royal city",
    indian: "The day should be spent in leisure with a sumptuous Assamese dinner.",
    indian2: "Sivasagar"
  },
  {
    site: "Day 3 – Charaideo Moidams",
    indian: "Travel to Charaideo; spend unhurried time at the UNESCO-listed Moidams, following conservation guidance. Return via rural landscapes and local food stops.",
    indian2: "Sivasagar"
  },
  {
    site: "Day 4 – Jorhat and living traditions",
    indian: "Explore Jorhat’s tea heritage or arrange a visit to a Majuli satra and craft community if ferry schedules and conditions allow.",
    indian2: "Jorhat"
  },
  {
    site: "Day 5 – Departure",
    indian: "Transfer to Jorhat or Guwahati airport according to flight schedule. Add a buffer for road conditions and flight connections.",
    indian2: "—"
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
            A five-day Ahom heritage itinerary in Assam
          </h2>

        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm bg-white mb-4 md:mb-5">

          <table className="min-w-full border-collapse">

            <thead>

              <tr className="bg-[#9A6A2F] text-white">

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Day
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Suggested programme
                </th>
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Overnight
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