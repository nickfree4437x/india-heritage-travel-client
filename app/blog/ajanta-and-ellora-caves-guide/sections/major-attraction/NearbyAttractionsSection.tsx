"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Bibi ka Maqbara",
    description:
      `Built in 1660 by Azam Shah for his mother, Bibi ka Maqbara is dubbed the 'Taj of the Deccan.' 
       The white marble and reflecting pool reward early morning visitors with a quiet, golden glow.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783596473/The_Tomb_of_Dilras_Banu_Begum_bbqhrt.jpg",
  },
  {
    name: "Daulatabad Fort",
    description:
      `Daulatabad Fort, 13 km from Aurangabad, rises on a 200-metre basalt cone - never breached by 
       direct assault. The 30-minute climb reveals a crocodile moat, dark passages, and concentric 
       walls. The Deccan views from the top are extraordinary.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783596560/Daulatabad_Fort_a_view_nstlcr.jpg",
  },
  {
    name: "Panchakki Water Mill",
    description:
      `The 17th-century Sufi shrine complex houses the Panchakki water mill, which ground grain for 
       pilgrims using water from an 8 km underground channel. The tranquil gardens and tank make it 
       a refreshing hour-long break from the nearby cave sites."`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783505671/unnamed_1_z3fdaw.webp",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-6 md:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Nearby Attractions in Aurangabad
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
                    via wikipedia
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
                    via wikipedia
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