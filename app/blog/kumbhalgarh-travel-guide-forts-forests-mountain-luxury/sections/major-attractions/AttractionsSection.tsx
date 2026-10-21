"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Kumbhalgarh Fort & the 36-km Wall",
    description:
      `The highlight tour: walk through Ram Pol, make your way up to the temples and watchtowers and along a section of the wall from where you can look out over the Aravallis in all their glory.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1788326971/Kumbhalgarh_055_orpqyq.jpg",
  },
  {
    name: "Badal Mahal (Palace of the Clouds)",
    description: 
      `The royal quarters above, which are painted in light hues of blue, cream, and coral, are the most photogenic quarters in the entire fort and the ideal place for viewing sunsets.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1788327248/unnamed_rikfop.webp",
  },
  {
    name: "Neelkanth Mahadev Temple",
    description:
      `The splendid temple dedicated to Lord Shiva, located in the vicinity of the fort and has the largest monolith Shiva linga in the whole of Rajasthan.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1788327313/unnamed_1_xgmamg.webp",
  },
  {
    name: "Kumbhalgarh Wildlife Sanctuary Safari Zone",
    description:
      `The accommodation can be accessed from near the entrance of the fort where jeep safaris are available. They are organized by the forest department or by India Heritage Travel.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1788326809/Wilderness_and_existance_1_yrkxws.jpg",
  },
  {
    name: "The Light and Sound Show",
    description:
      `45-minute narration of Mewar's history in the evening - a truly different experience from what you get during the day - that brings alive the walls of the fort under the night sky.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1788327574/07_840x345_51de3eb73d_hhojdc.webp",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Major Attractions Inside and Around Kumbhalgarh
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