"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Rambagh Palace - Jaipur",
    description:
      "Former residence of Maharaja Sawai Man Singh II, now a Taj heritage hotel. Its Mughal gardens are immaculate, polo grounds active, and Suvarna Mahal restaurant among the finest in Indian heritage hotels.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782556316/Rambagh_Palace_Jaipur_k4gjer.jpg"
  },
  {
    name: "Rajmahal Palace RAAS - Jaipur",
    description:
      "Built in 1729 and managed by RAAS group, known for excellent restorations. This palace hotel features a relatively contemporary interior compared to others in Jaipur, ideal for travellers seeking a less ornate heritage experience.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782556469/Rajmahal_Palace_RAAS_Jaipur_hpnygt.jpg",
  },
  {
    name: "Samode Palace - Near Jaipur",
    description:
      "Located 45 km from Jaipur in an often-overlooked town, this 475-year-old family-owned palace is worth the stop. Its Sheesh Mahal, with mirrored ceilings and candlelit ambience, is more moving than the famous one at Amber Fort.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782556629/Samode_Palace_Jaipur_jibfwf.jpg",
  },
  {
    name: "Umaid Bhawan Palace - Jodhpur",
    description:
      "1943 Art Deco palace in Rajasthan, part royal residence and part Taj hotel. The marble mosaic basement pool, a rarity in its time, is unforgettable.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782556699/Umaid_Bhawan_Palace_Jodhpur_jnhoia.jpg",
  },
  {
    name: "RAAS Jodhpur",
    description:
      "Located right next to Mehrangarh Fort, RAAS Jodhpur offers fort views from the pool, bar, and select rooms. Its understated modern sandstone architecture makes the towering fort look even more impressive. Rooftop pool sunsets are postcard-perfect.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782556876/RAAS_-_Cond%C3%A9_Nast_Traveler_j7ooxn.jpg",
  },
  {
    name: "Taj Lake Palace - Udaipur",
    description:
      "A boat ride takes you to this white-marble palace in Lake Pichola. Built in 1746, famous since Octopussy, it still delights with night-time lake views - ask for this option when booking.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782556963/Taj_Lake_Palace_Udaipur_xxwym9.jpg",
  },
  {
    name: "The Oberoi Udaivilas - Udaipur",
    description:
      "A 2002-built luxury hotel on Lake Pichola with Rajput-Mughal architecture and top-tier service. Its semi-private pool villas are exceptional - perfect for those who value luxury over history.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782557066/The_Oberoi_Udaivilas_Udaipur_gm5btx.png",
  },
  {
    name: "Shiv Niwas Palace - Udaipur",
    description:
      "HRH Group's royal guesthouse within City Palace, host to British royalty. Early palace access without crowds and the crescent-shaped pool courtyard offer a more intimate stay than larger Taj properties.",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782557166/Shiv_Niwas_Palace_Udaipur_pmbm6q.jpg",
  },
  {
    name: "Suryagarh - Jaisalmer",
    description:
      "A fort-inspired yellow sandstone property in Jaisalmer with jharokhas and carved grilles. It provides space, quiet, and unobstructed desert views - unlike stays inside the crowded fort",
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1782557340/pexels-navlakha-33667487_bpns2h.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-2 sm:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c]">
           Top Heritage Hotels in Rajasthan
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
                    Image via unsplash
                  </p>
                {/* City Name (Desktop) */}
                <h3 className="hidden mt-3 md:flex text-[14px] md:text-[15px] font-bold text-[#2c2c2c] mb-2 items-center gap-2">
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