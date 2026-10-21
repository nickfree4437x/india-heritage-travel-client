"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Champaner-Pavagadh Archaeological Park, Gujarat",
    description:
      `Champaner-Pavagadh, around 45 km from Vadodara, preserves a 15th-century Sultanate capital with mosques, palaces, gates, and stepwells - much of it still unexcavated, as if history simply left it there.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784724913/Jain_Temple__Pavagadh__cropped_jqgr16.jpg",
  },
  {
    name: "Rani ki Vav, Patan, Gujarat",
    description: 
      `This 11th-century stepwell, built by Queen Udayamati for her husband, sinks 27 metres through seven levels with 1,500+ sculptures. Buried by the Saraswati for centuries, restored in the 1980s, it now graces India's ₹100 note. Read our full Rani ki Vav Guide.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784725011/Rani_ki_vav_02_1_y0oc5h.jpg",
  },
  {
    name: "Rock Shelters of Bhimbetka, Madhya Pradesh",
    description:
      `Bhimbetka - about 45 km from Bhopal - shelters over 700 rock cavities, many with paintings. Human activity here dates back 100,000 years, with continuous rock art spanning millennia. Explore our complete Bhimbetka Travel Guide.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784723097/Entry_to__Auditorium_Cave__vdskzu.jpg",
  },
  {
    name: "Sacred Ensembles of the Hoysalas, Karnataka",
    description:
      `UNESCO listed the Hoysala temples in 2023 - Belur, Halebidu, and Somanathapura - for their stellate architecture and dense carving. Remarkably underrated compared to nearby Hampi and Mysore Palace. Visit our detailed Hoysala Temples Travel Guide.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784725212/Somanathapura_Keshava_temple_zuafkm.jpg",
  },
  {
    name: "Moidams of the Ahom Dynasty, Assam",
    description:
      `The Moidams - six centuries of Ahom royal burials in Upper Assam - are cosmology-carved mounds, not mere tombs. Despite being UNESCO's first Northeast Indian cultural site, they're among the least visited. Visit our detailed Moidams Travel Guide.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784725407/Sam2_t3iftm.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           The Hidden UNESCO Heritage Sites in India Worth Building a Trip Around
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