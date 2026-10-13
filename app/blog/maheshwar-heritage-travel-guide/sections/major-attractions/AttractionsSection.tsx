"use client";

import Image from "next/image";

// Major attractions data
const cityData = [
  {
    name: "Ahilya Fort",
    description:
      `Ahilya Fort is Maheshwar's defining landmark and, for many, the reason to visit. Parts now serve as heritage hotels, while the museum, Ahilyabai's gaadi darbaar, and fort walls remain open to daytime visitors - with the river view as its finest reward.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789549419/minislider_fkgo1q.jpg",
  },
  {
    name: "Ahilya Ghat and Baneshwar Temple",
    description:
      `Ahilya Ghat, near the fort, is the heart of daily activity in Maheshwar. From here, boats take visitors along the Narmada for a water-level view of the fort and a visit to Baneshwar Temple, which stands in the middle of the river.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789549529/images_nzr75h.jpg",
  },
  {
    name: "Kashi Vishwanath and Rajarajeshwara Temples",
    description:
      `There is a group of Shiva temples located near the fort and ghats, and Kashi Vishwanath Temple and Rajarajeswara (also known as Rajarajeshwar Temple) are among the most popular ones. Their intricately carved shikharas and courtyards deserve the same attention as the fort, especially during evening aarti.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789549673/temple-outer-view-from_mxmpos.jpg",
  },
  {
    name: "Rai Praveen Mahal",
    description:
      `Built in 1618 by Raja Indramani for Rai Praveen, a celebrated poet, singer and dancer of the court, this small one-storey structure sits in the Anand Mahal gardens. It remains one of Orchha's most poetic details - a palace built not for wars or gods, but for the arts.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789315404/Raj_Mahal_Jaipur_2019__1_hwozxm.jpg",
  },
  {
    name: "Rehwa Society and the Weaving Lanes",
    description:
      `In 1978, Richard and Sally Holkar formed the Rehwa Society, which revived the dying art of hand weaving in Maheshwar and now employs about 250 weavers working 100 to 150 looms in the fort complex. The society's workshop is open to tourists, as well as the surrounding weaver communities, Mominpura and Dalalpura, where sarees are woven on family looms and not in showrooms.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789549777/images_1_qe1gfe.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2.5 md:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
            Major Attractions in Maheshwar
          </h2>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cityData.map((city, index) => (
            <div
              key={`${city.name}-${index}`}
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