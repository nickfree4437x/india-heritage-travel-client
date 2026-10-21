"use client";

import Image from "next/image";

// Major attractions data
const cityData = [
  {
    name: "Karauli City Palace",
    description:
      `Entered through Ganesh Gate, Karauli's City Palace (locally called Rawal) was rebuilt in red sandstone by Gopal Singh, with 19th-century white stone additions. Highlights include the Diwan-i-Aam's painted wooden doors, the Rang Mahal's tinted-glass jharokhas, the Moti Mahal, and the Barah-dwari portrait room - while mirrored bedrooms were cooled by an ingenious water-pipe system.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791872479/Untitled_design_kqzufm.webp",
  },
  {
    name: "Madan Mohan Ji Temple",
    description:
      `Madan Mohan Ji Temple, near Karauli's palace on the Bhadravati River, honours Lord Krishna. Legend credits King Gopal Singh with rescuing the idol from Mughal-threatened Vrindavan in a dream. It draws pilgrims on Janmashtami, Radhashtami, Gopashtami, and Holi.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791872586/Madanmohan-ji_oqovej.jpg",
  },
  {
    name: "Kaila Devi Temple",
    description:
      `Kaila Devi Temple, 23 km from Karauli, is a major pilgrimage site in eastern Rajasthan, set in the Aravalli hills beside the Kalisil River. The marble temple, dedicated to an incarnation of Mahalakshmi and Yogamaya, has been patronised by the Jadaun kings for centuries and was last renovated in marble in 1947.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791872668/Kailadevi_Temple_ty5zge.jpg",
  },
  {
    name: "Timangarh Fort",
    description:
      `There is an ancient Timangarh Fort near Karauli which is said to be built by a king named Timan, and is famous for its ancient idols carved on stones and metals. Some of these artifacts are exhibited in the Bhanwar Vilas Palace. The road to this site is quite rough, and it is better to travel in a jeep accompanied with a guide.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791872768/Timangarh_karauli_01_etxpqx.jpg",
  },
  {
    name: "Kaila Devi Wildlife Sanctuary",
    description:
      ` The wildlife sanctuary is located around 25 km away from Karauli and is situated in the deep ravines of the Aravallis, acting as a buffer zone for the Ranthambore landscape. One can find chinkara, boar, jackal, and birdlife here, and the chances of spotting leopards and sloth bears are rare.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1791873149/images_2_jmhl3x.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-1 md:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
            Karauli Heritage Travel: The Major Attractions
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