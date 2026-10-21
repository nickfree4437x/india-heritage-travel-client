"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Lahori Gate and Chhatta Chowk",
    description:
      `Lahore Gate, the Red Fort's main entrance, hosts the Prime Minister's Independence Day address. 
       Chhatta Chowk - a vaulted arcade market - once sold imperial silk and jewellery; today it offers 
       souvenirs and handicrafts.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784279299/Lahori_Gate_with_Ramparts_-_Red_Fort_-_Delhi_2014-05-13_3126_jz7y9z.jpg",
  },
  {
    name: "Diwan-i-Aam (Hall of Public Audience)",
    description: 
      `The Diwan-i-Aam is the pillared hall where the emperor met the public, seated on a raised marble 
       throne inlaid with precious stones. Its red sandstone columns frame the courtyard, making it one of the fort's most photogenic spaces.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784279445/Diwan-i-Am_-_Western_Facade_-_Red_Fort_-_Delhi_2014-05-13_3194_mkkss4.jpg",
  },
  {
    name: "Diwan-i-Khas (Hall of Private Audience)",
    description:
      `The Diwan-i-Khas once housed the legendary Peacock Throne, with a Persian couplet inscribed: 
       "If there is a paradise on earth, it is this, it is this, it is this." Its marble pavilion, 
        floral inlay, and silver ceiling made it the fort's most opulent corner.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784279555/Diwan-i-khas__Red_fort_jqecdq.jpg",
  },
  {
    name: "Rang Mahal, Khas Mahal and Moti Masjid",
    description:
      `Rang Mahal ("Palace of Colours") housed the emperor's wives, with a mirrored ceiling and marble 
       water channel. Khas Mahal served as his private residence, while Moti Masjid - the "Pearl Mosque" - 
       is a small white marble mosque added by Aurangzeb.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784279644/Red_Fort_04b_ysqpdr.jpg",
  },
  {
    name: "Hammam and Nahr-i-Behisht",
    description:
      `The Hammam served as the fort's royal baths, with hot and cold water piped through channels for 
       the imperial family. Running alongside several pavilions, the Nahr-i-Behisht - the marble water 
       channel - cooled the private apartments, remaining one of the fort's most elegant engineering details.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784279765/Hammam_Red_Fort_ksm6nz.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-4 md:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Major Attractions Inside the Red Fort
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