"use client";

import Image from "next/image";

const architectureFeatures = [
  {
    description:
      "Sunrise by the Taj Mahal, early enough before the mausoleum kind of opens to the day’s full crowds.",
  },
  {
    description:
      "The evening Sound & Light Show at the Red Fort , where they sort of narrate Delhi’s story against the glowing ramparts.",
  },
  {
    description:
      "You get an elephant or a jeep ride up to Amber Fort main gate, after which there’s a private Sheesh Mahal walkthrough , a bit slow and very personal. ",
  },
  {
    description:
      "A boat trip along the Varanasi ghats at dawn, then later an evening Ganga Aarti ceremony , yes very different vibe but still connected. ",
  },
];

export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-1 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-2 md:mb-3">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Best Heritage Experiences Across North India
          </h2>
        </div>

        {/* Image */}

        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">

            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784526609/pexels-aman2905-33448400_nixycd.jpg"
              alt="North India heritage experiences - sound and light shows guided walks and Aarti ceremonies"
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