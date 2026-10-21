"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Badami Cave Temples (130 km)",
    description:
      `The 6th-century Chalukya cave temples of Badami are one of the finest examples of early Deccan
       rock-cut architecture four elaborately carved cave temples overlooking the Agastya lake. 
       Combine with Pattadakal and Aihole for a comprehensive early Karnataka heritage circuit.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783507517/Vishnu_image_inside_cave_number_3_in_Badami_ztd66m.jpg",
  },
  {
    name: "Pattadakal (120 km)",
    description:
      `UNESCO World Heritage Site a group of 8th-century temples representing the evolution of South
       Indian temple architecture. Most notably, the Virupaksha and Mallikarjuna temples show the 
       Chalukya style at its mature peak.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783507603/Pattadakal_000_jdz836.jpg",
  },
  {
    name: "Aihole (115 km)",
    description:
      `Known as the 'cradle of Indian architecture' - 125 temples spanning 600 years of experimentation
       from the 4th to 12th centuries. The Durga Temple and Ladkhan Temple are highlights.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783507703/8th_century_Durga_temple_exterior_view__Aihole_Hindu_temples_and_monuments_3_chhb1r.jpg",
  },
  {
    name: "Tungabhadra Dam (6 km)",
    description:
      `A major dam providing irrigation to the Hampi region. The gardens and reservoir make for a 
       pleasant afternoon excursion, particularly at sunset.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783507810/Tungabhadra_Dam_ds3wfs.jpg",
  },
  {
    name: "Hospet (Hosapete) (13 km)",
    description:
      `The nearest modern city useful for accommodation, banking, and access to Hampi Junction
       railway station.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783507922/Blue_Hour_in_Hospet_suq6cs.jpg",
  },
  {
    name: "Daroji Sloth Bear Sanctuary (15 km)",
    description:
      `One of India's few sloth bear sanctuaries, with a reliable population of Indian sloth bears 
       visible at feeding platforms in the early evening.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783507999/MelursusUrsinusFemaleCub_vclkjr.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-4 md:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Nearby Attractions: The Wider Deccan Heritage Circuit
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