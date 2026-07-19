"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Shore Temple",
    description:
      `The Shore Temple Mahabalipuram's signature monument is an early 8th-century granite temple 
       by the Bay of Bengal. Its salt-worn surface tells stories of centuries. Visit at sunrise or 
       sunset for golden light.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783859622/Shore_Temple_-Mamallapuram_-Tamil_Nadu_-N-TN-C55_1_sfite7.jpg",
  },
  {
    name: "Five Rathas (Pancha Rathas)",
    description: 
      `The Five Rathas are five single-rock granite shrines near the Shore Temple, each in a different 
       style. Unfinished carvings reveal Pallava craftsmanship in motion.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783859733/Ratha_landscape_better_vjmmfi.jpg",
  },
  {
    name: "Arjuna's Penance",
    description:
      `This giant bas-relief gods, elephants, and a rock crack as the Ganges spans two boulders. 
       Scholars still debate if it's Arjuna's penance or Bhagiratha's story, making it endlessly 
       fascinating."`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783859996/Mahabalipuram_pano2_xw1znr.jpg",
  },
  {
    name: "Krishna's Butter Ball",
    description:
      `A giant spherical boulder balancing on a slope, defying gravity. Engineers and colonial 
       officers couldn't budge it. Today, it's a photo favourite - standing beside it makes you feel 
       tiny."`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783860225/Krishna_Butterball_Below_Mahabalipuram_Sep22_A7C_02490_1_kk2gnz.jpg",
  },
  {
    name: "Cave Temples",
    description:
      `The Varaha Cave (Vishnu's boar) and Mahishasuramardini Cave (Durga's battle) are shaded, 
       quiet, and packed with some of the finest carvings stone you can read up close."`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783860559/Vsvarahacave_zamljw.jpg",
  },
  {
    name: "Mahabalipuram Beach and Lighthouse",
    description:
      `Mahabalipuram's beach is a working coastline with fishing boats and cafés, offering views 
       of the Shore Temple. The lighthouse both ancient and modern gives another angle across the 
       granite hills and sea."`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783860650/Mahabalipuram_Lighthouse__India_tpvgxc.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Major Attractions: What to See in Mahabalipuram
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