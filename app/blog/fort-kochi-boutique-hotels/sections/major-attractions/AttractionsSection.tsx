"use client";

import Image from "next/image";

// Major attractions data
const cityData = [
  {
    name: "St Francis Church",
    description:
      `Completed in 1503 and rebuilt in stone in 1516, St. Francis Church is India's oldest church and houses Vasco da Gama's tomb. Its whitewashed facade, punkah-cooled interior, and Dutch-era tombstones make it essential on any Fort Kochi heritage trail.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789728731/mohnish-landge-r84kDlv19CI-unsplash_eydqn5.jpg",
  },
  {
    name: "Santa Cruz Basilica",
    description:
      `Santa Cruz Basilica was built by the Portuguese in the 16th century, elevated to cathedral status, then demolished by the British and rebuilt in the late 19th century in Indo-European style. Its beautifully painted ceilings and Gothic arches make it a Fort Kochi highlight.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789729248/Santa_Cruz_Basilica_-_200_MP_03_1_hzrsuz.jpg",
  },
  {
    name: "Chinese Fishing Nets",
    description:
      ` The famous shore operated cantilevered lifting nets, thought to have been introduced along with Chinese traders in the 14th century, are the most iconic sight of Fort Kochi. These nets are best captured during sunrise or sunset when local fishermen operate them under varying lights.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789729317/Chinese_Fishing_Net_Raising_Birds_Sunrise_Ashtamudi_Kollam_Mar22_A7C_01784_pradnm.jpg",
  },
  {
    name: "Mattancherry Palace (Dutch Palace)",
    description:
      `Mattancherry Palace was built by the Portuguese for the Raja of Kochi in 1555 and later renovated by the Dutch. It houses a remarkable collection of mythological murals, royal portraits, and artefacts - and is listed on UNESCO's tentative World Heritage list for its exquisite Kerala temple-style paintings.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789729383/Mattancherry_Palace_DSC_0899_zhxgy9.jpg",
  },
  {
    name: "Paradesi Synagogue & Jew Town",
    description:
      `In the historic Jew Town area beside the spice markets stands the Paradesi Synagogue - one of the oldest functioning synagogues in the Commonwealth. The surrounding streets, once the heart of Kochi's spice trade, are now filled with antique shops, art galleries, and cafés housed in old colonial warehouses.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789729458/Jewish_synagouge_kochi_india_skghy9.jpg",
  },
  {
    name: "Dutch Cemetery",
    description:
      `Consecrated in 1724, this quiet, palm-shaded cemetery holds the graves of Dutch and later British colonists - a moving, understated counterpoint to Fort Kochi's grander monuments.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789729694/Dutch_Cemetery_-_Chinsurah_-_Hooghly_2017-05-14_8528_mrwwwy.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2.5 md:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
            Major Attractions in Fort Kochi
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