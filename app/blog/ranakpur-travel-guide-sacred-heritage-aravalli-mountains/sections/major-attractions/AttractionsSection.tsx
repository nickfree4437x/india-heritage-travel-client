"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Chaumukha Adinath Temple",
    description:
      `The four-faced marble masterpiece at Ranakpur is the kind of sight that stops you mid-step - a single temple that makes the entire drive through the Aravallis feel like a pilgrimage in itself.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1788415728/surendra-raika-4D2ezQmc3kw-unsplash_ifziat.jpg",
  },
  {
    name: "Surya Narayan (Sun) Temple",
    description: 
      `Just a short walk from the main Jain complex, the Ranakpur Sun Temple - dedicated to Surya - features a unique chariot design with intricately carved horses, distinct from the marble detailing of the main temple. Though often overlooked by time-pressed visitors, it's well worth exploring.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1788415905/DSC_0281-2-1536x1024.jpg_jci79t.webp",
  },
  {
    name: "Amba Mata & Parshvanath Temples",
    description:
      `The Ranakpur complex also includes smaller shrines dedicated to Amba Mata and the 23rd Tirthankara, Parshvanath - adding to the site's deep spiritual and architectural richness.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1788416020/unnamed_wmsvn3.webpp",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Major Attractions in Ranakpur
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