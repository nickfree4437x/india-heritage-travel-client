"use client";

import Link from "next/link";

export default function ConclusionSection() {
  return (
    <section className="w-full bg-white pb-10 md:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* CTA Box */}
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#faf7f3] to-[#f5f0e9] rounded-md p-6 sm:p-8">
          <h3 className="text-[16px] sm:text-[18px] md:text-[18px] font-semibold text-[#2c2c2c] mb-2">
            Ready to Experience Rawla Narlai?
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[13px] text-gray-700 leading-relaxed font-light text-justify max-w-6xl mx-auto mb-4">
            From selecting the ideal room category to arranging leopard
            safaris, Stepwell Dinner experiences, heritage stays, and
            customized Rajasthan itineraries, our travel specialists can help
            you make the most of everything Rawla Narlai has to offer.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-2 md:py-2.5 bg-[#AF956C] text-white text-[12px] sm:text-[13px] font-light rounded-md hover:bg-[#95764e] transition-colors"
            >
              Plan Your Journey
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}