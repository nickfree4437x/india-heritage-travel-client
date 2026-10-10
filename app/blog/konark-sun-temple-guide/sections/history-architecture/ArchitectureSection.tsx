"use client";

import Image from "next/image";

const architectureFeatures = [
  {
    title: "The Chariot Concept",
    description:
      `Konark's genius is its solar chariot metaphor the plinth as chariot body, 24 wheels as hours/months, 
      and seven horses as days. Every element reinforces this cosmic design.`,
  },
  {
    title: "The 24 Wheels: More Than Decoration",
    description:
      `The 24 wheels - 3 metres each - are functional sundials. Their carvings vary from mythology 
      to erotic art, all interpreted as Surya's life-force. Distinct, yet part of one narrative.`,
  },
  {
    title: "Kalinga Architecture at Its Peak",
    description:
      `Konark's Kalinga-style shikhara has collapsed, but the 38.5-metre jagamohana and the 
       pillared nat mandir still stand as striking survivors.`,
  },
];

export default function ArchitectureSection() {
  return (
    <section className="w-full bg-white py-2 sm:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-2 md:mb-4">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Architecture: A Temple Built as a Divine Chariot
          </h2>
        </div>

        {/* Image */}

        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">

            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783749297/pexels-bharatanirudh-1721747_sh7cqu.jpg"
              alt="Detailed stone carving on Konark Sun Temple chariot wheel, 13th century Kalinga architecture"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>

        {/* Intro Content */}

        <div className="max-w-6xl mb-6 md:mb-6">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            The architectural legacy of Konark is one of the most distinctive and accomplished in 
            Indian history. The Sun Temple draws from the Kalinga style of Odisha, characterised by 
            its chariot-shaped plan, 24 intricately carved stone wheels, seven galloping horses, and 
            a towering shikhara that once rose 60 metres. Unlike Dravidian or Indo-Islamic traditions, 
            Konark's architecture is defined by its symbolic representation of time and the cosmic order, 
            blending temple architecture with mythological storytelling.
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