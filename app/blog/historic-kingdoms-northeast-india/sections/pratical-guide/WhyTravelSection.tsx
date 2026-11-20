"use client";

import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Why Choose India Heritage Travel
        </h2>

        {/* Content */}
        <div className="space-y-2 md:space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            The best heritage tour is one where logistics allow time for discovery. Indian Heritage Tour
            designs private Northeast India tours around your interests - Ahom capitals, Tripura&apos;s royal
            heritage, monasteries, villages and crafts. This includes personal car and chauffeur service,
            itineraries tailored to your pace, capability and accessibility, purposeful accommodation
            from boutique to practical options, local expert guides on architecture, dynasties, religion
            and traditions, women-traveller-sensitive services, and full support with permits, planning
            and local experiences.
          </p>

          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Planning a heritage journey through Northeast India? Share your preferred travel dates,
            interests and comfort level with India Heritage Travel to begin shaping a private itinerary.{" "}
            <Link
              href="https://indiaheritagetravel.com"
              className="text-[#2c2c2c] underline underline-offset-2 hover:text-gray-500 transition-colors"
            >
              Explore India Heritage Travel
            </Link>{" "}
            |{" "}
            <Link
              href="https://indiaheritagetravel.com/contact"
              className="text-[#2c2c2c] underline underline-offset-2 hover:text-gray-500 transition-colors"
            >
              Contact the team to discuss a tailor-made tour
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}