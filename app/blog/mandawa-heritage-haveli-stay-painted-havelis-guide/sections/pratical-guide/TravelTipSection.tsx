"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Luxury Travel Tips",
    description:
      `For the best Mandawa experience, book a heritage haveli suite rather than a standard hotel room, and choose a private English-speaking guide over the ones waiting near the fort. Consider combining Mandawa with a chauffeur-led Shekhawati tour instead of a rushed day trip from Jaipur, and request a roof or courtyard-facing room for the best light and views.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786768183/pexels-manishjangid-36470620_u9xwwx.jpg",
  },
  {
    name: "Family Travel Tips",
    description: 
      `Break haveli walks into shorter stretches - cobblestones and midday heat can tire young children. Choose havelis with courtyards or museums for better engagement, and carry sunscreen and snacks since dining options are limited in the narrow lanes.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786170800/pexels-aysegul-aytoren-46790226-38610320_br3ahy.jpg",
  },
  {
    name: "Solo Female Traveler Tips",
    description:
      `Book stays and guides through a reliable, women-friendly operator in advance. Dress conservatively, carry a light shawl for sun protection, and avoid crowded havelis in the morning - opt for guided quiet back streets instead. Always arrange private transport after sunset rather than relying on shared rides.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786170691/pexels-silverkblack-23225185_jgt9d1.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-4 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    

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