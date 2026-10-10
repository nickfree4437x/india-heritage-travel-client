"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Golconda Fort and Charminar",
    description:
      `Golconda Fort's acoustic engineering lets a clap carry almost a kilometre. The 1591 Charminar is Hyderabad's iconic landmark. Together with the Qutb Shahi Tombs, they're on UNESCO's tentative list - explore our full Hyderabad Heritage Travel Guide.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784610860/sai-sumith-4FJt0Uo4nl0-unsplash_dc79qu.jpg",
  },
  {
    name: "Ramappa Temple",
    description: 
      `Ramappa Temple - the 13th-century Kakatiya Rudreshwara Temple - became a UNESCO site in 2021. Its engineering marvels include floating bricks, while its carvings showcase Kakatiya craftsmanship at its peak. Explore our full Ramappa Temple Guide.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784610981/A_view_of_Ramappa_Temple_01_ybdocd.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Top Heritage Sites in Andhra Pradesh and Telangana
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