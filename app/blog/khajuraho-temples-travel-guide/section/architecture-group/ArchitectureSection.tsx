"use client";

import Image from "next/image";

const architectureFeatures = [
  {
    title: "Sandstone Construction",
    description:
      "The temples are built from locally quarried buff-coloured sandstone, giving Khajuraho its distinctive golden-honey glow, especially during sunrise and sunset.",
  },
  {
    title: "Exterior Sculpture Bands",
    description:
      "The outer walls are arranged into carefully organised sculptural bands depicting deities, celestial beings, musicians, warriors, animals, and the famous mithuna figures.",
  },
  {
    title: "Miniature Shikharas",
    description:
      "The main tower is surrounded by smaller interconnected spires, creating the impression of a sacred mountain rising organically toward the heavens.",
  },
  {
    title: "Interior Carving",
    description:
      "Ceilings, pillars, and interior walls are richly decorated with floral motifs, bracket figures, sacred imagery, and intricate ornamental details.",
  },
];

export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-4 md:mb-6">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Architecture - The Grammar of Nagara Stone
          </h2>
        </div>

        {/* Image */}

        <div className="mb-4 md:mb-6">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">

            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783255391/dhwani-jalan-yK-mh6iNFsk-unsplash_odld49.jpg"
              alt="Detail of the curvilinear shikhara tower of a Khajuraho temple showing Nagara architectural style"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>
        </div>

        {/* Intro Content */}

        <div className="max-w-6xl mb-10">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            KKhajuraho represents one of the finest expressions of North Indian Nagara temple architecture, 
            known for its soaring curvilinear shikharas that climb toward a single bright point - a 
            reference to Mount Meru, the cosmic axis in Hindu cosmology. What distinguishes these temples 
            is their layered design and strong vertical movement. Each temple begins on a raised jagati 
            platform, then unfolds through projecting porches and mandapas before reaching the sacred 
            garbhagriha beneath the central shikhara. The progression pulls your gaze - and your inner 
            sense - upward, until you meet the ribbed amalaka and the finial on top. It feels like a guided
             architectural journey from earth to the divine.
          </p>

        </div>

        {/* Features */}

        <div>

          <h3 className="text-[16px] sm:text-[20px] font-semibold text-[#2c2c2c] mb-3">
            Key Architectural Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {architectureFeatures.map((feature) => (
              <div
                key={feature.title}
                className="border border-gray-200 rounded-md p-5"
              >
                <h4 className="text-[14px] md:text-[15px] font-semibold text-[#2c2c2c] mb-2">
                  {feature.title}
                </h4>

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