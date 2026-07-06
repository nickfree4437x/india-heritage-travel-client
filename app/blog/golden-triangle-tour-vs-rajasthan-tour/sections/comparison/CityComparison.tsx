"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Delhi",
    description:
      "This 3,000-year-old capital city of India has everything you can ask for, from the mosques of Old Delhi's Mughal era to the colonial-era roads of New Delhi and high-rise buildings of Gurugram.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782375019/martijn-vonk-X7hmhWhEN1A-unsplash_wmr5ys.jpg",
    highlights: ["Humayun's Tomb", "Red Fort", "Qutub Minar", "Chandni Chowk"],
  },
  {
    name: "Agra",
    description:
      "Taj Mahal would definitely be enough reason to visit - however, Agra has much more to offer, like a whole empire of Mughal architecture.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782375158/arun-geetha-viswanathan-8goGYCLzrLs-unsplash_spc5yv.jpg",
    highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Baby Taj"],
  },
  {
    name: "Jaipur",
    description:
      "Known as the Pink City, it marks the end of the Golden Triangle and the gateway to Rajasthan. There is no better place than the Amber Fort, City Palace, and Jantar Mantar to view examples of magnificent Rajput architecture.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782375230/satyam-bhardwaj-qnO1zuuRN7Q-unsplash_nd2jnw.jpg",
    highlights: ["Amber Fort", "City Palace", "Jantar Mantar", "Johari Bazaar"],
  },
  {
    name: "Jodhpur",
    description:
      "The Blue City has been ruled by Mehrangarh Fort which stands at an altitude of 125 m above sea level over a blue expanse of buildings.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782375385/fred-nassar-8iPpS80D_Mk-unsplash_msohxw.jpg",
    highlights: ["Mehrangarh Fort", "Umaid Bhawan Palace", "Clock Tower"],
  },
  {
    name: "Jaisalmer",
    description:
      "The Golden City emerges from the sands of the Thar Desert like a mirage. Jaisalmer Fort which is a living fort with thousands of residents within its walls.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782375430/sergio-capuzzimati-R1CGt8exzLg-unsplash_ojf7xr.jpg",
    highlights: ["Jaisalmer Fort", "Gadisar Lake", "Sam Sand Dunes"],
  },
  {
    name: "Udaipur",
    description:
      "The City of Lakes is romance personified for Rajasthan, with the City Palace towering along the lakeshore and the Lake Palace Hotel floating in the middle of the lake.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782375492/vivek-1pNm4DFts4U-unsplash_ajnjaj.jpg",
    highlights: ["City Palace", "Lake Palace", "Evening Cruise"],
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 sm:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c]">
           Destinations Covered: A City-by-City Breakdown
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
                  <h3 className="text-white text-[18px] font-semibold flex items-center gap-2">
                    {city.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="mt-2">
                <p className="text-[10px] sm:text-[11px] text-gray-600 font-light">
                    via unsplash
                  </p>
                {/* City Name (Desktop) */}
                <h3 className="hidden mt-2 md:flex text-[14px] md:text-[16px] font-bold text-[#2c2c2c] mb-2 items-center gap-2">
                  {city.name}
                </h3>

                {/* Description */}
                <p className="text-[12px] mt-2 md:mt-0 sm:text-[13px] leading-relaxed text-gray-600 font-light line-clamp-3 md:line-clamp-4">
                  {city.description}
                </p>

                {/* Divider */}
                <div className="my-3 h-px bg-gray-100"></div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5">
                  {city.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="bg-[#f8f6f3] text-[#2c2c2c] text-[8px] sm:text-[10px] px-2.5 py-1 rounded-full border border-gray-100"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}