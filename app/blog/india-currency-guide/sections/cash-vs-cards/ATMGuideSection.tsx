"use client";

const ticketData = [
  {
    site: "Per-transaction limit",
    indian: "₹10,000–₹20,000 on foreign cards",
    foreign: "Withdraw a few times rather than once",
  },
  {
    site: "Local ATM operator fee",
    indian: "₹100–₹335 per withdrawal.",
    foreign: "SBI and PNB ATMs usually charge less.",
  },
  {
    site: "Home bank foreign transaction fee",
    indian: "Often 1%–3.5% plus a flat charge",
    foreign: "Check card's ATM fees before travelling.",
  },
  {
    site: "Conversion prompt",
    indian: "ATM may ask 'Accept or Decline Conversion'",
    foreign: "Choose 'INR' for the better rate.",
  },
];

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            ATM Withdrawal Guide for International Visitors
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            ATMs still are the most reliable way to grab rupees at a fair bank-set exchange rate, far more 
            consistent than most airport exchange counters. International Visa, Mastercard and Maestro cards 
            get accepted at the majority of urban ATMs, especially the ones run by SBI, HDFC, ICICI and Axis 
            Bank. Most Indian ATMs put a cap on one foreign card withdrawal somewhere between ₹10,000 and 
            ₹20,000, and then your home bank plus the Indian bank operating the machine might both tack on 
            a fee. Instead of doing one big withdrawal, it’s usually smarter to plan two or three medium 
            withdrawals across your trip.   
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm bg-white">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#9A6A2F] text-white">
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Consideration
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  What to Expect
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Traveler Tip
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