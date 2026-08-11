"use client";

const ticketData = [
  {
    site: "Budget / Backpacker",
    indian: "$25–45 (₹2,100–3,800)",
    foreign: "$250–450",
  },
  {
    site: "Mid-Range Comfort",
    indian: "$70–120 (₹5,900–10,000)",
    foreign: "$700–1,200",
  },
  {
    site: "Luxury / Heritage",
    indian: "$250–500+ (₹21,000–42,000+)",
    foreign: "$2,500–5,000+",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Quick Answer: How Much Does a Trip to India Cost?
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
          The quick India travel cost guide, basically: most international travelers end up spending anywhere 
          from $30 to $500 per person, per day, depending on how you move through things - and that big gap 
          between those amounts comes mostly from where you sleep and how you commute, not from meals or entry 
          fees, which stay pretty much the same no matter what budget you pick.
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm bg-white">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#9A6A2F] text-white">
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Travel Style
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Per Day (Per Person)
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  10-Day Trip Estimate*
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

        <p className="text-gray-700 mt-2 leading-relaxed text-[11px] sm:text-[12px] md:text-[13px] font-light text-justify mb-2 md:mb-3">
          *Excludes international flights and visa fees; based on two people sharing accommodation.
        </p>

      </div>
    </section>
  );
}