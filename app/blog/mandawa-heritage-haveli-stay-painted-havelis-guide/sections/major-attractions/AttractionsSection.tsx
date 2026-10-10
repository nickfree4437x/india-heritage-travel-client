"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Mandawa Fort (Castle Mandawa)",
    description:
      `Mandawa Fort, built in 1735 by Thakur Nawal Singh, is now a luxury hotel and the town's landmark. Its mirror-and-tile interiors echo the Sheesh Mahal at Amber Fort, while from the top, you get sweeping views over Mandawa's painted rooftops and narrow streets.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1788955165/castle-mandawa-hotel_ihuzvs.jpg",
  },
  {
    name: "Goenka Double Haveli",
    description: 
      `Murmuria Haveli, one of Mandawa's most photographed buildings, is a pair of linked homes with frescoes covering nearly every surface. The walls tell stories from mythology, framed with flowers and figures in deep, richly set colours.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1788955296/images_qf8jia.jpg",
  },
  {
    name: "Murmuria Haveli",
    description:
      `People point to the painted faces here. The shapes look bold, with a style that feels close to modern graphic art. Because of that, Murmuria Haveli gets a lot of attention from photographers. It also draws visitors who study haveli design.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1788955402/20211212_105703-1024x473_lbgepn.jpg",
  },
  {
    name: "Gulab Rai Ladia Haveli",
    description:
      `Goenka Haveli is a lavishly decorated mansion where myth, history, and early-20th-century life intertwine. Look closely - you'll spot cars and colonial figures alongside traditional Rajasthani motifs.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1788955521/Goenka-Double-Haveli_gcbz3v.jpg",
  },
  {
    name: "Bansidhar Newatia Haveli",
    description:
      `Built in 1920, this haveli's walls depict Hindu deities, Rajput kings, peacocks, and British soldiers side by side - a vivid visual timeline of the era in which it was built.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1788955702/rs0v8xk070h0bwmjfq61bz22ba2h_1602770967_shutterstock_1702014322_m8dtxx.avif",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-2">
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