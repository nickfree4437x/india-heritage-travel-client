"use client";

import Image from "next/image";

const architectureFeatures = [
  {
    title: "Group Size and Pace",
    description:
      "Expect small groups, private air-conditioned transfers, and a relaxed pace - no checklist sprint. Most operators include free time for markets, spas, or simply resting after a day of fort climbing.",
  },
  {
    title: "Accommodation",
    description:
      "Heritage havelis, palace hotels, luxury properties - and occasional village homestays or desert camps. Twin-share with single supplement for privacy.",
  },
  {
    title: "Local Guides and Hosts",
    description:
      "Top women-only tours feature authentic local connections - female guides, family-hosted dinners, and women-led craft cooperatives. These are the moments travelers remember longest.",
  },
  {
    title: "Safety Structure",
    description:
      "Expect a private driver, 24/7 support, vetted stops, and a welcome briefing on customs. It won't replace common sense, but it removes many surprises that make first-time India travel daunting.",
  },
];

export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-0 sm:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-2 md:mb-3">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            What to Expect on a Women-Only Heritage Tour
          </h2>
        </div>

        {/* Image */}

        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">

            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784868111/gokul-gurung-VrosVe18tXo-unsplash_tqjkah.jpg"
              alt="Women-only heritage tour India - what to expect with female guides and group travel"
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