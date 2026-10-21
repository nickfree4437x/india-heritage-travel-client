"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Ranthambore National Park (Rajasthan)",
    description:
      `Ranthambore National Park is one of India's most famous tiger reserves, offering high chances of 
       spotting the Royal Bengal Tiger amid ancient forts, lakes, and dry forests. Its dramatic scenery 
       and rich biodiversity make it a favourite for photographers and first-time safari-goers.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784437060/Tiger_from_Ranthanbore_Sawai_Madhopur_Rajasthan_India_12.10.2014_k1zk7d.jpg",
  },
  {
    name: "Jim Corbett National Park (Uttarakhand)",
    description: 
      `Established in 1936, Jim Corbett National Park is India's oldest national park and the birthplace 
       of Project Tiger. With dense forests, rivers, and grasslands, it is home to Bengal tigers, Asian 
       elephants, leopards, crocodiles, and over 600 bird species, offering an unforgettable safari 
       experience.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784437314/Wilderness_Corbett_National_Park_1_dyx0lb.jpg",
  },
  {
    name: "Bandhavgarh National Park (Madhya Pradesh)",
    description:
      `Bandhavgarh National Park is famous for having one of the highest tiger densities in India, making 
       it one of the best places to witness these magnificent big cats in the wild. Along with tigers, 
       visitors can spot leopards, deer, sloth bears, and a wide variety of birdlife amidst lush forests 
       and ancient ruins.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784437415/A_leopard_in_the_Bandhavgarh_National_Park_in_madhya_pradesh__India_jrpm6u.jpg",
  },
  {
    name: "Kanha National Park (Madhya Pradesh)",
    description:
      `Kanha National Park, which inspired Kipling's The Jungle Book, is one of India's largest and most 
       beautiful reserves. Its meadows and forests shelter Bengal tigers, leopards, wild dogs, and the rare 
       Barasingha a paradise for nature lovers.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784437551/Tiger_Kanha_National_Park_dbffy4.jpg",
  },
  {
    name: "Kaziranga National Park (Assam)",
    description:
      `Kaziranga National Park, a UNESCO World Heritage Site, is globally renowned for protecting the 
       world's largest population of Indian One-Horned Rhinoceroses. Its floodplains also shelter wild 
       elephants, tigers, water buffalo, and an incredible variety of birds.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784437615/Beauty_of_Kaziranga_National_Park_razehn.jpg",
  },
  {
    name: "Gir National Park (Gujarat)",
    description:
      `Gir National Park is the only place on Earth where the Asiatic Lion can be seen in the wild. Beyond 
       its famous lions, the park supports a rich ecosystem that includes leopards, hyenas, jackals, 
       crocodiles, antelopes, and more than 300 species of birds`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784437710/Gir_lion-Gir_forest_junagadh_gujarat_india_unskad.jpg",
  },
  {
    name: "Pench National Park (Madhya Pradesh & Maharashtra)",
    description:
      `Pench National Park with its thriving tigers and teak forests inspired The Jungle Book. Spot 
       tigers, leopards, wild dogs, sloth bears, and birds in one of Central India's most rewarding 
       safari destinations.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784437845/Indian_grey_hornbill_at_Pench_national_park__April__2024__13_rsf42j.jpg",
  },
  {
    name: "Tadoba-Andhari Tiger Reserve (Maharashtra)",
    description:
      `Tadoba-Andhari Tiger Reserve has earned a reputation as one of the best places in India to see wild 
       tigers. Its open forests, lakes, and bamboo groves provide excellent wildlife viewing opportunities, 
       while sightings of leopards, sloth bears, gaur, and crocodiles add to the park's appeal.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784437970/Panthera_tigris_tigris_Tidoba_20150306_oijl8n.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-4 md:py-7">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Top National Parks for Wildlife Safaris in India
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