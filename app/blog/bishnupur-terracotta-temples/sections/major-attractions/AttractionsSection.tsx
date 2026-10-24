"use client";
import Image from "next/image";

// Major attractions data
const cityData = [
  {
    name: "Rasmancha",
    description:
      `The Rasmancha is one of the most distinctive architecture structures in Bishnupur, being a pyramid shaped structure made up of laterite and bricks with galleries having arches from which images of Radha-Krishna were taken out for the Ras festival every year. The Rasmancha, as is suggested from various sources, was constructed in the last part of the 16th century, that is, in 1587 or 1600 CE, during the time of King Bir Hambir.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792827969/Rasmancha_Arnab_Dutta_2011_depgrp.jpg",
  },
  {
    name: "Jor Bangla (Keshta Rai) Temple",
    description:
      `Jor Bangla temple was constructed in the year 1655. Jor Bangla is so called because it is composed of two curved-roof structures and a tower. It is regarded as the most renowned temple out of all the terracotta temples and the walls of the Jor Bangla temple have the depictions of the scenes from epics and Puranic tales, hunting, battles, and day to day activities of life. When one examines the carvings, one would observe musical parties and even Europeans.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792828052/Jor_Bangla_or_Keshta_Raya_temple_of_Bishnupur._Built_by_Raghunath_Singha_in_1655_AD._23_kltox8.jpg",
  },
  {
    name: "Shyam Rai Temple",
    description:
      ` Dating back to 1643, the temple of Shyam Rai is a five-towered structure built on a raised platform and regarded as one of the most beautifully carved temples of Bengal. The terracotta panels of the temple have a profusion of carvings that depict incidents related to the life of Lord Krishna and the great epics.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792828149/BP97WK_-_Shyam_Rai_Temple_-_Bishnupur_-_West_Bengal_glenko.jpg",
  },
  {
    name: "Madan Mohan Temple",
    description:
      `The Madan Mohan temple is a single-shikhara brick temple, which is dedicated to the deity who plays an important role in the religious life of the town. This is a well-proportioned and carved temple, and the deity is connected with the legend of Dalmadal cannon.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792828231/Madan_Mohan_Temple_of_Bishnupur_District_of_West_Bengal_aletb2.jpg",
  },
  {
    name: "Dalmadal Cannon and the Fort Gateway",
    description:
      `Dalmadal Cannon, which is a huge cannon made in 1742 weighing over a hundred quintals, can be seen after a short distance from the temple complex. The old fort gate, which is now in ruins, is a reminder of the fact that Bishnupur was once the fort of the kings. There is also a chariot made of laterite stone belonging to the Malla period.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792828322/Dalmadol_Canon_of_Bishnupur_03_oms8b5.jpg",
  },
  {
    name: "Khushbagh & Across the River",
    description:
      `Smaller shrines such as the Lalji and Radha Shyam temples, and others dotted across the town, round out a full circuit. Many are in lanes and fields, so a guide helps connect them.`,
    image: "https://res.cloudinary.com/dja5yspwr/image/upload/v1792828437/RADHA_MADHAB_TEMPLE_szrrqi.jpg",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c] mb-1">
            Bishnupur Terracotta Temples: The Major Attractions
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