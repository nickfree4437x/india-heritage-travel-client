"use client";
import Image from "next/image";

const ticketData = [
  {
    site: "Berhampore base",
    indian: "A range of hotels and lodges, 14 km from the main monuments",
    indian2: "Practical overnight stays, early starts"
  },
  {
    site: "Riverside lodge near the Hazarduari",
    indian: "Simple, quiet stays by the Bhagirathi",
    indian2: "Atmosphere, short walks to the monuments"
  },
  {
    site: "Kolkata base with private car",
    indian: "Luxury hotels in Kolkata with a long day trip or an overnight at a vetted property",
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
            Be realistic about the accommodation facilities. Murshidabad is certainly not a holiday place, 
            and there are very few hotels in the town, which tend to be modest ones, with some government-
            owned ones and budget hotels available in the vicinity of Hazarduari and Berhampore. Berhampore 
            is 14 km south and the most realistic place to stay at. I could not confirm the existence of any
            heritage hotel of the likes of Rajasthan.
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

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1792583613/pexels-aditya-chowdhury-1907990508-28938860_ppr7ph.jpg"
              alt="Where to stay in Murshidabad - heritage hotels and riverside stays in Bengal"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>
      </div>
    </section>
  );
}