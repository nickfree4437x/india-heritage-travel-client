"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Buland Darwaza - The Gate of Magnificence ",
    description:
      `At 54 metres, the Buland Darwaza is India's tallest gateway and Fatehpur Sikri's most photographed 
      marvel. Built in 1601 to mark Akbar's Gujarat victory, it rises over 42 steps to Jama Masjid, its 
      red sandstone and marble inlay simply breathtaking.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783147525/pexels-shantanu09-6176676_rrgqsd.jpg",
  },
  {
    name: "Jama Masjid - One of India's Greatest Mosques ",
    description:
      `One of the first buildings at Fatehpur Sikri, the Jama Masjid impresses with its grand scale 
      and serene elegance. The sprawling courtyard accommodates tens of thousands of worshippers comfortably.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783147691/pexels-rsapmech-12470213_rgh6dx.jpg",
  },
  {
    name: "Tomb of Salim Chishti - A Marvel of White ",
    description:
      `The Tomb of Salim Chishti, positioned like a jewel in Jama Masjid's courtyard, is Fatehpur 
      Sikri's finest building - possibly one of India's most beautiful small-scale monuments.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783147811/pexels-shantanu09-6244983_qw5itc.jpg",
  },
  {
    name: "Panch Mahal - The Five-Storey Wind Palace ",
    description:
      `A unique five-storey open pavilion at Fatehpur Sikri, the Panch Mahal rises in diminishing 
      tiers with 176 varied columns. Designed to catch the breeze, it served as a pleasure pavilion
      and ladies' court.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783147957/pexels-vikash-yadav-440732339-28656901_wyutzm.jpg",
  },
  {
    name: "Diwan-i-Khas - The Hall of Private Audience ",
    description:
      `Fatehpur Sikri's most intriguing structure, the Diwan-i-Khas looks ordinary outside but opens 
      into a grand chamber. A carved central pillar supports a suspended walkway circling the upper level.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783148156/pexels-shravankhare-9467617_l87qil.jpg",
  },
  {
    name: "Jodha Bai's Palace - The Largest Royal Residence",
    description:
      `The largest building at Fatehpur Sikri, built for Akbar's wife Jodha Bai, showcases a Hindu-Islamic 
      blend - Rajput haveli design with peacock carvings and brackets, set within a Mughal complex of courtyards and gateways.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783148315/pexels-nishantdas-18238388_gvrqaz.jpg",
  },
  {
    name: "Birbal's House - The Minister's Jewel",
    description:
      `Birbal was Akbar's most celebrated courtier — the ninth and most famous of his 'Navaratnas' 
      (Nine Gems), renowned for his wit, wisdom, and the famous stories that have been told about 
      him across India for four centuries. `,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783148436/Birbal-House-Fatehpursikri1-768x512_jzmgdf.jpg",
  },
  {
    name: "Kumbhalgarh Fort",
    description:
      `Akbar heard public petitions at the Diwan-i-Aam, a massive red sandstone hall facing a wide 
      courtyard. The overwhelming scale was meant to convey the absolute power of the Mughal throne.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783148586/diwan-i-aam_ugg4t4.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white -mt-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Major Attractions - The Must-See Monuments Inside Fatehpur Sikri
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