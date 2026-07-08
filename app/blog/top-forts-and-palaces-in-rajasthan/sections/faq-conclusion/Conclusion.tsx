"use client";

import Link from "next/link";

export default function ConclusionSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6 pb-10 md:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Box */}
        <div className="bg-[#faf7f3] rounded-md p-6 md:p-8">
          <h3 className="text-[14px] md:text-[16px] font-semibold text-[#2c2c2c] mb-2">
            Ready to Explore Rajasthan's Royal Heritage?
          </h3>

          <p className="max-w-6xl mx-auto text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light text-justify mb-4">
            Let India Heritage Travel design a personalised Rajasthan itinerary
            featuring magnificent forts, royal palaces, luxury heritage hotels,
            and unforgettable cultural experiences - all planned around your
            interests, travel style, and preferred pace.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#AF956C] hover:bg-[#9c7f54] transition-colors duration-300 text-white px-7 py-2 md:py-2.5 rounded-md font-light text-[12px] md:text-[13px]"
          >
            Plan My Rajasthan Journey
          </Link>
        </div>
      </div>
    </section>
  );
}