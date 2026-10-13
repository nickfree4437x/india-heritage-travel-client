"use client";

import Image from "next/image";

const ticketData = [
  {
    site: "Golden Triangle & Rajasthan",
    indian: "Nov – Feb",
    foreign: "May – Jun (extreme heat)",
  },
  {
    site: "Kerala & South India",
    indian: "Dec – Feb (dry); Jun – Aug",
    foreign: "Mar – May (very humid)",
  },
  {
    site: "Himalayan India & Ladakh",
    indian: "May – Sep",
    foreign: "Dec – Mar (passes closed)",
  },
  {
    site: "Goa",
    indian: "Nov – Feb",
    foreign: "Jun – Sep (heavy monsoon)",
  },
  {
    site: "Mumbai & the West Coast",
    indian: "Nov – Feb",
    foreign: "Jun – Sep (heavy monsoon)",
  },
];

const cityData = [
  {
    name: "North India Weather",
    description:
      `Delhi and the Gangetic plains experience four distinct seasons - cold winters (Nov–Feb), hot summers (Mar–June), a monsoon (Jun–Sept), and mild autumn (Oct–Nov). Winter fog in December–January can delay early flights - keep some buffer in your schedule.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786252610/pexels-rajesh-s-balouria-1289088-14314791_ikwi12.jpg",
  },
  {
    name: "South India Weather",
    description: 
      `Kerala and Tamil Nadu remain warmer and more humid year-round than the north, with far less seasonal temperature contrast. Two monsoons - the southwest (Jun–Sept) and northeast (Oct–Dec) - bring rain across a longer season than northern India.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786256438/pexels-nandhukumar-14844302_k1bss5.jpg",
  },
  {
    name: "Rajasthan Weather",
    description:
      `Rajasthan has a desert climate - low humidity, dramatic day-to-night temperature swings, and some of India's coldest winter nights and hottest summer days. November through February is the most comfortable window for Jaipur, Jodhpur, Udaipur, and Jaisalmer.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786260087/pexels-shikhasingh-37239564_l4z3uj.jpg",
  },
  {
    name: "Kerala Weather",
    description:
      `Kerala's tropical climate stays humid year-round, with a dramatic monsoon (June–September) that draws travellers for lush backwaters and waterfalls. December–February brings drier, comfortable conditions - ideal for beaches and houseboat cruises.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786258917/pexels-nisanth-panicker-1703892518-28399265_bjj5qn.jpg",
  },
  {
    name: "Himalayan Weather",
    description:
      `The Himalayas are snowbound and difficult to reach in winter, but glorious from May to September when high-altitude roads - like Ladakh's passes - open. Hill stations like Shimla and Darjeeling are milder and accessible for a longer window.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786252521/pexels-vatsal-bhatt-25432027-7433008_goxd2i.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Regional Climate Differences Across India
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-2 md:mb-3">
          {cityData.map((city) => (
            <div
              key={city.name}
              className="group overflow-hidden transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-[200px] sm:h-[260px] bg-[#faf7f3] overflow-hidden">
                {city.image ? (
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <p className="mt-2 text-[12px] sm:text-[13px] text-gray-600 font-light">
                    Image via pexels
                  </p>
                )}

                {/* City Name Overlay (Mobile) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 md:hidden">
                  <h3 className="text-white text-[16px] font-semibold flex items-center gap-2">
                    {city.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="mt-2">
                <p className="text-[10px] sm:text-[11px] text-gray-600 font-light">
                    Image via pexels
                  </p>
                {/* City Name (Desktop) */}
                <h3 className="hidden mt-3 md:flex text-[14px] md:text-[16px] font-bold text-[#2c2c2c] mb-2 items-center gap-2">
                  {city.name}
                </h3>

                {/* Description */}
                <p className="text-[12px] mt-2 md:mt-0 sm:text-[13px] leading-relaxed text-gray-600 font-light line-clamp-3 md:line-clamp-4">
                  {city.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm bg-white">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#9A6A2F] text-white">
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Travel Style
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Per Person, Per Day 
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  What's Included
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