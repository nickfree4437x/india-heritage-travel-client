"use client";

import Image from "next/image";

// Major attractions data
const cityData = [
  {
    name: "Ranthambore Fort",
    description:
      `Ranthambore Fort sits on a plateau rising 700 feet above the forest, holding gates, stepwells, palaces, and temples — including the 12th–13th century Jain temples of Sumatinath and Sambhavanath, Shiva temples, Rani Haveli, Battees Khamba, and Naulakha Gate. Remember, the fort lies inside a tiger reserve.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792404793/Ranthambhore_Fort_awa46y.jpg",
  },
  {
    name: "Trinetra Ganesh Temple",
    description:
      ` The Trinetra Ganesh Temple is present inside the fort, and this temple is one of the most popular temples of Ganesh in the country. The God has three eyes in this temple, and the temple gets visited by tens of thousands of pilgrims on Wednesdays and on festival days.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792404885/Trinetra-Ganesh-Temple-Ranthambore-Park_mo0272.webp",
  },
  {
    name: "Padam Talao and Jogi Mahal",
    description:
      `The Padam Talao is the biggest lake within the park and also one of the major sources of water for wildlife. The water lilies grow from June to September. The Jogi Mahal located next to this lake used to be the hunting camp for the royalty but now is a guesthouse that is not open for everyone.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792404972/download_bjok7h.jpg",
  },
  {
    name: "Raj Bagh Ruins and the Lakes",
    description:
      ` The Raj Bagh Talao is regarded as the most elegant of the lakes and is a favorite abode of the sambar deer, whereas the Raj Bagh ruins which have domes, walls, and pillars are connected with the Jaipur royal lineage. The kingfishers, storks, and marsh crocodiles are found at Malik Talao.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792405080/images_er5pjs.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-1 md:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
            Ranthambore Luxury Heritage and Wildlife: The Major Attractions
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