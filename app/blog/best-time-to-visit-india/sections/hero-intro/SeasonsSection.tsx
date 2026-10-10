"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Winter (October/November to March)",
    description:
      `October to March is peak season - clear skies, low humidity, and daytime temperatures of 15–25°C (59–77°F), perfect for heritage touring in the Golden Triangle and Rajasthan. Nights can get chilly in December–January, so pack warm layers.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786333217/pexels-imadclicks-15147361_ffcnnp.jpg",
  },
  {
    name: "Summer (April to June)",
    description: 
      `March–June sees heat build across the plains, with 40°C+ common in Rajasthan and central India. But it's the perfect season for hill stations like Shimla, Manali, and Darjeeling - and the only window for Ladakh's high-altitude passes.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786252610/pexels-rajesh-s-balouria-1289088-14314791_ikwi12.jpg",
  },
  {
    name: "Monsoon (June/July to September)",
    description:
      `Monsoon hits Kerala in late May–June and moves northeast - ticket prices drop, crowds thin, and the landscape turns a lush green. It's not the easiest season for logistics due to heavy downpours, but for wellness retreats, Ayurveda, and dramatic photography, it has a devoted following.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786252711/pexels-md-nadim-mahmud-2158301177-37557220_lxas5h.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-1 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Understanding India's Three Seasons
          </h2>
        </div>
        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
          India’s climate sort of splits into three seasons, but honestly anyone who has walked from the 
          Thar Desert toward the Western Ghats in just one week will tell you that “broadly” is doing way 
          too much work there.
        </p>

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