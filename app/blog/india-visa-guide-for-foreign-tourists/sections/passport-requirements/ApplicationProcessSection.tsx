"use client";

const ticketData = [
  {
    site: "e-Tourist Visa (30-day)",
    indian: "30 days",
    foreign: "US $10 (Apr–Jun) / US $25 (rest of year)",
  },
  {
    site: "e-Tourist Visa (1-year)",
    indian: "1 year, multiple entry",
    foreign: "US $40",
  },
  {
    site: "e-Tourist Visa (5-year)",
    indian: "5 years, multiple entry",
    foreign: "US $80",
  },
  {
    site: "e-Business Visa (1-year)",
    indian: "1 year, multiple entry",
    foreign: "US $120",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-1.5 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           India Visa Fees and Processing Time (2026)
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
          In 2026 India shifted to a sort of “reciprocal pricing” approach for parts of its e-Visa fee 
          structure, so a few categories can now shift depending on the traveller’s nationality  based 
          on what their home country charges Indian citizens. For most people the usual tourist costs 
          stay pretty much the same, but the business class fees and the longer-validity options, have 
          climbed quite a bit for several specific countries. Still, double check the exact amount you 
          owe on the official fee schedule before you pay, because the payment is non-refundable no matter 
          how things go.
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm bg-white">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#9A6A2F] text-white">
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Visa Type
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Duration
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Standard Fee*
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

        <p className="text-gray-700 mt-2 leading-relaxed text-[11px] sm:text-[12px] md:text-[13px] font-light text-justify">
          *Fees are indicative as of 2026 and subject to change without notice; a card-processing surcharge 
          of approximately 2.5–3% applies to every online payment. Confirm your nationality's exact fee on 
          indianvisaonline.gov.in before you pay.
        </p>

      </div>
    </section>
  );
}