"use client";

import DestinationCard from "./DestinationCard";
import { destinations } from "./data";

export default function PopularDestinations() {
  return (
    <section className="bg-[#CBB299] py-4 sm:py-12 md:py-8 px-4 sm:px-6 md:px-10 lg:px-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 max-w-2xl mx-auto">

          <h2 
            className="font-heading text-[20px] sm:text-[24px] md:text-[28px] font-semibold tracking-wide text-white mb-2 leading-snug md:whitespace-nowrap"
          >
            Begin Your Journey With Popular Destinations
          </h2>

          <p className="text-[12.5px] sm:text-[13.5px] md:text-[14px] font-light leading-relaxed text-white/90 tracking-wide max-w-[580px] mx-auto">
            Our Best-Loved Routes Across India’s Cultural Landscape.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {destinations.map((item, index) => (
            <DestinationCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}