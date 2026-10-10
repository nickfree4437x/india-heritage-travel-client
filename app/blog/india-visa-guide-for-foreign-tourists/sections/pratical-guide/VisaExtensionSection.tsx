"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Solo Female Travellers",
    description:
      `The visa process doesn't change by gender, but leaving a comfortable buffer before departure helps - giving you time to lock in accommodation and transfers with a trusted, women-safe operator before you arrive.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786170691/pexels-silverkblack-23225185_jgt9d1.jpg",
  },
  {
    name: "Family Travellers",
    description: 
      `Each family member, including infants, needs their own e-Visa application and passport - group applications are only available for registered tour operators in certain cases. Fill all applications in one sitting to keep travel dates and passport details consistent.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786170800/pexels-aysegul-aytoren-46790226-38610320_br3ahy.jpg",
  },
  {
    name: "Luxury Travellers",
    description:
      `If your India trip spans multiple regions or includes private charters, the 1-year multiple-entry e-Visa is often a better choice than the 30-day version. It also allows quick side trips to Bhutan or the Maldives without reapplying.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786426039/jonathan-borba-pcewpEFZFQM-unsplash_p2mbgx.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-4 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Visa and Entry Tips for Luxury, Family and Solo Travellers
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