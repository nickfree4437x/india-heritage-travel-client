"use client";

import Image from "next/image";

const architectureFeatures = [
  {
    title: "The General Rule",
    description:
      "Loose breathable clothing that covers the shoulders and reaches at least to the knee works pretty much everywhere in India, from big cities down to smaller heritage towns. ",
  },
  {
    title: "Temples, Mosques, and Gurdwaras",
    description:
      "Cover your shoulders and also your knees , without exception, and bring along a large scarf or dupatta, that you can use sort of as a head covering too. ",
  },
  {
    title: "City Versus Countryside",
    description:
      "Cities and beaches are more flexible, but smaller towns and rural areas expect modest dressing. When unsure, err on the side of covering up.",
  },
  {
    title: "Evenings and Luxury Settings",
    description:
      "Heritage hotels and upscale restaurants often welcome elegant options like a nice kurta set that’s well put together, a modest dress, or even a sari for that special dinner. ",
  },
];

export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-9">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-2 md:mb-3">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            What to Wear in India: A Practical Guide for Women
          </h2>
        </div>

        {/* Image */}

        <div className="mb-2 md:mb-3">
          <div className="relative h-[280px] md:h-[420px] lg:h-[630px] overflow-hidden rounded-sm">

            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784869661/pexels-tanmoy-pal-3640736-19271174_lsegab.jpg"
              alt="What to wear in India for women - practical clothing guide for female travelers"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>

        {/* Features */}

        <div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {architectureFeatures.map((feature) => (
              <div
                key={feature.title}
                className="border border-gray-200 rounded-md p-5"
              >
                <h4 className="text-[14px] md:text-[15px] font-semibold text-[#2c2c2c] mb-1">
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