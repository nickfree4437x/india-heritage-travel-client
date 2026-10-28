"use client";

const ticketData = [
  {
    site: "Tourist lodge in Bishnupur",
    indian: "Simple, central, with an on-site restaurant (Bengali and multi-cuisine)",
    indian2: "Short overnight stays, early starts"
  },
  {
    site: "Boutique or guesthouse stay",
    indian: "Small family-run properties; quality varies",
    indian2: "Local atmosphere"
  },
  {
    site: "Kolkata base with private car",
    indian: "Luxury Kolkata hotels with a day trip by car",
    indian2: "Comfort-focused travellers with limited time"
  },
];

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-2.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Where to Stay
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Be realistic in your choice of accommodation. Bishnupur is a small town and all accommodations 
            are limited to lodges and hotels including the government tourist lodge that is located near the 
            temples. I could not confirm the presence of any heritage hotel in the town hence we recommend 
            combining an enjoyable stay in Kolkata or Durgapur with a car rental day.
          </p>

          {/* Table */}
            <div className="overflow-x-auto rounded-sm bg-white mb-2 md:mb-4 mt-2">
             <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-[#9A6A2F] text-white">
                  <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                    Option
                  </th>

                  <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                    What it offers
                  </th>
                  <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                    Best for
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
          
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            At India Heritage Travel we vet any overnight, and when a property is not at the standard 
            our guests expect, we plan the journey as a comfortable private-car day from Berhampore or 
            Kolkata instead.
          </p>
        </div>
      </div>
    </section>
  );
}