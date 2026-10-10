"use client";

import Image from "next/image";

const ticketData = [
  {
    site: "30-Day e-Tourist Visa",
    indian: "$25 (Jul–Mar) / $10 (Apr–Jun)",
    foreign: "$25–40",
  },
  {
    site: "1-Year e-Tourist Visa",
    indian: "$40",
    foreign: "$40",
  },
  {
    site: "5-Year e-Tourist Visa",
    indian: "$80",
    foreign: "$80–160",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Visa Costs for India
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
          Your India trip budget starts even earlier , before you ever step onto a flight, with the e-Tourist 
          Visa. The pricing is kind of tiered by how long you stay and, for a small set of nationalities like 
          the United States, it also follows reciprocal fee setups that can push the cost well past the standard 
          rate.
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
                  Standard Fee
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Typical US Citizen Fee
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
        <div className="mt-2 md:mt-4 mb-1 md:mb-2">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786421449/pexels-ethan-sarkar-2060961318-36912971_f6kt4o.jpg"
              alt="Flights to India - international airports Delhi Mumbai and connections guide 2026"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           There is usually a card-processing surcharge, about 2.5–3% , that sits above the base fee, so it 
           can feel a bit add-on-ish. Also if you want a professional visa-assistance service, you should 
           plan an extra $15–50 for document checking and day-to-day support, because that part is often 
           separate. Make sure you submit through the official Indian government e-Visa portal, or use a 
           verified partner, don’t just pay anywhere. Before you pay, double-check the exact fee for your 
           nationality, since the numbers get updated periodically, sometimes quietly.
        </p>

      </div>
    </section>
  );
}