"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Mehrangarh Fort",
    description:
      `Mehrangarh Fort, 125 metres above Jodhpur, is a Rajput architectural gem. Explore Sheesh Mahal, Moti Mahal, and royal collections, take in panoramic city views, or try the zip-line adventure.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786765057/Mehrangarh_Fort_sanhita_yozh1n.jpg",
  },
  {
    name: "Jaswant Thada",
    description: 
      `Jaswant Thada - a white marble cenotaph built in 1899 for Maharaja Jaswant Singh II - sits just below Mehrangarh Fort. The complex includes gardens, a lake, and cenotaphs of later Rathore kings, making it one of Jodhpur's most serene spots.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786765153/Jaswant_Thada_Dawn_ynlvii.jpg",
  },
  {
    name: "Umaid Bhawan Palace",
    description:
      `Umaid Bhawan Palace - atop Chittar Hill and completed in 1943 - is one of the world's largest private homes and the last major palace built in princely India. It is divided into a royal residence, a luxury heritage hotel, and a museum showcasing vintage cars and royal memorabilia.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786764410/sam-mathews-sYxPnaE_--Q-unsplash_bfsenc.jpg",
  },
  {
    name: "Mandore Gardens",
    description:
      `Mandore - the former capital of Marwar before Jodhpur - now features elaborate gardens with ornate cenotaphs, temple ruins, and the unique "Hall of Heroes." It's a quiet retreat from the city's busier forts and palaces.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786765421/Temples_at_Mandor__4571805346_cfpypa.jpg",
  },
  {
    name: "Clock Tower and Sardar Market",
    description:
      `The century-old Clock Tower in Jodhpur's old city overlooks Sardar Market - a lively bazaar selling spices, fabrics, silver jewellery, leather mojaris, and antiques. It's the perfect place to experience local life and colour.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786765540/Jodhpur_Clock_Tower_kcbodp.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Major Attractions in Jodhpur
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
                    Image via wikipedia
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
                    Image via wikipedia
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

      </div>
    </section>
  );
}