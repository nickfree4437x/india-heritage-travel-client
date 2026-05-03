"use client";

import DestinationCard from "./DestinationCard";
import { destinations } from "./data";

export default function PopularDestinations() {
  return (
    <section className="bg-[#CBB299] py-12 sm:py-6 px-6 sm:px-10 lg:px-18 scroll-mt-24">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-3xl font-semibold text-white mb-4">
            Begin Your Journey With Popular Destinations
          </h2>

          <p className="text-[14px] sm:text-[14px] md:text-[14px] leading-relaxed text-white tracking-wide">
            Our Best-Loved Routes Across India’s Cultural Landscape.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 md:mb-10 mt-4">
          {destinations.map((item, index) => (
            <DestinationCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}