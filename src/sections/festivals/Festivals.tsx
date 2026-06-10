"use client";

import FestivalCard from "./FestivalCard";
import { festivals } from "./festivalData";

export default function Festivals() {
  return (
    <section
      className="bg-[#CBB299] py-6 md:py-6 px-6"
      id="festivals"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="font-heading text-[20px] sm:text-[24px] md:text-[28px] font-semibold tracking-wide text-white mb-2 leading-snug md:whitespace-nowrap">
            Immerse In Festive Celebrations
          </h2>

          <p className="text-[12.5px] sm:text-[13.5px] md:text-[14px] font-light leading-relaxed text-white/90 tracking-wide max-w-[580px] mx-auto">
            Discover India’s most vibrant festivals, rich in culture,
            tradition, and celebration.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:mb-16">
          {festivals.map((festival) => (
            <div key={festival.slug}>
              <FestivalCard {...festival} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}