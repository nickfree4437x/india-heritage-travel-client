"use client";

import Image from "next/image";

const ticketData = [
  {
    category: "Foreign Tourists",
    admission: "₹1,100",
    mausoleum: "₹200",
  },
  {
    category: "SAARC & BIMSTEC Visitors",
    admission: "₹540",
    mausoleum: "₹200",
  },
  {
    category: "Indian Citizens / OCI",
    admission: "₹50",
    mausoleum: "₹200",
  },
  {
    category: "Children Under 15",
    admission: "Free",
    mausoleum: "Free",
  },
];

export default function TicketSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c] mb-2">
          Taj Mahal Ticket and Entry Information
        </h2>

        <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-6">
          Taj Mahal ticket prices vary according to nationality. One detail
          that surprises many first-time visitors is that admission to the
          main marble mausoleum requires an additional ticket beyond the
          standard complex entry fee. The standard ticket allows access to
          the gardens, walkways, and viewing platforms, while the optional
          mausoleum ticket grants entry to the central marble structure.
        </p>

        {/* Ticket Table */}
        <div className="overflow-hidden rounded-md mb-6 md:mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#faf8f5]">
                  <th className="px-5 py-4 text-left text-[13px] font-semibold text-[#2c2c2c] border-b border-[#ece7de]">
                    Visitor Category
                  </th>
                  <th className="px-5 py-4 text-left text-[13px] font-semibold text-[#2c2c2c] border-b border-[#ece7de]">
                    Complex Admission
                  </th>
                  <th className="px-5 py-4 text-left text-[13px] font-semibold text-[#2c2c2c] border-b border-[#ece7de]">
                    Mausoleum Entry
                  </th>
                </tr>
              </thead>

              <tbody>
                {ticketData.map((ticket) => (
                  <tr
                    key={ticket.category}
                    className="border-b border-[#ece7de] last:border-b-0"
                  >
                    <td className="px-5 py-4 text-[12px] sm:text-[13px] text-gray-700">
                      {ticket.category}
                    </td>
                    <td className="px-5 py-4 text-[12px] sm:text-[13px] text-gray-700">
                      {ticket.admission}
                    </td>
                    <td className="px-5 py-4 text-[12px] sm:text-[13px] text-gray-700">
                      {ticket.mausoleum}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Image */}
        <div className="mb-6">
          <div className="relative h-[280px] sm:h-[420px] lg:h-[620px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783057767/pexels-capture2805-12444399_s1beee.jpg"
              alt="Visitors queuing at the Eastern Gate entrance to the Taj Mahal complex"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light">
            Image via pexels
          </p>
        </div>

        {/* Entry Notes */}
        <div className="border border-gray-200 rounded-md p-5">
          <h3 className="text-[16px] sm:text-[17px] font-semibold text-[#2c2c2c] mb-2">
            Important Entry Information
          </h3>

          <ul className="space-y-1">
            <li className="flex gap-2">
              <span className="text-[#AF956C] font-semibold">•</span>
              <p className="text-[13px] sm:text-[13.5px] text-gray-700 leading-relaxed font-light">
                The Taj Mahal opens approximately 30 minutes before sunrise
                and closes around 30 minutes before sunset.
              </p>
            </li>

            <li className="flex gap-2">
              <span className="text-[#AF956C] font-semibold">•</span>
              <p className="text-[13px] sm:text-[13.5px] text-gray-700 leading-relaxed font-light">
                The monument remains closed every Friday for prayers at the
                mosque within the complex.
              </p>
            </li>

            <li className="flex gap-2">
              <span className="text-[#AF956C] font-semibold">•</span>
              <p className="text-[13px] sm:text-[13.5px] text-gray-700 leading-relaxed font-light">
                Entry is usually available through the Eastern and Western
                Gates, while the Southern Gate is generally not used for
                regular tourist entry.
              </p>
            </li>

            <li className="flex gap-2">
              <span className="text-[#AF956C] font-semibold">•</span>
              <p className="text-[13px] sm:text-[13.5px] text-gray-700 leading-relaxed font-light">
                Carry a valid photo ID and keep your ticket accessible
                throughout the visit.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}