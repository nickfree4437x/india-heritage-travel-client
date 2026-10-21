"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Nahargarh Fort , Jaipur",
    description:
      `it sits up on a ridge sorta watching over the city, it is far less crowded than Amber Fort , and yeah the sunset views are really good , maybe even better if you catch the late light.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784527437/pexels-aj33-449362239-28796437_jg4kei.jpg",
  },
  {
    name: "Chandigarh’s Capitol Complex ",
    description: 
      `Le Corbusier's mid-20th-century government complex in Chandigarh - a UNESCO World Heritage Site - offers a bold modernist contrast to North India's ancient monuments. Explore our complete Chandigarh Heritage Travel Guide.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784523936/Palace_of_Assembly_Chandigarh_2006_yg077z.jpg",
  },
  {
    name: "Salimgarh Fort , Delhi ",
    description:
      `This 16th-century fortification is right by the Red Fort, there’s a bridge connection, and it tends to be visited much less , by comparison, which is nice. `,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784527589/pexels-amol-nakve-2148578663-32498309_gbqudi.jpg",
  },
  {
    name: "Sunder Nursery , Delhi",
    description:
      `it’s a restored heritage park next to Humayun’s Tomb, but it also has its own little cluster of quieter Mughal tombs that most people don’t really notice`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784527677/pexels-arun-sharma-3728067-6193311_xch1kk.jpg",
  },
  {
    name: "Lucknow",
    description:
      `just a short flight from Delhi, this 18th-century Nawabi structure contains one of the world’s largest vaulted halls , and somehow it manages it without supporting beams.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784527817/pexels-vedant-gupta-2153341111-34621080_yb8exu.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Hidden Gems and Underrated Heritage Sites
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

      </div>
    </section>
  );
}