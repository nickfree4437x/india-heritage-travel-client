"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Luxury Travellers",
    description:
      `A private chauffeur, pre-vetted heritage hotels, and a dedicated local guide handle most safety 
      logistics - the difference between steering your own safety and letting it be handled for you.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785224545/pexels-alby-13061525_l9dlpg.jpg",
  },
  {
    name: "Solo Travellers",
    description: 
      `Start with a well-known circuit - book your first few nights and airport transfer in advance. A 
      short guided tour for the first 2–3 days helps build local confidence quickly and quietly.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785224538/pexels-debraj-roy-282189167-13039168_vm6fgl.jpg",
  },
  {
    name: "Family and Multi-Generational Travellers",
    description:
      `Private vehicles, pre-arranged family accommodation, and a set itinerary remove the stress of public 
       transport and last-minute bookings - ideal for travelling with mothers, daughters, or grandmothers.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785224632/pexels-ki-u-ng-c-bich-2151926381-37422290_xjm9nz.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Luxury, Solo and Family Travel Tips
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