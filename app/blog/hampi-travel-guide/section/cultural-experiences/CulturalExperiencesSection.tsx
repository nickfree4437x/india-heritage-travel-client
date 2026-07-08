"use client";

import Image from "next/image";

const experiences = [
  {
    title: "Virupaksha Temple Morning Puja",
    description:
      `The early morning puja at Virupaksha Temple incense, bells, and oil-lit murals
       offers a glimpse into an unbroken tradition centuries old.`,
  },
  {
    title: "Hampi Archaeological Museum",
    description:
      `Located in Kamalapura, the Archaeological Museum houses sculptures, coins, inscriptions, and 
       artefacts recovered from across the Vijayanagara capital.`,
  },
  {
    title: "Anegundi Village",
    description:
      `Anegundi, across the Tungabhadra, offers a quieter cultural experience traditional homes, 
      shrines, and the Kishkindha Heritage Project, away from the main monuments.`,
  },
];

export default function CulturalExperiencesSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-2">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Cultural Experiences in Hampi
          </h2>

        </div>

        {/* Intro */}

        <div className="max-w-6xl mb-4 md:mb-6">

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Hampi is far more than an archaeological site. It remains a
            living cultural landscape where active temples, traditional
            communities, and centuries-old pilgrimage practices continue
            alongside the ruins of the Vijayanagara Empire. Beyond the
            monuments themselves, these experiences provide a deeper
            understanding of Hampi's enduring cultural significance.
          </p>

        </div>

        {/* Image */}

        <div className="mb-4 md:mb-6">

          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">

            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783506974/lens-fables-0DrIkr45X98-unsplash_lweals.jpg"
              alt="Traditional cultural experiences in Hampi including Virupaksha Temple and Anegundi Village"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>

        </div>

        {/* Experience Cards */}

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">

          {experiences.map((item) => (
            <div
              key={item.title}
              className="border border-gray-200 rounded-md p-6"
            >

              <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mb-0.5">
                {item.title}
              </h3>

              <p className="text-[12px] sm:text-[13.5px] text-gray-700 leading-relaxed font-light">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}