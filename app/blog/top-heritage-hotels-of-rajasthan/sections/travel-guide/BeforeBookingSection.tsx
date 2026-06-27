"use client";

import {
  CalendarDays,
  BedDouble,
  Music4,
  Shirt,
  Landmark,
} from "lucide-react";
import Image from "next/image";

const tips = [
  {
    icon: CalendarDays,
    title: "Book Early for Winter Stays",
    description:
      "The most desirable rooms at properties such as Rambagh Palace, Taj Lake Palace, and RAAS Jodhpur are often reserved months in advance during the peak travel season. If you plan to visit between December and January, booking three to four months ahead is strongly recommended.",
  },
  {
    icon: BedDouble,
    title: "Understand the Room Categories",
    description:
      "Not all rooms within a heritage hotel offer the same experience. Standard rooms, palace rooms, heritage suites, and royal suites can differ significantly in size, views, décor, and historical character. Always review room categories carefully before making a reservation.",
  },
  {
    icon: Music4,
    title: "Check Included Experiences",
    description:
      "Many heritage hotels organise folk performances, puppet shows, cultural evenings, heritage walks, and traditional dining experiences. Some are included in the stay while others require advance booking, so it is worth checking beforehand.",
  },
  {
    icon: Shirt,
    title: "Carry a Light Jacket",
    description:
      "Even during Rajasthan's pleasant winter season, evenings inside palace courtyards, rooftop terraces, and marble corridors can feel surprisingly cool. A light jacket or shawl is often useful after sunset.",
  },
  {
    icon: Landmark,
    title: "Respect Heritage Property Rules",
    description:
      "Remember that many heritage hotels are centuries-old palaces, forts, and royal residences. Photography restrictions, protected areas, and preservation guidelines exist to safeguard irreplaceable architecture and artwork for future generations.",
  },
];

export default function BeforeBookingSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-[18px] sm:text-[22px] md:text-[24px] font-semibold text-[#2c2c2c] leading-tight mb-3">
          Before You Book Your Heritage Hotel Stay
        </h2>

        <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-10">
          A stay in one of Rajasthan's heritage hotels is often one of the
          highlights of the entire journey. A little preparation beforehand can
          help you choose the right room, secure the best rates, and make the
          most of the unique experiences these historic properties offer.
        </p>

        {/* Tips */}

        <div className="space-y-2">

          {tips.map((tip, index) => {

            const Icon = tip.icon;

            return (
              <div
                key={index}
                className={`flex gap-5 ${
                  index !== tips.length - 1
                    ? "pb-8"
                    : ""
                }`}
              >

                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#faf8f5] border border-[#ece7de] flex items-center justify-center">

                  <Icon
                    size={20}
                    className="text-[#AF956C]"
                  />

                </div>

                <div>

                  <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                    {tip.title}
                  </h3>

                  <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-relaxed text-gray-700 font-light text-justify">
                    {tip.description}
                  </p>

                </div>
              </div>
            );
          })}
        </div>
        
        {/* Image */}
        <div className="
        relative
        mt-4 sm:mt-8
        w-full
        h-[280px] sm:h-[420px] lg:h-[560px]
        rounded-sm
        overflow-hidden
        ">
        <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782560022/pexels-sarvaiya-keval-1976295401-37514707_qs5165.jpg"
            alt="Ideal season for Rajasthan palace hotels - winter months from October to March"
            fill
            sizes="100vw"
            className="object-cover"
        />
        </div>
        <p className="mt-2 text-[12px] sm:text-[13px] text-gray-600 font-light">
          via pexels
        </p>
      </div>

    </section>
  );
}