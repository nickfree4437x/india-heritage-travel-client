"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Stupa No. 2 - The Hillside Repository",
    description:
      `Stupa No. 2, on the western slope, dates to the Shunga period (2nd century BCE). It contains 
       relics of ten Buddha disciples in ornate boxes. Its Shunga-style railings are among the earliest 
       Buddhist stone carvings clearly different from the Satavahana gateways.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784124746/Sanchi_Stupa_number_2_KSP_3589_1_ernmie.jpg",
  },
  {
    name: "Stupa No. 3 - Sariputra and Maudgalyayana",
    description: 
      `Stupa No. 3 contains the relics of Sariputra and Maudgalyayana key disciples of the Buddha. 
       Removed in 1851 to London, they were returned in 1952 and re-enshrined with ceremony. Though 
       smaller, its single torana echoes the Great Stupa's craftsmanship.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784124939/Stupa_3_-_Sanchi_Hill_2013-02-21_4270_ybueau.jpg",
  },
  {
    name: "The Ashoka Pillar - Mauryan Engineering at Its Finest",
    description:
      `A broken Ashoka Pillar south of the Great Stupa - with four lions in Mauryan style - mirrors 
       the Sarnath Lion Capital, later India's national emblem. Its craftsmanship is extraordinary."`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784125343/Ashoka_pillar_at_Vaishali__Bihar__India_nlgbbs.jpg",
  },
  {
    name: "Temple 17 - The Proto-Classical Hindu Temple",
    description:
      `Temple 17 (5th century CE) is one of India's earliest structural temples - a precursor to 
       medieval towers. Its plain columns and architrave show Greek influence, reflecting Gupta 
       exposure to Hellenistic traditions."`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784125466/144110489sanchi-gupta-temple_b60t00.jpg",
  },
  {
    name: "The ASI Archaeological Museum",
    description:
      `The Sanchi ASI Museum, at the hill's foot, displays exceptional Mauryan and Shunga sculptures 
       including the notable carved pillars from Stupa No. 2. Entry: ₹5 / ₹100. Closed Fridays."`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784125629/Archaeological_Museum_and_Church_of_St._Francis_of_Assisi_in_Goa_DSC02487_wfuvhx.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           The Full Sanchi Complex - Beyond the Great Stupa
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
                  <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light">
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