"use client";
import Image from "next/image";

// Major attractions data
const cityData = [
  {
    name: "Camel and Jeep Safaris at Sunset",
    description:
      `The traditional Osian activity is an afternoon camel ride into the scrub desert to finish just before sunset. The jeep version is more active. Settle the details upfront, preferably with your guide or driver, so that there are no misunderstandings.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792496181/pexels-karthick-227261600-12041147_gkutcy.jpg",
  },
  {
    name: "Private Desert Dinners and Folk Music",
    description:
      `The ultimate luxury experience comes when all you want is simplicity: a dinner table set up in the sands under lanterns, surrounded by a few Rajasthani musicians. A quality camp should be able to set this up for you without any pressure of entertainment.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792496318/4b70f1a75808882ad325c29b95e4907714025abd40f0bf24dde7736c51b60db9_zaa1qf.jpg",
  },
  {
    name: "Village and Craft Experiences",
    description:
      `Cultural interactions in rural villages around Osian that include weaving, leather making, and pottery provide for a soft introduction into the local culture. You will be able to interact with the artisans at home rather than in a showroom if you have a good guide.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792496417/images_2_x7tvxn.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c] mb-1">
            Luxury Desert Experiences in Osian
          </h2>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            This is where the heritage narrative comes together with the luxury narrative. The dunes of 
            Osian are not as grand as those of Sam in Jaisalmer. But they offer something much more 
            important in the way of being close to stone and having an easy introduction to the desert 
            landscape.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
                
          {/* Heading */}
          <h2 className="
            text-[14px] sm:text-[16px] md:text-[18px]
            font-semibold
            text-[#2c2c2c]
            tracking-wide
            mb-1
          ">
            Where to Stay: Luxury Desert Camps and Heritage Hotels
          </h2>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            There are many luxurious accommodations in and around Osian that include Swiss tents with 
            in-suite bathrooms, tented camps, and heritage resorts surrounded by forts. A number of 
            these accommodations are located just a few kilometres away from the temples and a few even 
            further down on the road from Jodhpur to Jaisalmer. There are wide variations in quality, 
            which is why we:
          </p>
  
          {/* Content - List Format */}
          <div className="space-y-2 text-gray-700 mb-2 md:mb-4">
            <ul className="space-y-2 pl-0">
              <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
                <span className="font-light">•</span> Correct bedding, hot water and air-conditioning/insulation of tents during the summer.
              </li>
              <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
                <span className="font-light">•</span> Vegetarian-friendly food and candle-lit dinner.
              </li>
              <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
                <span className="font-light">•</span> Management that is women friendly, safe grounds and safari policy.
              </li>
              <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
                <span className="font-light">•</span> Proximity to temples, because proximity allows you to visit them early in the morning when no one else has gone there.
              </li>
              <li className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify list-none">
                <span className="font-light">•</span> For palace-style luxury, stay at a heritage hotel in Jodhpur and take a day excursion to Osian - a pattern many couples prefer, spending one day in the desert and the rest in the city.
              </li>
            </ul>
          </div>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cityData.map((city, index) => (
            <div
              key={`${city.name}-${index}`}
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