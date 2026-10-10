"use client";

import Image from "next/image";

const ticketData = [
  {
    site: "Delhi, Agra, Jaipur ",
    indian: "Oct – Mar",
    foreign: "Cool, clear days; peak festival season",
  },
  {
    site: "Rajasthan",
    indian: "Oct – Mar",
    foreign: "Desert heat builds fast after March",
  },
  {
    site: "Kerala & the backwaters",
    indian: "Sep – Mar; Jun – Aug for monsoon",
    foreign: "Lush and dramatic during monsoon",
  },
  {
    site: "Himalayan India (Ladakh, Himachal)",
    indian: "May – Sep",
    foreign: "High passes close in winter",
  },
  {
    site: "Goa",
    indian: "Nov – Feb",
    foreign: "Warm, dry, festive beach season",
  },
];

const cityData = [
  {
    name: "Peak Season: November to March",
    description:
      `October to March is the best window for most of India - temperatures are pleasant (20–28°C), skies are clear, and festivals and heritage events are at their peak. It's also high season, so book heritage hotels 4–6 months in advance.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786163048/pexels-j-singh-166004985-10898929_zktp4a.jpg",
  },
  {
    name: "Shoulder Season: April, September and October",
    description: 
      `April and May are hot across northern India, but ideal for Himalayan destinations like Shimla, Manali, and Ladakh during early season.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786163159/pexels-kolkatarphotographer-34484892_jn3rdr.jpg",
  },
  {
    name: "Monsoon: June to September",
    description:
      `Monsoon season (June–September) arrives in Kerala first. It's less ideal for northern heritage tours, but beautiful in Kerala and the Western Ghats - with rising backwaters and lush green hills. Expect short, sharp showers rather than continuous rain.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786163282/pexels-prudhvi-raj-saripilli-612413705-17618269_saylad.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Best Time to Visit India: A Season-by-Season Guide
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
        <div className="overflow-x-auto rounded-sm bg-white mt-2 md:mt-4">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#9A6A2F] text-white">
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Region
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Best Months
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Notes
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