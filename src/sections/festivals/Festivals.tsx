
"use client";

// ============================================================
// IMPORTS
// ============================================================
import FestivalCard from "./components/FestivalCard";
import { festivals } from "./data/festivalData";

// ============================================================
// COMPONENT
// ============================================================
export default function Festivals() {
  return (
    <section
      className="bg-[#CBB299] py-6 md:py-6 px-6"
      id="festivals"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="font-heading text-[20px] sm:text-[24px] md:text-[28px] font-semibold tracking-wide text-white mb-2 leading-snug md:whitespace-nowrap">
            Discover India's Heritage & Cultural Festivals
          </h2>

          <p className="text-[12.5px] sm:text-[13.5px] md:text-[14px] font-light leading-relaxed text-white tracking-wide max-w-[580px] mx-auto">
            Discover India's most vibrant festivals, rich in heritage, culture, tradition, and celebration.
          </p>
        </div>

        {/* Grid */}
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
