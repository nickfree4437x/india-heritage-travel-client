"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-4 sm:py-4">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Content */}

        <div className="max-w-6xl">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] leading-tight mb-2">
            Heritage Hotels in Rajasthan: Where History Becomes Part of Your Stay
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-6">
            No one tells you that the most difficult part of checking into a
            heritage hotel in Rajasthan is actually paying attention to the
            check-in process itself. While you're supposed to be handing over
            your passport and signing forms, your eyes are drawn towards
            hand-painted ceilings, centuries-old frescoes, carved archways, and
            royal courtyards that have witnessed generations of history. The
            staff behind the reception desk seem remarkably patient - they have
            probably watched countless guests become distracted by the beauty of
            their surroundings before completing the paperwork.
          </p>

        </div>

        {/* Image */}

        <div className="mb-6">

          <div className="relative h-[280px] sm:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">

            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782555998/pexels-axp-photography-500641970-19160070_xij4wt.jpg"
              alt="Floating marble palace hotel reflecting in calm lake waters surrounded by Aravalli hills"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />

          </div>

          <p className="mt-2 text-[12px] sm:text-[13px] text-gray-600 font-light">
            via pexels
          </p>

        </div>

        {/* Heritage Hotel Explanation */}

        <div className="max-w-6xl">

          <h3 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-2">
            How Does a Heritage Hotel Differ?
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify">
            The term <strong>"heritage hotel"</strong> is often used rather
            loosely within India's hospitality industry. A modern hotel built
            recently with marble floors, arches, and traditional décor does not
            automatically qualify as a heritage property. A genuine heritage
            hotel is usually a restored palace, fort, haveli, or royal
            residence with authentic historical significance. These buildings
            were originally constructed centuries ago and later adapted for
            modern hospitality while preserving their architectural character.
          </p>

        </div>

      </div>

    </section>
  );
}