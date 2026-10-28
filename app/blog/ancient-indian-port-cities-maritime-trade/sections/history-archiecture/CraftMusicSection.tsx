"use client";
import Image from "next/image";

// Major attractions data
const cityData = [
  {
    name: "Baluchari Silk Saris",
    description:
      `Baluchari Sari belongs to Bishnupur. The origin of this craft was in Baluchar, which is in Murshidabad, but later on, due to some flood occurrence, the craft got shifted to Bishnupur. It is famous for its intricate borders and the picture-like pallus, usually with the depiction of epic themes similar to those depicted on the temple panels.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792828828/DSC_5561-copy-scaled-1_ckjbqn.jpg",
  },
  {
    name: "Terracotta and the Bankura Horse",
    description:
      `The iconic craft of the area is the Bankura horse, a graceful figure made of terracotta which signifies devotion and valor. It has been practiced by the artists of the Panchmura village located at a distance of 22 km from Bishnupur, where an Urban Craft Center gives an insight into the process involved.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792828911/Bishnupur_Terracotta_Horse_2_vlkui6.jpg",
  },
  {
    name: "Dashavatar Cards and Music",
    description:
      `Dashavatar cards made by hand painting have been produced here. The ten incarnations of Vishnu are portrayed on these circular cards. These cards were a pastime of royalty in olden days. Bishnupur is a place where there is a strong tradition of classical music that is said to be called Bishnupur gharana of dhrupad.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792829001/Das_Avatar_taash_Bishnupur_ns51kc.webp",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c] mb-1">
            Baluchari Silk Saris
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