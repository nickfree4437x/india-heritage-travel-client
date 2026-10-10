"use client";

import Image from "next/image";

const architectureFeatures = [
  {
    description:
      "Sunrise there over Hampi’s boulder landscape from Matanga Hill , with the Virupaksha Temple’s gopuram rising right down below. ",
  },
  {
    description:
      "A guided stroll through Mahabalipuram’s rock-cut mandapas, kinda tracing the earlier trial runs in Dravidian temple design .",
  },
  {
    description:
      "Mysore Palace glowing at dusk, definitely one of Karnataka’s most photographed heritage moments, honestly.",
  },
  {
    description:
      "A houseboat evening on Kerala’s backwaters, mixing heritage sightseeing with the region’s other great travel experience too.",
  },
];

export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-1 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-2 md:mb-3">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Best Heritage Experiences Across South India
          </h2>
        </div>

        {/* Image */}

        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">

            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784611648/zablanca_clicks-ZB9Mad3xL8Q-unsplash_f8ptbn.jpg"
              alt="Best heritage experiences across South India - temples ruins and cultural traditions"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via unsplash
          </p>
        </div>

        {/* Features */}

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {architectureFeatures.map((feature) => (
              <div
                key={feature.description}
                className="border border-gray-200 rounded-md p-5"
              >

                <p className="text-[12px] sm:text-[13px] text-gray-700 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}