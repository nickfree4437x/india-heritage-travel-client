"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Jagatpita Brahma Mandir (Brahma Temple)",
    description:
      `Brahma Temple is the undeniable showstopper of Pushkar - the only temple in India dedicated to Lord Brahma. Visit at dawn for the aarti and explore before the midday crowd arrives.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1787113775/Pushkar05_amtku4.jpg",
  },
  {
    name: "Savitri Mata Temple",
    description: 
      `Savitri Mata Temple sits on a hilltop above Pushkar, reached by a 30–45 minute climb or ropeway. The reward is a stunning panoramic view - the entire lake, temple town, and desert stretching to the horizon.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1787113994/Savitri_mata_mandir_gz0ukn.jpg",
  },
  {
    name: "Varaha Temple",
    description:
      `Varaha Temple - dedicated to Lord Vishnu's boar incarnation - is one of Pushkar's oldest surviving shrines. It offers a quieter, more peaceful alternative to the crowds around Brahma Temple.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1787114174/188190667Pushkar_Varaha_Temple_Main_rbnt01.jpg",
  },
  {
    name: "Rangji Temple",
    description:
      `Rangji Temple - built in a bold South Indian Dravidian style with a tall gopuram - stands out against Pushkar's usual Rajasthani skyline. A must-see for architecture enthusiasts.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1787114263/188190885Pushkar_Rangji_Temple_Main_uliarq.jpg",
  },
  {
    name: "Pushkar Lake ghats",
    description:
      `Don't miss Pushkar Lake - plan at least one sunrise and one sunset here during your stay. The changing light over the ghats is unforgettable.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1787113632/Bathing_Ghats_on_Pushkar_Lake__Rajasthan_ygjjrh.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-1 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Major Attractions in Pushkar
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