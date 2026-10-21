"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Mehrauli Archaeological Park (Adjacent - Free Entry)",
    description:
      `Adjacent to Qutub is a 100-acre park with 70+ medieval monuments - India's earliest true arch 
      (Balban's Tomb), the stunning Jamali Kamali Mosque, and the atmospheric Rajon ki Baoli stepwell. 
      Entry is free and surprisingly uncrowded.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784177663/Jamali_Kamali_Masjid__Mehrauli_e8tyf0.jpg",
  },
  {
    name: "Garden of Five Senses (2 km)",
    description: 
      `This 20-acre public garden, designed around the five senses, features fragrant flowers, bamboo 
       groves, and art installations. A calm retreat from the Qutub Complex - best visited between 
       October and March.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784177775/Example_of_night_photography_at_The_Garden_of_Five_Senses__New_Delhi_end5fb.jpg",
  },
  {
    name: "Hauz Khas Village and Complex (3 km)",
    description:
      `Hauz Khas Complex, built around Alauddin Khilji's reservoir, features Firoz Shah's tomb and 
       madrasa in a park setting. The adjacent village offers Delhi's best dining, galleries, and 
       boutiques - an ideal post-Qutub evening.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784177900/Ferozesha_tomb_at_the_left_end_with_Northern_limb_of_the_Madrasa_p7a4ur.jpg",
  },
  {
    name: "Lodhi Garden (8 km)",
    description:
      `Lodhi Garden - 90 acres of 15th-century Lodi tombs in beautifully landscaped parkland. Bara 
       Gumbad, Shisha Gumbad, and Muhammad Shah's tomb complement Qutub's Sultanate story. Nearby, the Lodhi Art District adds a modern edge.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784178065/Lodhi_Gardens_on_a_sunny_day_1_xr1sbe.jpg",
  },
  {
    name: "Humayun's Tomb (10 km)",
    description:
      `Humayun's Tomb (1565) - Taj Mahal's predecessor and UNESCO-listed - pairs perfectly with Qutub for a day of Sultanate and Mughal heritage. 
       India Heritage Travel's signature Delhi experience.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784178141/Tomb_of_Humayun__Delhi_an0nd2.jpg",
  },
  {
    name: "Red Fort and Old Delhi (15 km)",
    description:
      `Old Delhi - Red Fort, Jama Masjid, and Chandni Chowk - offers the Mughal apex, complementing 
       South Delhi's Sultanate heritage. India Heritage Travel's one-day Old and New Delhi tour covers 
       the city's entire historical sweep.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784178249/Delhi_fort_ckc6hp.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-4 md:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Nearby Attractions - Building a South Delhi Heritage Day
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