"use client";

import Image from "next/image";

const architectureFeatures = [
  {
    title: "Construction Materials & Techniques",
    description:
      `Hampi's buildings are built from local granite, using post-and-lintel masonry often without
       mortar, relying on the stone's mass for stability.`,
  },
  {
    title: "Sacred Architecture: The Temple Complex",
    description:
      `Vijayanagara temples are distinguished by broad chariot streets, pillared mandapas along the
       sides, and multiple enclosure walls with towering gateway entrances.`,
  },
  {
    title: "Secular Architecture: The Royal Quarter",
    description:
      `Hampi's secular buildings Lotus Mahal, Queen's Bath, and Elephant Stables - showcase Indo-Islamic
       architecture with pointed arches, vaulted ceilings, and ornate plasterwork.`,
  },
];

export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-4 md:mb-6">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Hampi Architecture: Dravidian Grandeur, Stone Mastery & Indo-Islamic Fusion
          </h2>
        </div>

        {/* Image */}

        <div className="mb-4 md:mb-6">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">

            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783503667/sandip-kalal-vXI7KQSMGkU-unsplash_lf9pm6.jpg"
              alt="Hampi granite architecture - post-and-lintel masonry with 500-year-old ruins"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via wikipedia
          </p>
        </div>

        {/* Intro Content */}

        <div className="max-w-6xl mb-6 md:mb-6">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            The architectural legacy of Hampi is, pretty much one of the most distinctive and accomplished
            you’ll find across Indian history. The Vijayanagara style draws mainly from the Dravidian 
            tradition (South Indian), which is characterised by massive dimensions lofty gopurams (entrance
            towers) cloistered enclosures and pillared mandapas yet it also brings in bits of Indo-Islamic
             architecture, especially within its secular buildings.
          </p>

        </div>

        {/* Features */}

        <div>

          <h3 className="text-[16px] sm:text-[20px] font-semibold text-[#2c2c2c] mb-3">
            Key Architectural Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-5">

            {architectureFeatures.map((feature) => (
              <div
                key={feature.title}
                className="border border-gray-200 rounded-md p-5"
              >
                <h4 className="text-[14px] md:text-[15px] font-semibold text-[#2c2c2c] mb-0.5">
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