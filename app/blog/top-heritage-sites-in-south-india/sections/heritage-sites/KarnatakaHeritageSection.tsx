"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Hampi",
    description:
      `Hampi - the ruined Vijayanagara capital spread across 4,187 hectares - holds over 1,600 surviving monuments, including the Vittala Temple's stone chariot, musical pillars, and the living Virupaksha Temple. A UNESCO site since 1986 - read our complete Hampi Travel Guide.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784610270/pavan-kumaar-9eZ7rB42xow-unsplash_gi764l.jpg",
  },
  {
    name: "Pattadakal, Badami and Aihole",
    description: 
      `UNESCO-listed Pattadakal (1987) merges Nagara and Dravidian temple styles at the Chalukya coronation site. Close by, Badami and Aihole's early temples shaped Dravidian design for a millennium. Read our full Badami-Pattadakal-Aihole Travel Guide.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784610284/Pattadakal_000_exvgda.jpg",
  },
  {
    name: "Fatehpur Sikri",
    description:
      `The Wodeyar dynasty's Mysore Palace (1897–1912) dazzles with its Indo-Saracenic blend of styles. Its evening illumination - with nearly 100,000 lights - makes it one of Karnataka's signature experiences. Read our full Mysore Palace Guide.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784279555/Diwan-i-khas__Red_fort_jqecdq.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Top Heritage Sites in Karnataka
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
                    Image via unsplash
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
                    Image via unsplash
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