"use client";

import Image from "next/image";

const architectureFeatures = [
  {
    title: "Anda (the dome)",
    description:
      `The Anda a huge hemispherical mound - represents the cosmic egg and holds the relic chamber 
      with the Buddha's remains. It gives the stupa its sanctity.`,
  },
  {
    title: "Medhi (the drum)",
    description:
      `The Medhi is the circular base drum with an upper walkway for pilgrims to circumambulate the 
       stupa tracing its sacred boundary in quiet meditation.`,
  },
  {
    title: "Vedika (the railings)",
    description:
      `The Vedika a stone railing at ground level defines the sacred space and offers a second 
       circumambulatory path. Pilgrims have walked this clockwise ritual in devotion for over 2,000 years.`,
  },
  {
    title: "Harmika (the square railing)",
    description:
      `The Harmika is a small square railing atop the stupa, marking the transition from the earthly 
       to the divine a subtle yet sacred boundary.`,
  },
];

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 sm:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The Architecture of the Great Stupa - Reading the Stone
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784120637/Temple_17_-_Buddhist_Monument_-_Sanchi_Hill_2013-02-21_4494_dxncsv.jpg"
              alt="Detail of the Great Stupa's dome, harmika railing, and triple chatra umbrella against blue sky"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via wikipedia
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            The Great Stupa ( Stupa No. 1 ) is about 54 feet, roughly 16.5 metres, tall and it spans 
            120 feet, around 36.5 metres, across in diameter. In raw terms of presence, it is not 
            necessarily the biggest thing you’ll run into across India. But it carries this particular 
            completeness, like every element was weighed, considered, and set with very clear intention, 
            which bigger and more monumental buildings can sometimes miss.
          </p>
        </div>

        {/* Features */}

        <div className="mt-2 md:mt-4">

          <h3 className="text-[16px] sm:text-[20px] font-semibold text-[#2c2c2c] mb-3">
            Must-See Caves at Ajanta
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">

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