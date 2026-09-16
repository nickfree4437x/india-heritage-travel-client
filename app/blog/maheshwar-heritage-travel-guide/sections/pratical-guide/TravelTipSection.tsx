"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Luxury Travel Tips",
    description:
      `Maheshwar is best experienced with time, not as a day trip. Stay near Ahilya Fort, use a private car from Indore, and hire a local guide. For combining it with Mandu or Omkareshwar, book a private tour with good stays.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786768183/pexels-manishjangid-36470620_u9xwwx.jpg",
  },
  {
    name: "Family Travel Tips",
    description: 
      `Maheshwar is easy for families with kids of any age- the fort's level terraces are comfortable to walk, the river here is calm for boating, and weaving demonstrations engage children far more than a standard monument tour.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786170800/pexels-aysegul-aytoren-46790226-38610320_br3ahy.jpg",
  },
  {
    name: "Solo Female Traveler Tips",
    description:
      `Maheshwar is calm and solo-friendly, particularly for women. Pre-arrange your driver and guide, choose a decent heritage stay, avoid the ghats after dark, and consider group travel for extra ease.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786170691/pexels-silverkblack-23225185_jgt9d1.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-5">
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
                    via pexels
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
                    via pexels
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