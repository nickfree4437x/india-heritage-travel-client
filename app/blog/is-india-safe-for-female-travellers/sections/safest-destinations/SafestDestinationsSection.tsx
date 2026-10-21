"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Jaipur, Udaipur and the Rajasthan Heritage Circuit",
    description:
      `Rajasthan's heritage cities offer strong tourist infrastructure, well-lit areas, and guides and hotels accustomed to solo female travellers. It's a natural starting point for a women-only heritage tour.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785040793/meric-dagli-uADXI1v10us-unsplash_wwku6p.jpg",
  },
  {
    name: "Kerala's Backwaters and Hill Stations",
    description: 
      `Kerala is routinely cited as one of the most traveller-friendly states in India, with a gentler pace, high literacy, and an estabished houseboat and homestay circuit that suits solo travellers particularly well.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785040886/abhishek-prasad-ii0oWs5abCo-unsplash_hutl2k.jpg",
  },
  {
    name: "Rishikesh",
    description: 
      `Rishikesh's strong wellness community and ashram culture make it a natural draw for solo female travellers - retreats, yoga, and Ganges-side walks feel safe and welcoming.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785040973/saurabh-kumar-qDvc3Q2G7lo-unsplash_xozjyd.jpg",
  },
  {
    name: "Mumbai, Bengaluru and Chennai",
    description: 
      `India's major metros offer round-the-clock activity, app-based transport, and a cosmopolitan social scene - a steady, well-lit introduction for travellers before venturing further.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785041067/satyajeet-mazumdar-fCsmYKhiHGo-unsplash_t3yyu0.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-4 md:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           The Safest Destinations in India for Women Travellers
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
                    Image via unsplash
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
                    Image via unsplash
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