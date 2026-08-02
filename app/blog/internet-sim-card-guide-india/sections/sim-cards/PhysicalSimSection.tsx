"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Airtel",
    description:
      `Airtel works well for tourists - good coverage even in hills, villages, and parks. Plans start at ₹300–₹400 (28–30 days) with 1.5–2.5GB data per day and unlimited calls. For wildlife or rural routes, Airtel's network reach makes it the practical pick.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785560221/download_id7bpz.jpg",
  },
  {
    name: "Jio",
    description: 
      `Reliance Jio offers the best 5G speeds and data value, especially in cities. Tourist plans start at ₹299 for 28 days with 1.5–2GB daily data - no local reference needed. For smoother activation, buy at an airport counter or official store rather than random retail shops.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785560259/_MyJio__For_Everything_Jio_on_the_App_Store_dwzefn.jpg",
  },
  {
    name: "Vi (Vodafone Idea)",
    description:
      `Vi (Vodafone Idea) offers a reliable network with good coverage in most areas. Plans are competitively priced, and the service is known for its customer support. It's a solid choice for tourists looking for a balance of performance and value.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785560293/Download_VI_Vodafone_Idea_Logo_Vector_Free___Logowik_ucp9yz.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-4 md:py-7">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Physical SIM Cards: Airtel vs Jio vs Vi
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
                    via pinterest
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
                    via pinterest
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