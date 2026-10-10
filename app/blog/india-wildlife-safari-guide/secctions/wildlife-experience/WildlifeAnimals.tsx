"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Royal Bengal Tiger",
    description:
      `The Royal Bengal Tiger is India's most iconic wildlife species and the highlight of every safari 
       adventure. Found in famous reserves like Ranthambore, Bandhavgarh, Kanha, and Tadoba, this 
       magnificent predator is known for its power, beauty, and elusive nature, making every tiger sighting 
       a truly unforgettable experience`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784379336/a-g-YuQgNYku1M8-unsplash_mecobv.jpg",
  },
  {
    name: "Asiatic Lion",
    description: 
      `The Asiatic Lion is one of the rarest big cats in the world and can only be found in the wild at Gir National
       Park in Gujarat. Slightly smaller than its African cousin, this majestic lion represents one of 
       India's greatest wildlife conservation success stories.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784379461/mika-brandt-UlipBbZpweg-unsplash_dhgwpb.jpg",
  },
  {
    name: "Indian One-Horned Rhinoceros",
    description:
      `Recognisable by its thick, armour-like skin and single horn, the Indian One-Horned Rhinoceros is 
       most commonly seen in Kaziranga National Park. Watching these gentle giants roam the grasslands is 
       one of the most unique wildlife experiences in India.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784379543/shreyashka-maharjan-fn1xG8MtdN8-unsplash_cir5zg.jpg",
  },
  {
    name: "Indian Elephant",
    description:
      `Indian Elephants are highly intelligent and social animals often seen moving in family herds through 
       forests and riverbanks. National parks such as Jim Corbett, Nagarhole, Periyar, and Bandipur offer 
       excellent opportunities to observe these magnificent creatures in their natural habitat.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784378381/gautam-arora-dCnHbVhM2w8-unsplash_orkjer.jpg",
  },
  {
    name: "Indian Leopard",
    description:
      `The Indian Leopard is one of the country's most adaptable predators, found across forests, hills, 
       and rocky landscapes. Although naturally shy and difficult to spot, destinations like Jhalana 
       Leopard Reserve, Satpura, and Ranthambore are among the best places to encounter this elusive big cat.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784379719/rajit-galaiya-QtCGRi6gGlU-unsplash_hkcl7m.jpg",
  },
  {
    name: "Sloth Bear",
    description:
      `Known for its shaggy black coat and distinctive long snout, the Sloth Bear is commonly found in the 
       forests of Kanha, Satpura, Bandhavgarh, and Pench. Despite its calm appearance, it is a powerful 
       wild animal best admired from a safe distance.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784379782/ojas-raj-X2tNjtZ218w-unsplash_unje2o.jpg",
  },
  {
    name: "Barasingha & Deer Species",
    description:
      `India's forests are home to several beautiful deer species, including the rare Barasingha (Swamp Deer), 
       Sambar, Chital (Spotted Deer), and Barking Deer. These graceful herbivores are an essential part of 
       the ecosystem and are frequently spotted during most wildlife safaris.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784379934/prateek-katyal-eBO3rIm91Cs-unsplash_bsxlyo.jpg",
  },
  {
    name: "Exotic Birds & Reptiles",
    description:
      `Beyond its famous mammals, India is a paradise for birdwatchers and nature enthusiasts, with over 
       1,300 bird species including the Indian Peacock, hornbills, kingfishers, and eagles. Many national 
       parks are also home to fascinating reptiles such as marsh crocodiles, gharials, monitor lizards, 
       and a variety of snake species.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784380017/zdenek-machacek-vIx55PnjL58-unsplash_scandt.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Wildlife You Can Spot on an Indian Safari
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
                    Image via unsplash
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
                    Image via unsplash
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