"use client";

const ticketData = [
  {
    site: "Solo adult (30–50), standard plan",
    indian: "10–14 days",
    foreign: "USD 25 – 45",
  },
  {
    site: "Couple, comprehensive plan",
    indian: "14 days",
    foreign: "USD 60 – 110 combined",
  },
  {
    site: "Family of four, floater plan",
    indian: "14 days",
    foreign: "USD 120 – 220",
  },
  {
    site: "Senior citizen (65+)",
    indian: "10–14 days",
    foreign: "USD 70 – 160",
  },
  {
    site: "Business / luxury traveller, premium plan",
    indian: "7–10 days",
    foreign: "USD 50 – 120",
  },
];

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 md:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            How Much Does Travel Insurance for India Cost?
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            Pricing is kinda tied to your age, how long the trip is, your sum insured and the home country 
            too, but as a rough sort of rule of thumb, comprehensive cover for a healthy adult usually 
            comes out to about USD 1–3 each day of travel. So it’s a modest line item really, especially 
            when you compare it against the overall cost of a luxury heritage itinerary.  
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm bg-white">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#9A6A2F] text-white">
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Traveller Profile
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Typical Trip Length
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  WIndicative Cost Range (USD)
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