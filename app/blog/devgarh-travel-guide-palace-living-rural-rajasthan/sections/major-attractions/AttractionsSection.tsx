"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Deogarh Mahal Complex",
    description:
      `Deogarh Mahal's courtyards, Sheesh Mahal, rooftop terraces, and family museum are worth a guided walk - even if you're not staying. But an overnight stay is what makes the experience feel complete.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1787540855/794597_fd4032cb16f84cbab9b5f5000e911a33_mv2_im009v.avif",
  },
  {
    name: "Anjna Fort and Seengh Sagar",
    description: 
      `A short drive from Devgarh, Anjna Fort offers wide Aravalli views, while Seengh Sagar Lake attracts local farmers and migratory birds. Lakeside picnics and boat outings are a favourite half-day activity for guests staying at Devgarh's heritage hotels.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1787542725/thick-walls-weed-choked_mvrvfq.jpg",
  },
  {
    name: "The Village Bazaar",
    description:
      `Devgarh's market streets - narrow, arcaded, and largely untouched by mass tourism - are worth an unhurried walk. Look for spice stalls, working artisans, and quick tea stops - the everyday Rajasthani street life that has mostly faded from larger heritage cities.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1787543147/cow-main-street-deogarh-rajasthan-india-deogarh-also-known-as-devgarh-town-municipality-nearby-rajsamand-city-302259575_wxb3ou.webp",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Major Attractions in and Around Devgarh
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
                {/* <p className="text-[10px] sm:text-[11px] text-gray-600 font-light">
                    Image via wikipedia
                  </p> */}
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