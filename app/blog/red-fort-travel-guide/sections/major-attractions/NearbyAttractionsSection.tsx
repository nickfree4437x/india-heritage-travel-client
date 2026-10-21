"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Jama Masjid",
    description:
      `India’s largest mosque, like a 10 minute walk from the Red Fort and one more of Shah 
       Jahan’s big commissions, not to be missed. `,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784281037/pexels-rsapmech-12470213_v5dojp.jpg",
  },
  {
    name: "Chandni Chowk",
    description: 
      `that historic market street running westward from the fort, thick with food stalls, spice 
       bazaars and jewelry lanes , kinda busy in a good way. `,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784281169/Gurudwara_Sisganj_Sahib_Chandni_Chowk_19_su9fg7.jpg",
  },
  {
    name: "Raj Ghat",
    description:
      `Mahatma Gandhi’s memorial, a short drive away, placed in calm gardens where it’s easy to slow 
       down. `,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784281292/Gandhi_Memorial_tdxexp.jpg",
  },
  {
    name: "Salimgarh Fort",
    description:
      `the neighboring 16th-century stronghold, usually folded into a Red Fort visit, because you can 
       cross through the connecting bridge. `,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784281407/Entry_to_salimgarh_Fort_lfir6u.jpg",
  },
  {
    name: "India Gate and Humayun’s Tomb",
    description:
      `farther south, both work as natural add ons for a wider Delhi heritage day, and they just fit the route.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1784281500/India_Gate__All_India_War_Memorial_pbtbd1.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-6 md:py-4">
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