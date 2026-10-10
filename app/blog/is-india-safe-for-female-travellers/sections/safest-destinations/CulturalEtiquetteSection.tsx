"use client";

import Image from "next/image";

const architectureFeatures = [
  {
    description:
      "Loose, breathable fabrics - linen kurtas, wide trousers, and midi dresses - cover shoulders and knees, feel comfortable in the heat, and look natural.",
  },
  {
    description:
      "Always carry a light scarf or dupatta - it instantly transforms any outfit for temples and doubles as sun protection.",
  },
  {
    description:
      "you can save more fitted , or sleeveless, pieces for hotel pools, resort grounds, and beach towns like Goa, where the norms are way more relaxed.",
  },
  {
    description:
      "Walk with calm confidence and avoid eye contact with unwanted approaches - it's local savvy, not rudeness. This isn't about fear.",
  },
];

export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-0 sm:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-2 md:mb-2">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Cultural Etiquette and What to Wear
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
         <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
          <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785041234/pexels-ayush-singh-thakur-1080844892-27833729_nhkrkk.jpg"
            alt="Cultural etiquette and what to wear in India - respectful dressing guide"
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