"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Podar Haveli Museum",
    description:
      `Podar Haveli (1902), now a museum run by the Podar family, is Nawalgarh's top heritage attraction. Restored frescoes and exhibits of turbans, jewellery, and paintings make it the perfect first stop.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789034706/unnamed_q7qx2q.webp",
  },
  {
    name: "Nawalgarh Fort (Bala Qila)",
    description: 
      `Bala Qila, Nawalgarh's first fort, was built in 1737 in the heart of town. Much of it has merged into the modern town, but the mirrored Sheesh Mahal and a painted ceiling depicting a bird's-eye view of Jaipur remain intact.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789035366/Bala_qila_alwar_II_2_583e97e0aa_sfrkdq.jpg",
  },
  {
    name: "Aath Haveli Complex",
    description:
      `Aath Haveli is a cluster of eight interconnected mansions built by one family - one of Nawalgarh's most atmospheric stops precisely because it hasn't been fully restored. Peeling paint and quiet, half-lived-in courtyards offer an unfiltered sense of how these mansions have aged over a century.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789035508/aath-haveli-exclusive_xdhm08.jpg",
  },
  {
    name: "Morarka Haveli",
    description:
      `Just a brief distance away from the Podar Haveli is the Morarka Haveli, constructed in the early part of the twentieth century, which has the distinction of preserving a set of fresco cycles intact and of serving, currently, as a research facility on the painted tradition of Shekhawati, thus constituting an excellent destination for visitors.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789035654/morarka-haveli_mth8qu.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py- md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Major Attractions in Nawalgarh
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