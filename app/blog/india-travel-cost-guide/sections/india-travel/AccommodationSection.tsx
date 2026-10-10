"use client";

import Image from "next/image";

const ticketData = [
  {
    site: "Hostel / budget guesthouse",
    indian: "$6–20 (₹500–1,500)",
    foreign: "Dorm beds or basic private rooms",
  },
  {
    site: "Mid-range boutique / haveli",
    indian: "$25–90 (₹2,000–7,000)",
    foreign: "Clean 3-star hotels or heritage havelis",
  },
  {
    site: "5-star city hotel",
    indian: "$160–500 (₹13,500–42,000)",
    foreign: "International-standard chains ",
  },
  {
    site: "Heritage & palace hotels",
    indian: "$250–3,500+ (₹21,000–300,000+)",
    foreign: "Restored forts and palaces, Kerala houseboats",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-3.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Accommodation Costs in India
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
          Accommodation is sort of where the India travel budget spreads the most, like from a $6 hostel 
          dorm to a $3,500 palace suite, and it’s really common for that to happen in the very same city. 
          Once you get how the tiers work you can dodge both overpaying for a pretty underwhelming stay 
          and, on the other side, underspending on that one splurge night that kind of defines the whole 
          trip.
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm bg-white">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#9A6A2F] text-white">
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Category
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Typical Price / Night
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  What You Get
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

        {/* Image */}
        <div className="mt-2 md:mt-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786422322/ish-consul-i56w4ah3wAY-unsplash_1_ahcpob.jpg"
              alt="Accommodation costs in India - hotel price guide for budget luxury stays"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via unsplash
          </p>
        </div>

      </div>
    </section>
  );
}