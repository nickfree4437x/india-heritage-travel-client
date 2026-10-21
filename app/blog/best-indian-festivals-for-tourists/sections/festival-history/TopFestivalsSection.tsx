"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Holi: The Festival of Colors",
    description:
      `Holi - the Festival of Colours - brings joyful celebrations with coloured powder and water. Mathura and Vrindavan are the most famous spots for its vibrant, multi-day festivities. For a more refined celebration, Rajasthan's heritage hotels offer curated Holi experiences with natural colours.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785906174/pexels-photowalabhaiya-33552203_hjkltn.jpg",
  },
  {
    name: "Diwali: The Festival of Lights",
    description: 
      `Diwali marks the victory of light over darkness, with lamps, rangoli, and fireworks lighting up the country. Jaipur and Varanasi are particularly stunning, and Varanasi's Dev Deepawali festival illuminates the ghats about two weeks after.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785906226/pexels-lara-jameson-8887168_i3gumf.jpg",
  },
  {
    name: "Pushkar Camel Fair: Rajasthan's Desert Spectacle",
    description:
      `This week-long fair in the Thar Desert - once a cattle market - now features camel races, folk music, and hot-air balloon rides over golden dunes. Held in October–November, it coincides with Kartik Purnima and the sacred Pushkar Lake pilgrimage.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785906361/prashant-bamnawat-_mCrYUvcIuI-unsplash_c01qte.jpg",
  },
  {
    name: "Durga Puja, Kolkata: UNESCO-Listed Art on the Streets",
    description:
      `Durga Puja in Kolkata brings ten days of creative pandals with handmade clay idols, each with its own theme. The immersive evening walks between celebrations - with drummers and glowing streets - are unforgettable.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785906503/pexels-arnab-halder-140434280-33233329_qozxzz.jpg",
  },
  {
    name: "Navratri & Garba: Nine Nights of Dance in Gujarat",
    description:
      `Navratri honours Durga's nine forms with nine nights of celebration. Gujarat's Garba dances - circling a lamp - start slow and rise to a festive finale. Ahmedabad hosts big gatherings, but smaller venues offer a cozier feel.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785906670/pexels-djvvadi-17264037_srl2a4.jpg",
  },
  {
    name: "Onam: Kerala's Harvest Celebration",
    description:
      `Onam celebrates Kerala's harvest with flower carpets, festive feasts, Kathakali, and the famous snake boat races. Held in late August or early September, it's best combined with a houseboat stay in the Alleppey backwaters.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785906789/pexels-jithinmurali-8566097_srbhwa.jpg",
  },
  {
    name: "Pongal: Tamil Nadu's Thanksgiving Festival",
    description:
      `January's Pongal is a four-day harvest festival honouring the sun god, with overflowing rice and jaggery symbolising abundance. Jallikattu bull-taming in rural Tamil Nadu adds a unique cultural dimension to the celebration.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785906899/pexels-telugu-itihasamtv-2156459592-34217667_yphni0.jpg",
  },
  {
    name: "Hornbill Festival: Nagaland's Tribal Showcase",
    description:
      `Nagaland's Hornbill Festival (December) gathers tribes from across the state for ten days of authentic dance, music, and craft displays. For many, it's the finest entry point into Northeast India's tribal traditions - a region still underrated on the global travel map.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785906994/pexels-alex-fanaso-2153283068-32656681_pjpbjz.jpg",
  },
  {
    name: "Desert Festival, Jaisalmer: Rajasthan's Winter Carnival",
    description:
      `Jaisalmer's Desert Festival, held in winter, transforms the Sam sand dunes with camel polo, folk dance, turban-tying contests, and moonlit music against the Golden Fort backdrop. It pairs perfectly with a luxury desert camp or sunset camel safari.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785907083/pexels-prince-desert-camp-104745785-9497622_rhodtq.jpg",
  },
  {
    name: "Kumbh Mela: The World's Largest Peaceful Gathering",
    description:
      `The Kumbh Mela's sacred river dips are believed to wash away sins and break the cycle of rebirth. The 2027 Ardh Kumbh in Haridwar and Simhastha in Nashik are unforgettable but require careful planning - yet they're a lifetime experience.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785907213/pexels-rajesh-s-balouria-1289088-5265403_xzknja.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           The 10 Best Indian Festivals for Tourists
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