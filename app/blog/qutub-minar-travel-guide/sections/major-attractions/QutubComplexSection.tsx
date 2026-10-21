"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Quwwat-ul-Islam Mosque - India's First Mosque",
    description:
      `Quwwat-ul-Islam Mosque - India's first post-conquest mosque - was built using columns from 27 
       Hindu and Jain temples, creating a unique Indo-Islamic style. Later enlarged by Iltutmish and 
       Khilji, it now features a screen wall, prayer hall, and the Iron Pillar.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784175312/oldest-mosque-quwwat-ul-islam-featured-750x500_lx7pqo.jpg",
  },
  {
    name: "The Iron Pillar of Delhi - The Ancient Metallurgical",
    description: 
      `The 7-metre Iron Pillar - weighing 6 tonnes - dates to Chandragupta II and originally stood in 
       Udayagiri. Remarkably rust-resistant for 1,600 years, its high phosphorus content creates a 
       protective layer. A fenced testament to ancient Indian metal craft.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784175495/Iron_Pillar__Delhi__May_2008_zgartw.jpg",
  },
  {
    name: "Alai Darwaza - The Most Beautiful Gateway in Delhi",
    description:
      `The Alai Darwaza (1311) - Alauddin Khilji's southern gateway - is celebrated as Delhi's finest 
       single monument. Featuring true pointed arches, red sandstone with white marble inlay, and intricate 
       lattice screens, it marks a milestone in Indian Islamic architecture.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784175575/Alai_Darwaza_pcovdu.jpg",
  },
  {
    name: "The Alai Minar - Ambition Left Unfinished",
    description:
      `Khilji's Alai Minar was meant to be twice the height of Qutub Minar - nearly 150 metres - but 
       only a 24-metre stump was completed before his death in 1316. It stands today as a powerful 
       symbol of abandoned ambition.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784175734/94a86f7112d6c5c91f1fa7dae1a6a76315757ebc-1024x576_quabvp.avif",
  },
  {
    name: "Tomb of Iltutmish",
    description:
      `Iltutmish's 1235 mausoleum - one of India's first - dazzles with dense red sandstone carvings 
       inside. The collapsed dome opens it to the sky, making it quieter and arguably the finest 
       stonework in the entire Qutub Complex."`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784175948/Tomb_of_Altamash_1_anyile.jpg",
  },
  {
    name: "Tomb of Alauddin Khilji and His Madrasa",
    description:
      `The ruined tomb and madrasa of Alauddin Khilji, tucked in the southwestern corner, remain the 
       Qutub Complex's quietest corners. Despite the collapsed dome and damaged walls, the scale hints 
       at Khilji's grand vision for the site as a centre of Islamic power and learning.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784176026/Alauddin_s_Madrasa__3362834285_ckqzu1.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           The Qutub Complex - Twelve Monuments in One Sacred Precinct
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