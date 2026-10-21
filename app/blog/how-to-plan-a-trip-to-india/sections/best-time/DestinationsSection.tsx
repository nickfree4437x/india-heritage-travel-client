"use client";

import Image from "next/image";

const ticketData = [
  {
    site: "Backpacker / Budget",
    indian: "$40 – $70",
    foreign: "Guesthouses, local transport, street & casual dining",
  },
  {
    site: "Mid-Range",
    indian: "$120 – $250",
    foreign: "3–4 star hotels, private day drivers, mix of dining",
  },
  {
    site: "Luxury / Private",
    indian: "$400 – $900+",
    foreign: "Heritage & 5-star palace hotels",
  },
];

const cityData = [
  {
    name: "The Golden Triangle: Delhi, Agra, Jaipur",
    description:
      `The Golden Triangle - Delhi, Agra, Jaipur - is the classic first-timer loop and it really works. It combines Mughal architecture, Rajasthan's palaces, and the Taj Mahal in a manageable 5–7 day route with comfortable drives between cities.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786164475/pexels-artosuraj-28749618_dcsvbx.jpg",
  },
  {
    name: "The Rajasthan Heritage Circuit",
    description: 
      `For a deeper Rajasthan experience, extend west to Udaipur's lakes, Jodhpur's blue quarters, and Jaisalmer's desert fort. This 10–12 day route suits travellers who enjoy palace hotels, calm courtyards, and a slower, more immersive pace.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786164588/pexels-ansh-yati-875278361-34669534_ludymh.jpg",
  },
  {
    name: "Kerala & the Southern Backwaters",
    description:
      `A slower, greener alternative: houseboat cruises through the backwaters, tea plantations in Munnar, and Ayurvedic wellness retreats. Pairs well with a few days on the Kerala coast.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786164699/pexels-gorky-30778230_o8ksn0.jpg",
  },
  {
    name: "Himalayan India",
    description:
      ` And if monuments aren’t your main thing, but mountains are, then Ladakh, Himachal Pradesh, and Sikkim bring Buddhist monasteries, high-altitude waters, and a totally different rhythm. Best timing is usually between May and September, because otherwise it can get… well, rather challenging.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786164792/pexels-matthew-solomon-1926194-31346689_q4dpgp.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Choosing Your Destinations: Building the Right India Itinerary
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
          Once your dates are set the next decision is geography, really. India’s regions kind of group on 
          their own, and most well designed itineraries they tend to choose one cluster only rather than 
          criss crossing the whole country, you know.  
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-2 md:mb-4">
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
                  <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light">
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

        {/* Header */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           How Much Does a Trip to India Cost? Budget Planning
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
          India can be genuinely inexpensive or genuinely luxurious, often within the same city block. Setting a realistic budget early shapes almost every 
          other decision, from hotels to transportation. 
        </p>

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