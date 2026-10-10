"use client";

import Image from "next/image";

const cityData = [
  {
    name: "Photography Tips",
    description:
      `For iconic shots, visit the Taj and Amber Fort at sunrise; ask permission before photographing locals. 
       Time your visits for golden hour at Udaipur's Lake Pichola and Jodhpur's Mehrangarh Fort, and use a 
       polarising filter on marble surfaces.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785391646/pexels-animesh-paul-150064-35634116_iaotkk.jpg",
  },
  {
    name: "Solo Traveler Tips",
    description: 
      `Privately guided solo travel in India removes transport and navigation stress. For added companionship, 
      some travellers mix a private itinerary with a short women-only group segment - perfect for shared lunches 
      and market strolls.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785391718/pexels-shootsaga-36436170_qaiu6j.jpg",
  },
  {
    name: "Family & Group Travel Tips",
    description:
      `Mother-daughter trips, multi-generational family journeys, and friend-group getaways all benefit 
      from the same private-touring structure, adapted with more flexible pacing for different energy 
      levels and interests. `,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1785224632/pexels-ki-u-ng-c-bich-2151926381-37422290_xjm9nz.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

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