"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Puri - 65 km",
    description:
      `Puri, one of India's four dhams, is known for the Jagannath Temple and Rath Yatra. It also 
       offers a fine beach, heritage food spots, and boutique stays. Combine Konark and Puri in one 
       day by taxi, or take two days and explore each fully.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783751962/Shri_Jagannatha_Temple_ptiwil.jpg",
  },
  {
    name: "Bhubaneswar - 64 km",
    description: 
      `Bhubaneswar, India's "Temple City," is home to over 400 temples - including Lingaraj, 
       Mukteshwar, and Rajarani. The Odisha State Museum also stands out. An overnight stay here 
       makes a convenient bookend between Konark and Puri.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783752074/Rajarani_Temple_2_u5rc9z.jpg",
  },
  {
    name: "Chilika Lake - 100 km",
    description:
      `Chilika Lake - Asia's largest brackish lagoon and a Ramsar site offers excellent birdwatching 
       and dolphin sightings. Migratory birds flock here from November to January. Combine an early 
       morning boat ride with a Konark afternoon for a perfect nature-and-heritage day."`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783751082/Chandrabhaga_beach_zaegge.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Nearby Attractions: The Odisha Heritage Triangle
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