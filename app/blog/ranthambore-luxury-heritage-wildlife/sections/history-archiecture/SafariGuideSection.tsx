"use client";

const ticketData = [
  {
    site: "1 Oct to 31 Jan",
    indian: "6:30 to 10:00 AM",
    indians: "2:30 to 6:00 PM"
  },
  {
    site: "2:30 to 6:00 PM",
    indian: "6:00 to 9:30 AM",
    indians: "3:00 to 6:30 PM"
  },
  {
    site: "1 Apr to 30 Jun",
    indian: "5:30 to 9:00 AM",
    indians: "3:30 to 7:00 PM"
  },
];

export default function SafariSection() {
  return (
    <section className="bg-white py-2 sm:py-4">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="max-w-6xl mb-1 md:mb-2">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1">
            Ranthambore Safari Guide: Zones, Timings and Booking
          </h2>
        </div>

        {/* Table */}

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
          There are a total of ten safari zones in the park. The safari zones 1-5 constitute the main 
          zones with higher density of tigers, while safari zones 6-10 constitute the buffer zones with 
          reduced costs of permits and reduced number of vehicles. Zone 1 has the fort background and 
          Padam Talao, Zone 2 has Raj Bagh, Zone 3 has Malik Talao and thick forest, Zone 4 has Kachida 
          valley (leopard and sloth bear zone), and Zone 5 has open grasslands. All zones and their 
          routes are allocated through the booking process.
        </p>

        <div className="overflow-x-auto rounded-sm bg-white mb-2 md:mb-3">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#9A6A2F] text-white">
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Period
                </th>
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Morning safari
                </th>
                 <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Evening safari
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
                    {item.indians}
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          Timings shift by season and can be revised, so confirm before you travel.
        </p>

        <div className="space-y-2 text-gray-700">
          <ul className="space-y-2 pl-0">
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Gypsy (open jeep). Accommodates six people, easy to move around and suitable for taking photos.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Canter (open bus). Accommodates twenty people, affordable price per person but less mobility.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Permit booking. Permits are issued via the official Rajasthan wildlife website, said to open about 90 days before, with the need to provide your ID or passport information. Private agencies and hotels can assist you but make sure you have a real permit.
            </li>
            <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
              <span className="font-light">•</span> Price. Prices vary depending on category and nationality of passengers and fluctuate from time to time; the fee for a guide is included.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}