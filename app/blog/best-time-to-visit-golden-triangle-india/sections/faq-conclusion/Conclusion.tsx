"use client";

import Link from "next/link";

export default function Conclusion() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* CTA Section */}
        <div className="bg-gradient-to-br from-[#faf7f3] to-[#f4efe8] rounded-md overflow-hidden mb-12">
          <div className="border-[#AF956C] p-6 sm:p-8">
            <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-4">
              Ready to Explore the Golden Triangle?
            </h3>

            <p className="text-[12px] sm:text-[13px] md:text-[13px] text-gray-700 leading-relaxed font-light text-justify max-w-6xl mb-4">
              Whether you're planning a luxury winter escape, a cultural
              festival journey, a romantic honeymoon, or a photography-focused
              adventure, our travel specialists can create a personalized
              Delhi – Agra – Jaipur itinerary tailored entirely to your travel
              style, interests, and schedule.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/customize-your-journey"
                className="inline-flex rounded-md items-center justify-center px-5 py-2 bg-[#AF956C] text-white text-[12px] md:text-[13px] font-light hover:bg-[#9d835b] transition-colors"
              >
                Request Your Custom Itinerary
              </Link>

              <Link
                href="/tours/majestic-golden-triangle-tour"
                className="inline-flex rounded-md items-center justify-center px-5 py-2 border border-[#d8cdbf] text-[#2c2c2c] text-[12px] md:text-[13px] font-light hover:bg-white transition-colors"
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