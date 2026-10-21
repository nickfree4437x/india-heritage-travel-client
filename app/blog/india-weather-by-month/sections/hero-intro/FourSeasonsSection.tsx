"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Winter (November – February)",
    description:
      `October to March offers warm, dry days across most of India, with cold nights in Rajasthan and the north - perfect for heritage touring. This is peak season for the Golden Triangle and Rajasthan, when conditions feel "just right.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786252521/pexels-vatsal-bhatt-25432027-7433008_goxd2i.jpg",
  },
  {
    name: "Summer (March – June)",
    description: 
      `Temperatures climb from March, peaking at 40°C+ in May–June across the northern plains and Rajasthan - not ideal for desert heritage touring. However, it's a great time to head to the Himalayan foothills for cooler mountain air.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786252610/pexels-rajesh-s-balouria-1289088-14314791_ikwi12.jpg",
  },
  {
    name: "Monsoon (June – September)",
    description:
      `The southwest monsoon arrives in Kerala in early June, reaching the north by July - with intense, short bursts rather than steady drizzle. Humidity rises and heritage tours slow, but Kerala and the Western Ghats become lush and visually dramatic.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786252711/pexels-md-nadim-mahmud-2158301177-37557220_lxas5h.jpg",
  },
  {
    name: "Post-Monsoon / Autumn (October – November)",
    description:
      `September–October is an often-overlooked shoulder season - the monsoon clears, humidity drops, and the landscapes stay lush and green. Daytime temperatures are pleasant, with thinner crowds and lower rates than the December–February peak.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786252821/pexels-anoop1992-26597258_tfd4sd.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           India's Four Seasons Explained
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