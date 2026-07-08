"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-2 sm:py-2">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Content */}

        <div className="max-w-6xl">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] leading-relaxed mb-2">
            Discover India's Most Extraordinary UNESCO World Heritage Sites
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-4">
            India is home to some of the world's most remarkable cultural,
            historical, and natural treasures. From magnificent Mughal
            monuments and ancient cave temples to royal cities, mountain
            railways, and breathtaking national parks, the country's UNESCO
            World Heritage Sites represent thousands of years of human
            achievement, artistic excellence, and living traditions.
          </p>

        </div>

        {/* Featured Image */}

        <div className="mb-6">

          <div className="relative h-[280px] sm:h-[420px] md:h-[560px] overflow-hidden rounded-sm">

            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782715320/pexels-roman-saienko-1867764487-37626173_zxdfkr.jpg"
              alt="UNESCO World Heritage Sites in India"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

          </div>

          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-700 font-light leading-relaxed">
            via pexels
          </p>

        </div>

        {/* Why This Guide */}

        <div className="max-w-6xl">

          <h3 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-2">
            What You'll Discover in This Guide
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-4">
            Planning a UNESCO-focused journey through India can feel
            overwhelming because the country is home to dozens of UNESCO World
            Heritage Sites spread across different regions. Some celebrate the
            rise and fall of great empires, while others preserve unique
            ecosystems, sacred traditions, or architectural masterpieces that
            have survived for centuries.
          </p>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify">
            This guide highlights some of the most significant UNESCO World
            Heritage Sites in India, explains why they are important, when to
            visit them, and how they can be incorporated into a memorable
            travel itinerary. Whether your interests lie in history,
            architecture, photography, wildlife, or culture, these destinations
            represent the very best of what India has to offer.
          </p>

        </div>

      </div>

    </section>
  );
}