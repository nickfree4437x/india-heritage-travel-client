"use client";

import Image from "next/image";

const cityData = [
  {
    name: "January",
    description:
      `December offers sunny, dry days across Rajasthan and the north - perfect for heritage tours. Desert nights are cold, but the south stays warm, making it a good time for a north–south combination.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786256237/pexels-saakshi-yadav-88955303-14523797_woyc1g.jpg",
  },
  {
    name: "February",
    description: 
      `Feels a bit like January, only it’s slowly getting warmer. Mornings are still cool , afternoons turn comfortably warm, and in northern India the gardens start to wake up.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786256438/pexels-nandhukumar-14844302_k1bss5.jpg",
  },
  {
    name: "March",
    description:
      `March offers warm days and cool evenings - a late-season window for the Golden Triangle before summer arrives. Holi's colourful celebrations make it lively, but expect more crowds around the main festival.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786256566/varun-verma-3fFo8T1fEZc-unsplash_gaigwc.jpg",
  },
  {
    name: "April",
    description:
      `April sees heat rising fast across the north, especially Rajasthan - midday temperatures can make outdoor sightseeing uncomfortable. Most travellers head to the Himalayan foothills - Shimla, Manali, and Darjeeling - for a refreshing retreat.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786256538/pexels-tawqeer-239818784-27945032_d281fz.jpg",
  },
  {
    name: "May",
    description:
      `May is the hottest stretch across the northern plains and deserts - making heritage touring risky. But it's peak season for the Himalayas - Ladakh's passes open, and Himachal Pradesh and Sikkim are at their most inviting.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786257908/pexels-rf-nascimento-486659724-16488806_na30ox.jpg",
  },
  {
    name: "June",
    description:
      `June brings the southwest monsoon to Kerala in the first half - marking the start of the wet season in the south. The north stays hot and becomes more humid, though the main rains are still weeks away.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786257985/pexels-freestockpro-12661315_nwu2ia.jpg",
  },
  {
    name: "July",
    description:
      `By July, the monsoon is fully underway across most of India, with heavy rainfall concentrated in Kerala, Goa, and the Western Ghats - making their waterfalls and hills look their most dramatic. Heritage touring in Rajasthan and the north slows down considerably.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786258395/pexels-ds-babariya-756428940-27604428_gjlqoq.jpg",
  },
  {
    name: "August",
    description:
      `August continues the monsoon with steady rain along the west coast - Kerala's backwaters swell into a deep, lush green, offering stunning visuals despite the humidity. It's also when Onam festival preparations begin.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786258555/pexels-rajeev-sammy-1056923-12064459_w2gljf.jpg",
  },
  {
    name: "September",
    description:
      `September sees the monsoon receding from the north, while southern and central India may still experience significant rainfall. It's a transitional pause - offering lower rates for travellers who can work around occasional showers.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786258734/pexels-shivanshu-bhardwaj-334691890-15867666_snavd9.jpg",
  },
  {
    name: "October",
    description:
      `November sees the monsoon fully retreat, leaving behind green landscapes and pleasant weather. Diwali's glow continues into the month, with festive lights and celebrations still filling the air.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786258917/pexels-nisanth-panicker-1703892518-28399265_bjj5qn.jpg",
  },
  {
    name: "November",
    description:
      `November sees the monsoon fully retreat, leaving behind green landscapes and pleasant weather. Diwali's glow continues into the month, with festive lights and celebrations still filling the air.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786259272/pexels-yogendras31-13979460_oie5xw.jpg",
  },
  {
    name: "December",
    description:
      `December is peak season in the Golden Triangle and Rajasthan - cool, dry, sunny days with cold desert nights. Hotels and heritage stays get snapped up fast, especially around Christmas and New Year - so plan ahead.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786259412/pexels-sanket-barik-2808574-7846656_eybabe.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Month-by-Month Weather Guide
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