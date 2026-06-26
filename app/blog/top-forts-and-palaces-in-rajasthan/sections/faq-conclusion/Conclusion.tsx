"use client";

import Link from "next/link";

export default function ConclusionSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div>
          <h2 className="text-[18px] sm:text-[22px] md:text-[24px] font-semibold text-[#2c2c2c] leading-tight mb-6">
            Rajasthan's Greatest Forts Are Meant to Be Experienced, Not Rushed
          </h2>

          <p className="max-w-6xl mx-auto text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light mb-4">
            The finest forts and palaces in Rajasthan deserve more than a quick
            visit. The cannon marks that still scar the gates of Mehrangarh
            Fort, the handprints left behind by royal widows at Amber Palace,
            and the silent passages of Taragarh Fort are not simply stories
            displayed on information boards—they are living reminders of the
            people, battles, traditions, and sacrifices that shaped Rajasthan's
            extraordinary history.
          </p>

          <p className="max-w-6xl mx-auto text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light mb-6">
            Travel with curiosity, slow down, and allow yourself time to
            appreciate each monument beyond its architecture. Beautiful
            photographs will come naturally, but understanding the history,
            craftsmanship, and royal legacy behind these remarkable places is
            what transforms a sightseeing trip into an unforgettable journey.
          </p>

        </div>

        {/* CTA Box */}

        <div className="border border-gray-200 bg-white rounded-md p-8 text-center">

          <h3 className="text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] mb-3">
            Ready to Explore Rajasthan's Royal Heritage?
          </h3>

          <p className="max-w-6xl mx-auto text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light mb-6">
            Let India Heritage Travel design a personalised Rajasthan itinerary
            featuring magnificent forts, royal palaces, luxury heritage hotels,
            and unforgettable cultural experiences - all planned around your
            interests, travel style, and preferred pace.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#AF956C] hover:bg-[#9c7f54] transition-colors duration-300 text-white px-7 py-3 rounded-md text-[12px] md:text-[13px]"
          >
            Plan My Rajasthan Journey

          </Link>

          <p className="mt-5 text-[11px] md:tect-[12px] font-light text-gray-500">
            Private Tours • Heritage Hotels • Expert Local Guides • 24/7 Travel Support
          </p>

        </div>

      </div>

    </section>
  );
}