"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Heritage & Cultural Travel",
    description:
      `For heritage travellers focused on forts, palaces, and UNESCO sites, November to February is the ideal window - comfortable walking weather for exploring Amber Fort, Fatehpur Sikri, and Hampi without the heat getting in the way.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786335411/pexels-aman2905-33448397_b9ozlm.jpg",
  },
  {
    name: "Wildlife & Safari Season",
    description: 
      `The best time for an India wildlife tour is November to April - cooler weather and thinning vegetation draw animals to waterholes, making tiger sightings more likely in Ranthambore, Bandhavgarh, and Kanha. Most national parks close during the monsoon for breeding and forest renewal.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786335815/pexels-anuj-paul-fernando-2152981781-32531154_md9awr.jpg",
  },
  {
    name: "Luxury Travel Season",
    description:
      `The best time for luxury travel is winter (Nov–Feb), when palace hotels and heritage stays are at their best. For fewer crowds, consider late October, March, or the monsoon wellness season in Kerala - when premium properties offer lower rates without compromising service.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786335947/pexels-navlakha-33803739_j9qbsy.jpg",
  },
  {
    name: "Honeymoon & Couples Travel",
    description:
      `Winter and early spring are ideal for classic honeymoon routes - Udaipur's lakeside palaces, Kerala's houseboats, and Goa's beaches. For couples, the monsoon months offer a romantic rain-soaked alternative in Kerala or Coorg's misty hills.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786336081/pexels-asadphoto-3155725_tzgxfr.jpg",
  },
  {
    name: "Solo Female Travelers",
    description:
      `For solo female travellers, October–March offers longer daylight hours, reliable transport, and a more active tourist setup. India Heritage Travel's women-only tours include vetted female-friendly guides and stays - removing logistical guesswork even across changing seasons.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786336155/pexels-miriamespacio-18275080_mfxtec.jpg",
  },
  {
    name: "Budget Travel Season",
    description:
      `For value-based travellers, the shoulder months (April, May, September, October) and the monsoon stretch (June–September) offer the best bargains on hotels and tours. Off-season travel can significantly lower costs compared to the December–February rush`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1786336262/pexels-niepoddawajsie-pl-luk-2156505622-34240091_mcyyqx.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Best Time to Visit India by Travel Style
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