"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Taj Mahal, Agra (40 km)",
    description:
      "It may be an obvious choice, but it's one of the best single-day experiences anywhere. Reach the Taj Mahal at sunrise in Agra, explore the complex with a private guide, and absorb its beauty without feeling rushed.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783149204/pexels-shlok-rana-2150773572-31410457_qx7pqj.jpg",
  },
  {
    name: "Agra Fort (40 km)",
    description:
      "Akbar's big Agra Fort is where you can almost read the Mughal story in red sandstone and white marble, starting from Akbar's earlier works, then moving through Shah Jahan's smoother, more refined additions.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783149311/pexels-frans-van-heerden-201846-1022698_iwgfca.jpg",
  },
  {
    name: "Chand Baori Stepwell, Abhaneri (120 km)",
    description:
      "This is one of those astonishing places that feels unreal. It's a 9th-century stepwell with 3,500 narrow steps placed in strict geometric symmetry, and they drop about 20 metres down into the ground.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783149400/pexels-sanjiv-kumar-singh-535147289-38068359_atmz8p.jpg",
  },
  {
    name: "Bharatpur Bird Sanctuary - Keoladeo National Park (30 km)",
    description:
      "Asia's finest bird sanctuaries, just 30 km from Fatehpur Sikri. From October to March, it teems with migratory birds. Pair an early morning rickshaw ride here with a visit to Fatehpur Sikri for an unforgettable day.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783149516/pexels-bala-12009772_a9wgmg.jpg",
  },
  {
    name: "Mathura and Vrindavan (70 km via Agra)",
    description:
      "These sacred cities are closely tied to Lord Krishna, offering a calmer, more reflective experience a peaceful counterpoint to the grandeur of India's famous forts and palaces. The spiritual atmosphere, temple chants, and riverside rituals create a deeply soulful contrast.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1783149646/pexels-capture2805-12429847_sfseih.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
            Nearby Attractions - What to Combine With Fatehpur Sikri
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
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="mt-2">
                <p className="text-[10px] sm:text-[11px] text-gray-600 font-light">
                  via pexels
                </p>

                {/* City Name */}
                <h3 className="mt-3 md:mt-4 text-[14px] md:text-[16px] font-bold text-[#2c2c2c] mb-2 flex items-center gap-2">
                  {city.name}
                </h3>

                {/* Description */}
                <p className="text-[12px] sm:text-[13px] leading-relaxed text-gray-600 font-light line-clamp-3 md:line-clamp-4">
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