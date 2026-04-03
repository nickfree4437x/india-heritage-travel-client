"use client";

import DestinationCard from "./DestinationCard";
import { destinations } from "./data";

export default function PopularDestinations() {
  return (
    <section className="bg-[#f4f0ea] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#8b6a3d] mb-4">
            Begin Your Journey With Popular Destinations
          </h2>

          <p className="text-base md:text-lg text-[#8b6a3d] tracking-wide">
            Our Best-Loved Routes Across India’s Cultural Landscape.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((item, index) => (
            <DestinationCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}