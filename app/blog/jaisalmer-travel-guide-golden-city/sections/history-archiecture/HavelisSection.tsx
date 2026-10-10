"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Patwon Ki Haveli",
    description:
      `Patwon Ki Haveli - a five-mansion complex built over decades - showcases elaborate archways, mirror work, and delicate painted interiors. Today it serves as a museum, revealing the life of a prosperous merchant family.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786853298/recyclops-ss-Fv_lkak0-I4-unsplash_cl18t8.jpg",
  },
  {
    name: "Salim Singh Ki Haveli",
    description: 
      `Salim Singh Ki Haveli - built in the early 19th century for a Jaisalmer court prime minister - features a distinctive curved peacock-shaped roof and a top row of balconies designed to match the maharaja's palace height`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786853530/salim-singh-ki-haveli-1_bsxspe.jpg",
  },
  {
    name: "Nathmal Ki Haveli ",
    description:
      `Nathmal Ki Haveli - built in the 1880s for a court official - has a unique charm: it was constructed by two brothers working on opposite wings simultaneously. The two halves are similar but not identical.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786853650/geetam-shah-B8-i1NOW6Nk-unsplash_egfsa7.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           The Havelis of Jaisalmer
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