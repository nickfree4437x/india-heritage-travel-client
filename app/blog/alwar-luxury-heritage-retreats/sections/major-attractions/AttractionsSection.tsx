"use client";

import Image from "next/image";

// Major attractions data
const cityData = [
  {
    name: "Bala Quila (Alwar Fort)",
    description:
      `Bala Quila, meaning "young fort," crowns an Aravalli ridge about 300 metres above Alwar. Its ramparts stretch for kilometres, studded with dozens of towers and gates, offering sweeping views over the plains - yet it remains surprisingly under-visited.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791787232/Alwar_fort_or_Bala_Quila_09_kfluio.jpg",
  },
  {
    name: "Alwar City Palace and Vinay Vilas",
    description:
      `The City Palace, also known as Vinay Vilas Mahal, was built in the late 18th century under Raja Bakhtawar Singh and Maharaja Vinay Singh, blending Rajput and Mughal architecture. Notable for its gently sloping corridors instead of stairs, it houses a museum of weapons, paintings, documents, furniture, and a famous silver dining table.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791787293/City-Palace-Alwar_bsleut.jpg",
  },
  {
    name: "Moosi Maharani Ki Chhatri",
    description:
      `Adjacent to the City Palace is a very memorable monument of Alwar. It is a cenotaph situated on a raised platform made from pink stone, which honors the memory of Raja Bakhtawar Singh along with his queen named Moosi, who burnt herself alive on his funeral pyre. The monument looks beautiful after sunset because of its domes and pavilions.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791787426/Moosi-Maharani-Ki-Chhatri_lsepxg.jpg",
  },
  {
    name: "Siliserh Lake and Lake Palace",
    description:
      `Siliserh Lake, about 8 miles southwest of Alwar, was built by Maharaja Vinay Singh in 1845. The lakeside palace - originally a gift for Queen Shila Devi and later a hunting lodge - now operates as a heritage hotel with lake-facing balconies, offering boating, birdwatching, and deer sightings on the surrounding slopes.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1789729383/Mattancherry_Palace_DSC_0899_zhxgy9.jpg",
  },
  {
    name: "Sariska Palace and the Jai Singh Legacy",
    description:
      ` The Sariska Palace was built by Maharaja Jai Singh for his private use among the forest region which currently forms the main part of the tiger sanctuary. There have been changes to the current condition and amenities offered over the years. Please make sure to inquire about the current condition before you decide on whether you are going to stay there or not.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791787652/images_sjuwmd.jpg",
  },
  {
    name: "Tijara Fort-Palace",
    description:
      `In the northern part of the town, there lies Tijara Fort-Palace that was built in the 19th century and which has been converted into a heritage hotel. This is the most refined heritage stay in Alwar and is ideal if one is traveling by car from Delhi.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791787841/images_1_ctpb8b.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2.5 md:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
            Forgotten Palaces and Landmarks Worth Your Time
          </h2>
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