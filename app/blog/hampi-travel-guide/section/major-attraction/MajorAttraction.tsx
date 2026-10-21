"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Vittala Temple Complex",
    description:
      `Built in the 16th century under Krishnadevaraya, the Vittala Temple is the undisputed pinnacle
       of Vijayanagara architecture. The complex is defined by its three gopurams and expansive courtyard.
       The stone chariot and musical pillars are its most famous attractions.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783505370/unnamed_xqyime.webp",
  },
  {
    name: "Lakshmana Temple - The Early Masterpiece",
    description:
      `Hampi's oldest active temple, Virupaksha, dates back to the 7th century CE 1,400 years of 
       continuous worship. Its 49-metre gopuram towers over the main bazaar. Inside, Vijayanagara-era
       murals and a camera obscura effect, projecting an inverted gopuram image, add to its enduring
       mystique.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783505565/Complex_of_Virupaksha_Temple__Hampi__04_1_nhohh0.jpg",
  },
  {
    name: "Hazara Rama Temple",
    description:
      `The early 15th-century Hazara Rama Temple, inside the Royal Enclosure, served as the Vijayanagara
       rulers' private shrine. Its exterior walls feature an unbroken frieze of Ramayana scenes thousands
       of carved figures that give the temple its name, "Thousand Ramas."`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783505671/unnamed_1_z3fdaw.webp",
  },
  {
    name: "The Royal Enclosure",
    description:
      `The Royal Enclosure formed the administrative core of Vijayanagara, with the king's audience 
       hall, palace ruins, and a stepped tank. The Mahanavami Dibba, adorned with carved panels of 
       elephants and hunts, served as the king's viewing platform for festival processions.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783505839/carvings-royal-enclosure-hampi-wiki_j9tqtw.jpg",
  },
  {
    name: "Lotus Mahal (Zenana Enclosure)",
    description:
      `The Lotus Mahal is a two-storeyed pavilion within the Zenana Enclosure, blending Dravidian towers
       with Islamic arched vaults in an elegant, uniquely Vijayanagara style. Built in brick with lime
       plaster, its lotus-petal ornamentation gives it the name. It sits within the same enclosure as 
       the Elephant Stables.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783506048/Flat_elevation_of_Lotus_Mahal__Hampi__Closeup_1_1_q6ollr.jpg",
  },
  {
    name: "Elephant Stables",
    description:
      `The Elephant Stables feature eleven symmetrical domed chambers built for the royal elephants 
      symbols of Vijayanagara's military might. The domes alternate between Hindu and Islamic styles,
      showcasing the empire's cosmopolitan character. The middle chamber's ribbed vaulting is particularly impressive.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783506170/unnamed_2_ljcthr.webp",
  },
  {
    name: "Queen's Bath",
    description:
      `The Queen's Bath, outside the Zenana Enclosure, features a rectangular pool surrounded by 
      ornate corridors, balconied walkways, and vaulted ceilings with channels for perfumed water. 
      This fusion of Islamic and Dravidian design offers an intimate glimpse into 15t - 16th century 
      Vijayanagara courtly luxury.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783506282/unnamed_3_oblo92.webp",
  },
  {
    name: "Hemakuta Hill Temples",
    description:
      `Hemakuta Hill is dotted with pre-Vijayanagara Jain and Hindu shrines dating from the 9th - 
       12th centuries. It offers the finest sunrise views over the Virupaksha Temple complex and
       the Tungabhadra valley often missed, but one of Hampi's most atmospheric spots.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783506407/ksp_3488_t4dzds.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-4 md:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Major Attractions - The Temples in Detail
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