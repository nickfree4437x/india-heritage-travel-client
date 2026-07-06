"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Kandariya Mahadeva Temple - The Pinnacle",
    description:
      `Kandariya Mahadeva is Khajuraho's largest and tallest temple, built by King Vidyadhara in the early 
      11th century. Rising 31 metres, its shikhara is flanked by 84 subsidiary towers, creating remarkable
      architectural complexity.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783257163/varun-pyasi-AZ4y6Bc3qeI-unsplash_mg4rb3.jpg",
  },
  {
    name: "Lakshmana Temple - The Early Masterpiece",
    description:
      `Lakshmana Temple, built by King Yashovarman around 954 CE, is the earliest complete temple in 
      the Western Group. It exemplifies the pancharatha plan, with rich carvings and a remarkable 
      three-headed Vishnu inside.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783253328/deepak-gupta-w_tW5yW7h4c-unsplash_jzg3e3.jpg",
  },
  {
    name: "Vishvanatha Temple - The Shiva Shrine",
    description:
      `King Dhangadeva built the Vishvanatha Temple around 1002 CE, dedicated to Shiva with a fine 
      linga inside. The outer friezes are renowned for their apsara figures celestial dancers who 
      appear elsewhere at Khajuraho but here achieve a unique, sensuous refinement.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783257407/India-5749_-_Visvanatha_Temple_-_Flickr_-_archer10__Dennis_zyfwyn.jpg",
  },
  {
    name: "Devi Jagadambi Temple",
    description:
      `Originally Vishnu-dedicated, later converted to a goddess shrine, the Devi Jagadambi Temple 
      features some of Khajuraho's finest carvings including the iconic celestial beauty applying 
      kajal, a remarkably lifelike figure.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783257650/Khajuraho_Devi_Jagadambi_Temple_2010_ylcuyl.jpg",
  },
  {
    name: "Chitragupta Temple - The Sun God's Shrine",
    description:
      `The only temple at Khajuraho dedicated to Surya, the Chitragupta Temple features a five-foot 
      solar chariot image one of the finest Chandela sculptures. Its exterior frieze of a hunting 
      scene, with horses and warriors, provides a lively window into courtly life.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783257819/Chitragupta_temple_belonging_to_Western_Group_of_Temples_at_Khajuraho_in_Madhya_Pradesh_gdaz8i.jpg",
  },
  {
    name: "Parsvanatha Temple, Eastern Group - A Hidden Masterpiece ",
    description:
      `Many art historians consider the Parsvanatha Temple the most finely carved at Khajuraho. Its 
      apsara sculptures a nymph removing a thorn, applying an anklet, playing with a ball show such
       acute physical and psychological insight that they rival the best ancient sculpture worldwide. `,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783257927/Le_temple_de_Parshvanath__Khajuraho___8638423582_enum9r.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-4 md:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Major Attractions - The Temples in Detail
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
                  <h3 className="text-white text-[18px] font-semibold flex items-center gap-2">
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
                <h3 className="hidden mt-2 md:flex text-[14px] md:text-[16px] font-bold text-[#2c2c2c] mb-2 items-center gap-2">
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