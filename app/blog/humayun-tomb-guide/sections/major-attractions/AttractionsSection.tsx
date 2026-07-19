"use client";

import Image from "next/image";

const cityData = [
  {
    name: "The Main Tomb and Cenotaph Chamber",
    description:
      `The main tomb rises from its plinth with a striking double dome - an innovation that made the 
       exterior look taller while keeping the inner chamber proportional. Humayun's cenotaph sits at 
       the centre, surrounded by other Mughal family burials, including his wife Bega Begum.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784446003/pexels-tarun-malik-69422259-8385840_mw0bqe.jpg",
  },
  {
    name: "Isa Khan's Tomb",
    description: 
      `Near the main entrance stands Isa Khan Niazi's octagonal tomb - built about 20 years before Humayun's 
       Tomb. Its sunken garden and colourful glazed tiles create a sharp contrast with the more austere main 
       mausoleum.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784447545/Isha_Khan_Niyazi_s_tomb_-_Delhi_297_HT_ow6s9l.jpg",
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
    name: "Charbagh Garden and Water Channels",
    description:
      `The restored Charbagh, with its geometric water channels and raised walkways, feels like a destination 
       in itself. In the early morning, light slides along the channels, perfectly mirroring the tomb - 
       one of the complex's most satisfying views.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784447682/Humayun_s_Tomb__Delhi_-_Visit_During_WCI_2016__37_dhdo9i.jpg",
  },
  {
    name: "Nila Gumbad and Bu Halima's Tomb",
    description:
      `The Nila Gumbad ("Blue Dome"), just outside the complex, features striking blue glazed tilework - a 
       rare decorative example in Delhi. Nearby, Bu Halima's Tomb and garden offer a calmer, less-visited 
       pause from the main mausoleum.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784447817/Nila_Gumbad_view_zopcb5.jpg",
  },
  {
    name: "Arab Sarai and Afsarwala Complex",
    description:
      `Arab Arab Sarai was put in place to house the Persian and Central Asian craftsmen who worked on the 
       tomb, and the gateway still looks quietly impressive, even if it does not shout. `,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784448033/Afsahwallakimasjid_1_tlvlzn.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-4 md:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Attractions Inside the Tomb Complex
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
                    via wikipedia
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
                    via wikipedia
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