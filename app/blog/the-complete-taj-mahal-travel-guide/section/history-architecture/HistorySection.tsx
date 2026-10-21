"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 sm:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] leading-tight mb-4">
          History and Architecture of the Taj Mahal
        </h2>

        {/* How Built */}
        <div className="mb-4 md:mb-6">
          <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
            How the Taj Mahal Was Built
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-4">
            The story of the Taj Mahal begins in 1631 when Mumtaz Mahal,
            the beloved wife of Mughal Emperor Shah Jahan, died while
            giving birth to their fourteenth child. Deeply affected by her
            death, Shah Jahan commissioned a grand mausoleum that would
            serve as a lasting tribute to her memory and become one of the
            greatest architectural achievements of the Mughal Empire.
          </p>
        </div>

        {/* Image */}
        <div className="mb-4">
          <div className="relative h-[280px] sm:h-[420px] lg:h-[580px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783056885/pexels-vedant-gupta-2153341111-32673466_ni2fjq.jpg"
              alt="Close-up of pietra dura marble inlay work with semi-precious stone flowers on the Taj Mahal walls"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light">
            Image via pexels
          </p>
        </div>

        {/* Architecture */}
        <div>
          <h3 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-2">
            What Makes the Architecture Extraordinary
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-4">
            The Taj Mahal was constructed using white marble sourced from
            Makrana in Rajasthan, a material renowned for its strength,
            purity, and ability to reflect changing light conditions
            throughout the day. Delicate floral motifs were created using
            the celebrated <em>pietra dura</em> technique, where
            semi-precious stones such as carnelian, jasper, lapis lazuli,
            and onyx were carefully inlaid into marble surfaces.
          </p>
        </div>
      </div>
    </section>
  );
}