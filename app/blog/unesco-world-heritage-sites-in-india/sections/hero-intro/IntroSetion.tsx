"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Content */}

        <div className="max-w-6xl">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] leading-relaxed mb-1">
            Discover India's UNESCO World Heritage Sites
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-4">
             India is home to an extraordinary range of cultural and natural heritage.
              From the Taj Mahal and ancient cave temples to historic cities, mountain
              railways, and protected natural landscapes, its UNESCO World Heritage Sites
              showcase the country's rich history, architectural achievements, and
              diverse ecosystems.
          </p>

        </div>

        {/* Featured Image */}

        <div className="mb-2 md:mb-4">

          <div className="relative h-[280px] sm:h-[420px] md:h-[560px] overflow-hidden rounded-sm">

            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782715320/pexels-roman-saienko-1867764487-37626173_zxdfkr.jpg"
              alt="Historic architecture representing India's cultural heritage"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />

          </div>

          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-700 font-light leading-relaxed">
            Image via pexels
          </p>

        </div>

        {/* Why This Guide */}

        <div className="max-w-6xl">

          <h3 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-2">
            What You'll Discover in This Guide
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-2 md:mb-3">
            India's UNESCO World Heritage Sites span different regions and historical
            periods. They include places recognised for their cultural significance,
            architectural achievements, and natural value. Understanding what makes
            each site distinctive can help you choose destinations that match your
            interests and available travel time.
          </p>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify">
            This guide introduces selected UNESCO World Heritage Sites in India,
            explains their significance, and shares practical considerations for
            planning a visit. Whether you're interested in history, architecture,
            wildlife, photography, or cultural experiences, these destinations offer
            meaningful ways to explore India's heritage.
          </p>

        </div>

      </div>

    </section>
  );
}