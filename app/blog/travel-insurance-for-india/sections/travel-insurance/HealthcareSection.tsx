"use client";

const ticketData = [
  {
    site: "Minor ER visit (sutures, X-ray)",
    indian: "USD 90–100",
    foreign: "Fully covered, often cashless",
  },
  {
    site: "Multi-day hospitalisation",
    indian: "USD 1,500–6,000+",
    foreign: "Covered up to policy limit",
  },
  {
    site: "Air ambulance / evacuation",
    indian: "USD 25,000–150,000",
    foreign: "Covered up to policy limit",
  },
  {
    site: "Trip cancellation (flights, hotels, guides)",
    indian: "Full cost of prepaid bookings",
    foreign: "Reimbursed per policy terms",
  },
];

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Healthcare in India: What Foreign Travellers Should Know
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            India’s private hospital world is kind of genuinely world class in the big cities and the heritage 
            routes, so a lot of the bigger facilities have international accreditation and they handle patients 
            from all over the globe, even when it’s elective surgery or anything planned ahead. Public hospitals 
            are different though, they’re basically set up for local residents only , so they’re not really the 
            first choice for international visitors.   
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            When you look at costs, reputable private hospitals come out a lot cheaper than the US the UK or 
            Australia , at least in simple dollar terms. But they are not free. You still get billed straight 
            to you unless you have some cashless insurance setup already arranged. For example a small emergency 
            room stop - stitches, an X-ray - can easily land around USD 90 to 100, out of pocket. And if it’s a 
            more serious situation, a hospital admission can climb into the thousands. If you have no cover, then 
            that’s totally on you, and you pay right there at the time of care.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-6">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785479683/pexels-delhi-eye-centre-2150177981-31000573_cyufat.jpg"
              alt="Healthcare in India - hospitals and medical facilities for international travellers"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm bg-white">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#9A6A2F] text-white">
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Scenario
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Typical Out-of-Pocket Cost (Uninsured)
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  With Comprehensive Insurance
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