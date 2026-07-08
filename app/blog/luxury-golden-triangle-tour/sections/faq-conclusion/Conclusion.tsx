"use client";

import Link from "next/link";

export default function ConclusionSection() {
  return (
    <section className="w-full bg-white py-0 sm:py-2 pb-10 md:pb-12">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* CTA Box */}

        <div className="bg-gradient-to-r from-[#faf7f3] to-[#f5f0e9] rounded-md p-6 sm:p-8">

          <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
            Ready to Experience the Golden Triangle in True Luxury?
          </h3>

          <p className="text-[13px] sm:text-[13.5px] text-gray-700 leading-relaxed font-light max-w-6xl text-justify mx-auto mb-4">
            Contact India Heritage Travel today and let our specialists
            design a fully customized Delhi – Agra – Jaipur journey tailored
            around your travel dates, interests, accommodation preferences,
            and dream experiences.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              px-8
              py-2 md:py-2.5
              bg-[#AF956C]
              text-white
              text-[12px]
              sm:text-[13px]
              rounded-md font-light
              transition-all
              duration-300
              hover:bg-[#94774a]
            "
          >
            Plan Your Luxury Journey
          </Link>

        </div>

      </div>

    </section>
  );
}