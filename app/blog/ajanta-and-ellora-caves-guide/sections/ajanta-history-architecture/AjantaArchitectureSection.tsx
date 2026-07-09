"use client";

import Image from "next/image";

const architectureFeatures = [
  {
    title: "Cave 1: The jewel of Ajanta",
    description:
      `Ajanta's jewel, features two iconic paintings Bodhisattva Padmapani with a lotus and 
      Bodhisattva Vajrapani. Their flowing lines and emotional depth match any Renaissance fresco.`,
  },
  {
    title: "Cave 2: An elaborately painted ceiling and walls",
    description:
      `showing Jataka stories, (as in tales from the Buddha’s earlier lives) and also some of 
       the best preserved colour you’ll find across any Ajanta cave. `,
  },
  {
    title: "Cave 3: Dying Princess panel",
    description:
      `It shows a figure collapsing after she hears about the Buddha’s renunciation, it’s one of 
      the more gut feeling moving single images in ancient art overall.`,
  },
  {
    title: "Cave 4: A magnificent chaitya-griha",
    description:
      `with a richly carved facade, and then a dramatic Buddha figure taking the center spot, 
       and you feel it right away, dominating the interior stupa.`,
  },
];

export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-0 sm:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-4 md:mb-6">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Ajanta Caves: Architecture & Cave-by-Cave Highlights
          </h2>
        </div>

        {/* Image */}

        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[580px] overflow-hidden rounded-sm">

            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783594232/Ajanta_Cave_6_plan_k9awyi.jpg"
              alt="Ajanta Caves architecture - 30 rock-cut Buddhist caves with murals and chaitya halls"
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
            So the 30 Ajanta caves sort of divide into two main structural types, chaitya-grihas, 
            basically prayer halls with a stupa on the far end , and viharas, meaning residential 
            monasteries, with little cells that open off a central hall or so. The oldest chaityas 
            caves 9, 10, 19, and 26 - are the most architecturally dramatic, with those ribbed vaulted 
            ceilings that were first in wood and then later copied in stone in the subsequent caves, 
            and also a tall nave, plus a carved stupa that ends up acting as the focal point for worship
          </p>

        </div>

        {/* Features */}

        <div>

          <h3 className="text-[16px] sm:text-[20px] font-semibold text-[#2c2c2c] mb-3">
            Must-See Caves at Ajanta
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

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