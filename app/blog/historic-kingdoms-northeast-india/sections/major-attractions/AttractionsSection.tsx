"use client";
import Image from "next/image";

// Major attractions data
const cityData = [
  {
    name: "Assam",
    description:
      `Explore the Ahom legacy through Charaideo Moidams, Rang Ghar, Talatal Ghar, Kareng Ghar and Siva Dol, then experience Assam's living culture with Jorhat's tea heritage, Majuli's satras and mask-making, and local village food experiences.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1795190231/rohit-dey-ea4KUYu9UIc-unsplash_wkqcyo.jpg",
  },
  {
    name: "Barak Valley, Assam",
    description:
      `Explore the Khaspur archaeological remains, then experience Silchar's local market and Dimasa cultural interpretation for a living sense of the region's heritage.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1795190464/Kachari_palace_cjnalg.jpg",
  },
  {
    name: "Manipur",
    description:
      `Explore Kangla Fort in Imphal, then experience Ima Keithel and the cultural landscapes around Loktak Lake, subject to current access.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1795190566/rathna-deepaya-FWZ3TkcCr1E-unsplash_jwhp3a.jpg",
  },
  {
    name: "Tripura",
    description:
      `Explore Ujjayanta Palace, Neermahal and Unakoti, along with the Pilak archaeological site and the temples and lakes of Udaipur. Together they trace Tripura's royal, religious and artistic past across the state.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1795190664/shubha-bhaumik-hEBYN2DZK0o-unsplash_cqlpcy.jpg",
  },
  {
    name: "Meghalaya",
    description:
      `Explore the Nartiang Durga Temple and its monoliths, along with sacred groves, community-led village walks and Wangala cultural experiences that bring Meghalaya's living heritage to life.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1795190797/nvr-endng-anupam-EUwzrxkJAAY-unsplash_cuok4f.jpg",
  },
  {
    name: "Sikkim",
    description:
      `Explore Yuksom, the Rabdentse ruins and Pemayangtse Monastery, along with traditional settlements, local food and monastery visits with permission. Together they trace Sikkim's early royal and Buddhist heritage.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1795190933/pulak-bhagawati-GdlEMsUsOy0-unsplash_prikgx.jpg",
  },
  {
    name: "Arunachal Pradesh",
    description:
      `xplore Tawang Monastery, Urgelling Monastery and Khinmey Monastery, along with the Monpa community's traditional crafts, Losar and Torgya festivals, and local cuisine like Zan and Thukpa for a living sense of the region's Buddhist heritage.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1795191030/mayur-more-_VmyPQFsj5s-unsplash_gcuqco.jpg",
  },
  {
    name: "Nagaland / Mizoram",
    description:
      `Explore historic villages and customary cultural sites, along with Morung architecture, weaving, music and locally guided festival visits that keep the region's community traditions alive.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1795191208/mohamed-abdul-rasheed-x7ru8gfBp_Q-unsplash_reryfx.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c] mb-1">
            Major attractions and quieter discoveries
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
                    Image via unsplash
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