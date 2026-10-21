"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Sunder Nursery",
    description:
      `kind of like a heritage park that is landscaped and sits right next to the complex, with its own 
       Mughal era monuments, about five minutes on foot, give or take `,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784451201/Sunder_Nursery_Sep-2019_yfdugn.jpg",
  },
  {
    name: "Nizamuddin Dargah",
    description: 
      `the shrine of the Sufi saint Nizamuddin Auliya , it’s only a short walk away and one of Delhi’s most 
       atmospheric spiritual locations , plus there are well known Mughlai eateries around in those nearby 
       lanes `,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784451299/Nizamuddin_Dargah_and_Jamaat_Khana_Masjid__Delhi_ugx12t.jpg",
  },
  {
    name: "Purana Qila, (Old Fort): ",
    description:
      ` founded by Humayun himself, a short drive, and it’s one of Delhi’s oldest fortified places `,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784451357/Purana_Qila_01_vglfjm.jpg",
  },
  {
    name: "India Gate and Rashtrapati Bhavan",
    description:
      `roughly 15 to 20 minutes by car, they can be folded into one longer Delhi heritage day pretty easily `,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784451504/India_Gate_from_Rajpath_btxomr.jpg",
  },
  {
    name: "Lodi Garden",
    description:
      `a landscaped park with 15th century tombs, a short drive from the complex, and calm pause for a slower afternoon`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784451626/Lodhi_Gardens_on_a_sunny_day_1_fipfxc.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-1 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-3 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Nearby Attractions
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