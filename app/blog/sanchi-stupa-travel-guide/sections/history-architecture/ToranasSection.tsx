"use client";

import Image from "next/image";

const architectureFeatures = [
  {
    title: "North Gateway (Uttara Torana",
    description:
      `The North Gateway, the finest of the four, shows the Great Departure, Mara's temptation, and 
       Jataka tales. Its lintel carvings the 'Wheel of the Law' and celestial figures are exceptional.`,
  },
  {
    title: "North Gateway (Uttara Torana)",
    description:
      `The North Gateway finest of the four shows the Great Departure and Mara's temptation. The East 
       Gateway features the Buddha's Mahaparinirvana and Queen Maya's white elephant dream.`,
  },
  {
    title: "South Gateway (Dakshina Torana)",
    description:
      `The North Gateway finest of the four shows the Great Departure and Mara's temptation. The East 
       Gateway features the Buddha's Mahaparinirvana and Queen Maya's white elephant dream.`,
  },
  {
    title: "West Gateway (Pashchima Torana)",
    description:
      `The West Gateway has the "Seven Incarnations" Buddha's past life episodes with expressive, 
       sensual yakshini bracket figures.`,
  },
];

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 sm:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The Four Toranas The Most Extraordinary Gateways in Ancient India
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[660px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784123536/Monument_at_Sanchi_Stupa_India_24_m4lpxm.jpg"
              alt="Detailed carved narrative panels on the North Torana gateway at Sanchi Stupa UNESCO World Heritage Site"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via wikipedia
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            The four toranas (ceremonial gateways) of the Great Stupa were added during the Satavahana 
            period (1st century BCE–1st century CE) — among the finest stone carvings of the era. Each 
            stands about 10 metres high, with intricate details from Jataka tales, Buddha's life, and 
            Buddhist beliefs. More than ornament, they serve as visual storytelling bringing Buddhist 
            teachings into everyday sight.
          </p>
        </div>

        {/* Features */}

        <div className="mt-2 md:mt-4">

          <h3 className="text-[16px] sm:text-[20px] font-semibold text-[#2c2c2c] mb-3">
            The Four Gateways - A Quick Guide
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