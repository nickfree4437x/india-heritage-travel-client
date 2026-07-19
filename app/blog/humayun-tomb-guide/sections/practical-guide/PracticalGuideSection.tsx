"use client";

export default function PracticalGuideSection() {
  const ticketData = [
    {
      category: "Indian Nationals",
      price: "₹35 per person",
    },
    {
      category: "Foreign Nationals",
      price: "₹550 per person",
    },
    {
      category: "Children (Under 15)",
      price: "Free",
    },
    {
      category: "Timings",
      price: "6:00 AM – 6:00 PM (Daily)",
    },
  ];

  return (
    <section className="w-full bg-white py-3 md:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Ticket Prices Section */}
        <div className="mb-2 md:mb-5">
          <h3 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c] mb-2">
            Entry & Ticket Details
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