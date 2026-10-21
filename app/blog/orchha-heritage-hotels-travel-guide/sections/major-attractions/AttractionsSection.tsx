"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Orchha Fort Complex",
    description:
      `The fort is the centerpiece of your visit - a quadrangle on a river island housing Raja Mahal, Jahangir Mahal, Sheesh Mahal, and Rai Praveen Mahal. The admission fee covers entry to all these palaces, plus an evening light and sound show narrating Bundela stories against the illuminated walls.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789314985/Raja_Mahal__Orchha__Madhya_Pradesh__India_vytlzn.jpg",
  },
  {
    name: "Jahangir Mahal",
    description: 
      `Built by Bir Singh Deo and completed around the 17th century, this four-storey palace is a masterpiece of Orchha architecture eight domes, carved stonework, and stairs leading to a top view of the Betwa River and surrounding forest. Legend says it was built in a single night to honour Emperor Jahangir's visit, though it actually took years to complete.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789315161/Le_Jehangir_Mahal__Orchha___8451914174_xe0yms.jpg",
  },
  {
    name: "Raja Mahal",
    description:
      `The more ancient and solemn of the two major palaces, distinguished by its interior murals – one of the best-preserved frescoes in this region of India, painted on various religious and royal themes in bright and legible colours.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789315404/Raj_Mahal_Jaipur_2019__1_hwozxm.jpg",
  },
  {
    name: "Rai Praveen Mahal",
    description:
      `Built in 1618 by Raja Indramani for Rai Praveen, a celebrated poet, singer and dancer of the court, this small one-storey structure sits in the Anand Mahal gardens. It remains one of Orchha's most poetic details a palace built not for wars or gods, but for the arts.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789315404/Raj_Mahal_Jaipur_2019__1_hwozxm.jpg",
  },
  {
    name: "Chaturbhuj Temple",
    description:
      `Standing tall above Orchha's skyline, Chaturbhuj Temple offers unforgettable views of the Ram Raja Temple, Betwa River and old town rooftops - especially stunning at sunset. Under the Archaeological Survey of India, it ranks among the tallest temples in the area.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789316468/Chaturbhuj_Temple__Orchha_wn7wyd.jpg",
  },
  {
    name: "Ram Raja Temple",
    description:
      `Unlike a typical temple, Ram Raja Temple is built like a palace with domed structures instead of traditional temple architecture. Open from early morning till late night, its evening aarti followed by a gun salute is one of India's most unique religious ceremonies.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789316993/Ram_Raja_Temple_w9y3af.jpg",
  },
  {
    name: "Orchha Cenotaphs (Chhatris)",
    description:
      `About fourteen cenotaphs of Orchha's rulers stand at Kanchan Ghat on the southern bank of the Betwa, with Bir Singh Deo's chhatri featuring the most ornate Mughal-influenced dome. The view from the bridge - cenotaphs on one side, river on the other - is among Orchha's most stunning, especially at sunrise or sunset.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789317241/chhatris-cenotaphs_jb60kl.jpg",
  },
  {
    name: "Betwa River and Ghats",
    description:
      `The Betwa splits into several arms as it passes Orchha, with ghats on both banks where daily life unfolds laundry, washing, walking, and boats drifting past the cenotaphs and fort walls. An evening boat ride, as the sun sets behind the fort's silhouette, is among the cheapest yet most fascinating experiences here.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789317597/caption_mtpqlf.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Major Attractions in Orchha
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