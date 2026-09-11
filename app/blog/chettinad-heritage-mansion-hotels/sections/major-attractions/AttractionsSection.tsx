"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Chettinadu Mansion, Kanadukathan",
    description:
      `Constructed in 1902, and spanning about 80,000 square feet, this mansion is restored with period furniture and its original lime plaster walls, and provides some of the most complete information on the lifestyle of an upper-class Chettiar family.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789120118/unnamed_yk1ai3.webp",
  },
  {
    name: "Visalam, Kanadukathan",
    description: 
      `The construction of this Art Deco-style mansion by a Chettiar father for his daughter Visalakshi, after which this mansion is named, is a story of devotion as well as of architecture.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789120194/unnamed_1_tfcow3.webp",
  },
  {
    name: "Saratha Vilas, Karaikudi",
    description:
      ` Restored under the guidance of French architects, Saratha Vilas embraces the cosmopolitan heritage of Chettinad through its original tile work and courtyard, along with a cultural walk and cooking classes.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789120341/ef537885-d5ec-4e7b-846e-1c7a1a156b89_v5i9xd.avif",
  },
  {
    name: "Pillaiyarpatti Cave Temple",
    description:
      `A rock-cut Ganesha temple believed to date back over a thousand years, and one of the oldest religious sites in the region a compelling half-day addition to any mansion-hotel stay.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789120462/Karpaka_Vinayakar_temple__Pillayarpatti_Pillayar_Koil__Tiruppathur_Tamil_Nadu_-_01_icmup5.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py- md:py-3.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Major Mansion Hotels and Attractions
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
                    via wikipedia
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
                    via wikipedia
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