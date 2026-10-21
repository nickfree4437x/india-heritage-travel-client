"use client";

import Image from "next/image";

// Major attractions data
const cityData = [
  {
    name: "Raj Kund and the terraces",
    description:
      `High up the hill, the Raj Kund pool offers one of North India's most photographed swims. Lower down, the Shatranj Bagh terrace serves complimentary evening tea and cake as the light turns gold - one of Rajasthan's finest sunset experiences.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791615184/pexels-absoluteabhi-38794583_e4zdsn.jpg",
  },
  {
    name: "Zip-lining across the Aravallis",
    description:
      `The Neemrana Flying Fox, set up in 2009, spans five cables across the hills - a surprising thrill for active travellers. After a short climb, briefing, and practice run, you zip down with the palace behind you. The experience takes about two hours; check with the hotel for age and weight restrictions.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791615336/Facade_Premises_Neemrana_Fort_Palace_1_i9giwl_cfeg0l.avif",
  },
  {
    name: "The open-air amphitheatre",
    description:
      `The open-air amphitheater organizes concerts, dances, and theater plays during its season. On arrival, you should inquire to know the schedule of the program to make your stay worthwhile through a play.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791615441/pexels-vijesh-vijayan-891485037-19867674_hsteq9.jpg",
  },
  {
    name: "A private heritage walk",
    description:
      `The best way to learn about the fort is on foot with an expert guide. A heritage walk tour will give you insights into the history of each level and gateways and passages in a manner unmatched by any solitary exploration. `,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791615628/pexels-ventarafilms-36213006_fouq9f.jpg",
  },
  {
    name: "Romantic fort stays",
    description:
      `Neemrana suits perfectly couples looking for an environment with candlelit terraces, roof-top viewing of stars, and privacy. It’s a great choice for destination wedding celebrations and milestone events.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791615743/Jatayu_Mahal_-_Fort_View_Neemrana_Fort-Palace_Alwar_Rajasthan_mnhy00.avif",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2.5 md:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Major Attractions and Best Experiences
          </h2>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cityData.map((city, index) => (
            <div
              key={`${city.name}-${index}`}
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