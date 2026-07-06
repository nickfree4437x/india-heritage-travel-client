"use client";

const budgetData = [
  {
    category: "Daily Rate (Luxury / Person)",
    goldenTriangle: "USD 200–350",
    rajasthan: "USD 250–450",
  },
  {
    category: "Typical Private Tour",
    goldenTriangle: "USD 1,800–3,000 (7 Days)",
    rajasthan: "USD 2,800–5,000 (10 Days)",
  },
  {
    category: "Palace Hotel Upgrade",
    goldenTriangle: "Moderate (Luxury options in Jaipur)",
    rajasthan: "Extensive (3–4 palace stays possible)",
  },
  {
    category: "Major Monument Entry Fees",
    goldenTriangle:
      "Taj Mahal, Agra Fort, Amber Fort & Fatehpur Sikri",
    rajasthan:
      "Mehrangarh Fort, Jaisalmer Fort, City Palace & Kumbhalgarh",
  },
  {
    category: "Signature Add-ons",
    goldenTriangle:
      "Ranthambore Safari (+USD 100–200/day)",
    rajasthan:
      "Desert Camp, Leopard Safari & Stepwell Dinner (+USD 80–250 each)",
  },
  {
    category: "Transport Costs",
    goldenTriangle:
      "Lower (Shorter driving distances)",
    rajasthan:
      "Higher (Longer road journeys across the state)",
  },
];

export default function BudgetComparison() {
  return (
    <section className="w-full bg-white py-2 sm:py-4">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}

        <div className="mb-4">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-2">
            Budget Comparison: What Does Each Tour Cost?
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 leading-relaxed font-light text-justify">
            Both the Golden Triangle Tour and Rajasthan Tour can be planned
            across a wide range of budgets—from backpacking adventures to
            ultra-luxury palace holidays. The comparison below reflects the
            approximate pricing for a comfortable private journey designed by
            India Heritage Travel.
          </p>

        </div>

        {/* Table */}

        <div className="overflow-x-auto rounded-md">

          <table className="min-w-full border-collapse">

            <thead>

              <tr className="bg-[#faf7f3]">

                <th className="px-5 py-4 text-left text-[13px] font-semibold text-[#2c2c2c] border-b border-[#e7dfd4]">
                  Cost Element
                </th>

                <th className="px-5 py-4 text-left text-[13px] font-semibold text-[#2c2c2c] border-b border-[#e7dfd4]">
                  Golden Triangle Tour
                </th>

                <th className="px-5 py-4 text-left text-[13px] font-semibold text-[#2c2c2c] border-b border-[#e7dfd4]">
                  Rajasthan Tour
                </th>

              </tr>

            </thead>

            <tbody>

              {budgetData.map((item, index) => (

                <tr
                  key={item.category}
                  className={index % 2 === 0 ? "bg-white" : "bg-[#fcfbf9]"}
                >

                  <td className="px-5 py-4 border-b border-[#ece7de] text-[12px] md:text-[13px] text-[#2c2c2c] align-top">
                    {item.category}
                  </td>

                  <td className="px-5 py-4 border-b border-[#ece7de] text-[12px] md:text-[13px] leading-relaxed text-gray-700 font-light align-top">
                    {item.goldenTriangle}
                  </td>

                  <td className="px-5 py-4 border-b border-[#ece7de] text-[12px] md:text-[13px] leading-relaxed text-gray-700 font-light align-top">
                    {item.rajasthan}
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