"use client";

import Image from "next/image";

// Major attractions data
const cityData = [
  {
    name: "Raj Niwas Palace (Dholpur Palace)",
    description:
      `Dholpur Palace, built from red sandstone, commands the Chambal valley across 13 acres. Its rooms blend European décor - Dutch tiles and Belgian glass chandeliers - with a Great Hall of period furniture, while the royal suite is reached via a staircase painted with birds and foliage.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791968043/unnamed_tbavz5.webp",
  },
  {
    name: "Babur's Lotus Garden (Badshahi Bagh)",
    description:
      ` Located on a hill about 50 kilometers south of Agra, the Lotus Garden represents one of the few Mughal gardens that were constructed in ancient times and have survived in fragments. According to Babur's writings, the garden had features like a mosque, a bath, a well, rock-cut water spouts, and, at present, its display of a step well`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791972502/images_3_k90v2p.jpg",
  },
  {
    name: "Machkund Temple",
    description:
      ` Machkund, about 4 kilometers away from the town, is considered to be a pilgrimage spot associated with King Muchchchukand, located next to a tank filled with lotuses and shrines that are considered to be hundreds of years old. It is visited by devotees, mainly during festive occasions, and provides a picturesque view early in the morning.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791973048/Dholpur-12_lmvpwx.jpg",
  },
  {
    name: "Shergarh Fort",
    description:
      ` Shergarh Fort, located near the river Chambal, belongs to the time of Sher Shah Suri, who rebuilt and renamed it in 1540. Now it is a ruined fort located in a picturesque place where an additional guide should help to find it.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791973120/unnamed_1_l7d4pc.webp",
  },
  {
    name: "Talab-e-Shahi and Nihal Tower",
    description:
      `The lake of Talab-e-Shahi, with its hunting house for the royal family, is a good place to observe birds in winter as migratory birds gather here. Distance varies from source to source; hence, a drive should be expected from the city. The Nihal Tower was erected in the memory of Raja Nihal Singh.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791973197/images_4_xg0q7m.jpg",
  },
  {
    name: "Van Vihar and Ramsagar Sanctuaries",
    description:
      ` Van Vihar, a former royal game reserve of around 25 sq km on the Vindhyan plateau, and Ramsagar, a lake wildlife sanctuary of around 34 sq km, provide habitat for deer, crocodiles, and various species of birds. These places are more suited for nature drives than for sighting large animals.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791973257/Van-Vihar-Wildlife-Sanctuary-Dholpur_ejy2e6.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-1 md:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
            Dholpur Royal Heritage: The Major Attractions
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
                  <p className="mt-2 text-[12px] sm:text-[13px] text-gray-600 font-light">
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