"use client";

import Link from "next/link";

export default function Conclusion() {
  return (
    <section className="w-full bg-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* CONCLUSION */}

        <div className="mb-8">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-4">
            So, When Is the Best Time to Visit the Golden Triangle?
          </h2>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            If there is one key takeaway from this guide, it is that the
            Golden Triangle is at its absolute best between
            <strong> October and March</strong>. During this period,
            travelers enjoy comfortable temperatures, clear skies,
            vibrant cultural experiences, and ideal sightseeing
            conditions across Delhi, Agra, and Jaipur.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            Among these months, <strong>November</strong> and
            <strong> February</strong> stand out as the strongest overall
            choices, while <strong>October</strong> and
            <strong> March</strong> offer an excellent balance between
            weather, crowd levels, and value.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Summer and monsoon seasons may be less conventional, but they
            reward travelers with lower prices, quieter monuments, unique
            photography opportunities, and a completely different perspective
            on India's most famous travel circuit.
          </p>

        </div>

        {/* CTA */}

        <div className="bg-gradient-to-br from-[#faf7f3] to-[#f4efe8] border border-[#e7dfd4] rounded-sm overflow-hidden mb-12">

          <div className=" border-[#AF956C] p-6 sm:p-8">

            <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-[#AF956C] mb-2">
              Plan Your Journey
            </span>

            <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#2c2c2c] mb-4">
              Ready to Explore the Golden Triangle?
            </h3>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light max-w-3xl mb-6">
              Whether you're planning a luxury winter escape, a cultural
              festival journey, a romantic honeymoon, or a photography-focused
              adventure, our travel specialists can create a personalized
              Delhi–Agra–Jaipur itinerary tailored entirely to your travel
              style, interests, and schedule.
            </p>

            <div className="flex flex-wrap gap-3">

              <Link
                href="/customize-your-journey"
                className="inline-flex rounded-sm items-center justify-center px-5 py-3 bg-[#AF956C] text-white text-[12px] hover:bg-[#9d835b] transition-colors"
              >
                Request Your Custom Itinerary
              </Link>

              <Link
                href="/tours/majestic-golden-triangle-tour"
                className="inline-flex rounded-sm items-center justify-center px-5 py-3 border border-[#d8cdbf] text-[#2c2c2c] text-[12px] hover:bg-white transition-colors"
              >
                Explore Golden Triangle Tours
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}