"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Amber Fort, Jaipur",
    description:
      `Overlooking Maota Lake, Amber Fort blends Rajput and Mughal styles across its hilltop setting. Its 
       Sheesh Mahal and Diwan-e-Aam draw visitors, and it's part of the UNESCO-listed Hill Forts of 
       Rajasthan (2013). Discover more in our Amber Fort Travel Guide.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784526609/pexels-aman2905-33448400_nixycd.jpg",
  },
  {
    name: "City Palace and Jantar Mantar, Jaipur",
    description: 
      `Jaipur's City Palace houses the royal family and the Chandra Mahal museum. The adjoining Jantar 
       Mantar - an 18th-century observatory - is famous for its colossal sundial. The city is a UNESCO 
       site (2019), and Jantar Mantar has its own UNESCO tag (2010). Check our Jaipur Travel Guide for 
       more.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784526694/pexels-absoluteabhi-37967925_ousrlv.jpg",
  },
  {
    name: "Mehrangarh Fort, Jodhpur",
    description:
      `Mehrangarh Fort - towering over Jodhpur's blue houses - is among India's most dramatic and 
       best-preserved forts. Its sandstone walls, ornate palaces, and endless desert vistas leave a 
       lasting impression. Visit our comprehensive Mehrangarh Fort Travel Guide for complete details.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784279555/Diwan-i-khas__Red_fort_jqecdq.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Top Heritage Sites in Rajasthan
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