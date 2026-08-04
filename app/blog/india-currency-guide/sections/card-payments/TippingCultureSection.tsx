"use client";

const ticketData = [
  {
    site: "Backpacker",
    indian: "₹2,000–₹4,000",
    foreign: "Budget stays, street food, public transport",
  },
  {
    site: "Mid-range",
    indian: "₹6,000–₹12,000",
    foreign: "3-star hotels, restaurant meals, private cabs",
  },
  {
    site: "Luxury (India Heritage Travel style)",
    indian: "₹20,000+",
    foreign: "Heritage hotels/palaces, private chauffeur",
  },
];

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Tipping Culture in India
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            In India, tipping feels customary more than mandatory, and it’s mostly done in cash, like basically 
            all the time. As a loose for 2026 kind of guide: ₹50–₹100 for a hotel bellhop, ₹100–₹300 per day for 
            a private driver or guide, and for restaurants try 10% only if there isn’t already some service charge. 
            For small help, like a shoe-minder at a temple, it’s often ₹20–₹50. Keeping a little stack of ₹50 and 
            ₹100 notes, specifically for tipping, helps avoid those awkward “do you have change” moments.  
          </p>
        </div>

        <div className="mb-2 md:mb-3">
          <h2 className="text-[14px] sm:text-[18px] md:text-[20px] font-semibold text-[#2c2c2c] tracking-wide">
            Daily Travel Budget by Travel Style
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm bg-white">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#9A6A2F] text-white">
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Travel Style
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Approx. Daily Budget 
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                 What It Typically Covers
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