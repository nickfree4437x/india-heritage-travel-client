"use client";

export default function PracticalGuideSection() {
  const ticketData = [
    {
      category: "Western Group (ASI)",
      price: "₹40 (Indian nationals) / ₹600 (foreign visitors)",
    },
    {
      category: "Children under 15",
      price: "Free entry",
    },
    {
      category: "Eastern Group (Jain temples)",
      price: "Free or nominal charge",
    },
    {
      category: "Southern Group",
      price: "Free entry",
    },
    {
      category: "ASI Archaeological Museum",
      price: "₹10 (Indian) / ₹250 (foreign) ",
    },
    {
      category: "Sound & Light Show",
      price: "₹250 (Indian) / ₹700 (foreign) ",
    },
    {
      category: "Online booking",
      price: "www.asiagracircle.in or buy on-site",
    },
  ];

  return (
    <section className="w-full bg-white py-0 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide font-semibold text-[#2c2c2c] mb-2">
            Practical Travel Guide - Everything You Need to Know
          </h2>

          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] text-gray-700 font-light max-w-6xl">
            Before visiting Khajuraho, it is worth understanding the
            latest ticket prices, opening hours, photography rules, and
            recommended arrival times. A little planning goes a long way
            toward making your visit more enjoyable.
          </p>
        </div>

        {/* Ticket Prices Section */}
        <div className="mb-6 md:mb-8">
          <h3 className="text-[15px] sm:text-[18px] md:text-[20px] font-semibold text-[#2c2c2c] mb-3">
            Ticket Prices & Entry Fees
          </h3>

          {/* Table */}
          <div className="overflow-hidden rounded-md">
            <table className="w-full">
              <tbody>
                {ticketData.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-[#ece7de] last:border-b-0 ${
                      index % 2 === 0 ? "bg-white" : "bg-[#faf7f3]"
                    } hover:bg-[#f5efe8] transition-colors duration-200`}
                  >
                    <td className="w-[55%] px-4 sm:px-6 py-3 text-[11.5px] sm:text-[12px] md:text-[13px] text-[#2c2c2c]">
                      {item.category}
                    </td>
                    <td className="px-4 sm:px-6 py-3 text-[11.5px] sm:text-[12px] md:text-[13px] text-gray-700">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}