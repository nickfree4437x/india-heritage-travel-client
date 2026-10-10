"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Taj Mahal",
    description:
      `The Taj Mahal - built by Shah Jahan between 1631–1653 - still carries an almost unreal presence. A 
       UNESCO site since 1983, it's India's most visited monument. For the full experience, visit at 
       sunrise - and check our complete Taj Mahal Travel Guide for all the practical details.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784526230/pexels-kowsiee-18722577_h2f2di.jpg",
  },
  {
    name: "Agra Fort",
    description: 
      `Akbar's 16th-century Agra Fort, built in red sandstone, was the Mughal seat until the capital 
       shifted to Delhi. Inside its 2.5 km walls are palaces, halls, and the Musamman Burj - where Shah 
       Jahan reportedly watched the Taj Mahal in his final days. A UNESCO site (1983) - visit our Agra 
       Fort Travel Guide for all the details.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784526360/pexels-daciana-cristina-visan-2149801141-31301782_cebcqj.jpg",
  },
  {
    name: "Fatehpur Sikri",
    description:
      `Akbar built Fatehpur Sikri as his new Mughal capital in the 16th century, but water shortages 
       forced its abandonment within years. The result is a remarkably preserved Mughal town, with the 
       Buland Darwaza and Jama Masjid as its crowning features. UNESCO listed it in 1986 - for more, 
       visit our Fatehpur Sikri Travel Guide.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784279555/Diwan-i-khas__Red_fort_jqecdq.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Top Heritage Sites in Agra
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