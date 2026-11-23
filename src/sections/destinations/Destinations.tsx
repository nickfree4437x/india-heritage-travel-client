
"use client";

import DestinationCard from "./DestinationCard";
import { destinations } from "./data";

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function PopularDestinations() {
  return (
    <section
      className="bg-[#CBB299] py-4 sm:py-12 md:py-8 px-4 sm:px-6 md:px-10 lg:px-16 scroll-mt-24"
      id="welcome-destination"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADING SECTION */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 max-w-2xl mx-auto">
          <h2 className="font-heading text-[20px] sm:text-[24px] md:text-[28px] font-semibold tracking-wide text-white mb-2 leading-snug md:whitespace-nowrap">
            Explore India's Most Popular Heritage Destinations
          </h2>

          <p className="text-[12.5px] sm:text-[13.5px] md:text-[14px] font-light leading-relaxed text-white tracking-wide max-w-[580px] mx-auto">
            Discover India's iconic heritage destinations through thoughtfully curated journeys.
          </p>
        </div>

        {/* DESTINATIONS GRID */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-6 mb-10">
          {destinations.map((item, index) => (
            <div key={index}>
              <DestinationCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
