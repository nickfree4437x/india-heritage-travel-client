"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Gangaikondacholapuram, Tamil Nadu",
    description:
      `kind of the lesser visited sibling place of Thanjavur’s Big Temple, it was put in place to remember Rajendra Chola I’s northern march , not the most crowded, you feel the calm quicker there.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784611165/GangaiKonda_Cholapuram_Front_View_mrmv3o.jpg",
  },
  {
    name: "Aihole, Karnataka",
    description: 
      `more than 125 early Chalukyan temples tucked in a quiet village kind of setting , people often skip it just to rush to the better known Pattadakal nearby, though it’s worth it. `,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784611263/8th_century_Durga_temple_exterior_view__Aihole_Hindu_temples_and_monuments_3_onkztb.jpg",
  },
  {
    name: "Bekal Fort, Kerala",
    description:
      `a pretty intact 17th century coastal fort, with wide sweeping views over the Arabian Sea, and honestly it feels much less busy than Kerala’s usual backwater loop.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784611365/Bakel_Fort_Beach_Kasaragod7_lbm1og.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Hidden Gems and Underrated Heritage Sites
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