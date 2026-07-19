"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Dakshinachitra ",
    description:
      `is basically a kind of museum that shows South Indian architecture, crafts and also folk 
       performances, it’s around 45 minutes north from where you start. `,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783863036/Dakshinachitra_Heritage_Museum_ty8io4.jpg",
  },
  {
    name: "Madras Crocodile Bank Trust",
    description: 
      `Then there’s the Madras Crocodile Bank Trust, a conservation park by the East Coast Road, and honestly 
       it’s the one families usually love for a relaxed visit.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783863143/Crocodile_Bank_tour_with_Antilog_Vacations_at_Chennai_South_India_bczr7v.jpg",
  },
  {
    name: "Muttukadu Boat House ",
    description:
      `If you’re going along the coast, Muttukadu Boat House is a decent stopn backwater boating, 
       plus water sports, so it works well en route between Chennai and Mahabalipuram. "`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783863251/Muttukadu_Boat_House_Chennai_A_Perfect_Picnic_Spot_xm3lno.jpg",
  },
  {
    name: "Kanchipuram City",
    description:
      `For temple and silk lovers, Kanchipuram is the “City of a Thousand Temples” and also 
       India’s silk-weaving center, about 1.5 hours inland. "`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783863397/download_otp99t.jpg",
  },
  {
    name: "Puducherry",
    description:
      `And don’t forget Puducherry (Pondicherry), the old French colonial town, roughly 2 hours 
       south. It’s often stitched together with Mahabalipuram on longer Tamil Nadu plans."`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783863560/Arial_View_of_French_Colony_Pondicherry_Credit__http___bit_ly_2b8FjxB_View_more_Videos__http___bit_vbldsq.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Nearby Attractions Worth the Detour
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