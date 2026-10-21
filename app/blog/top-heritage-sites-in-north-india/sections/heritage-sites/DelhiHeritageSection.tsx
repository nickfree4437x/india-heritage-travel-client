"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Red Fort Complex",
    description:
      `Built by Shah Jahan (1639–1648), the Red Fort served as the Mughal power centre for 200 years and 
       earned UNESCO status in 2007. It still feels alive - hosting the annual Independence Day address. 
       For full history and visitor information, explore our Red Fort Travel Guide.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784525681/pexels-varan-6776755_zk1cfk.jpg",
  },
  {
    name: "Humayun's Tomb",
    description: 
      `Humayun's Tomb - the subcontinent's first great garden-tomb - was built by Bega Begum in 1572. 
       Its Charbagh design became a blueprint, inspiring the Taj Mahal 80 years later. Explore our full 
       Humayun's Tomb Guide for the complete story.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784525840/pexels-miheertewari-13256094_xlvfrc.jpg",
  },
  {
    name: "Qutub Minar",
    description:
      `Qutub Minar - the world's tallest brick minaret at 72.5 metres - was begun in 1199 and finished by 
       Iltutmish. The UNESCO-listed complex also features the Quwwat-ul-Islam Mosque and the remarkable 
       Iron Pillar. Step back into Delhi's earliest Indo-Islamic era with our detailed Qutub Minar Travel 
       Guide.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784279555/Diwan-i-khas__Red_fort_jqecdq.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-1 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Top Heritage Sites in Delhi
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