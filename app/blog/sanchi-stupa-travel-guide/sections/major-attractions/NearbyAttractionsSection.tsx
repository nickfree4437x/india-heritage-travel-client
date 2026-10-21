"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Udayagiri Caves (13 km from Sanchi)",
    description: 
      `Udayagiri Caves (13 km from Sanchi) hold some of India's finest Gupta-era rock-cut sculpture, 
       including the famous Varaha panel. Despite its archaeological significance, it receives far 
       fewer visitors than it deserves.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784128295/Varahavtar_Panel_d7abmm.jpg",
  },
  {
    name: "Vidisha (10 km from Sanchi)",
    description:
      `Ancient Vidisha, Devi's hometown, was the commercial backbone behind Sanchi. The Heliodorus 
       Pillar, raised by a Greek ambassador in 110 BCE, marks one of the earliest Sanskrit inscriptions 
       and testifies to India's cross-cultural dialogue."`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784128400/MalaDevi_Temple_Gyaraspur_N-MP-283__5_jrz6wm.jpg",
  },
  {
    name: "Bhopal - The City of Lakes (46 km) ",
    description:
      `Bhopal, with its Upper and Lower Lakes, feels unexpectedly elegant. The Taj-ul-Masajid 
       dominates the old city, while the Tribal Museum and Bharat Bhavan offer cultural depth. 
       Stay at the Jehan Numa Palace - a Palladian mansion turned luxury hotel."`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784128558/Boats_in_Upper_Lake__Bhopal_rt6nue.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-4 md:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Nearby Attractions - Building a Madhya Pradesh Heritage Circuit
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