"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Content */}

        <div className="max-w-6xl">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] leading-tight mb-1">
            Heritage Hotels in Rajasthan: Experience Royal History
          </h2>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify mb-2 md:mb-4">
            Staying at a heritage hotel in Rajasthan offers more than a place to
            sleep. Historic courtyards, traditional architectural details, decorative
            ceilings, and period interiors can give visitors a glimpse into the
            region's royal and cultural past. Depending on the property, guests may
            experience the character of a former palace, fort, haveli, or historic
            residence alongside modern hospitality.
          </p>

        </div>

        {/* Image */}

        <div className="mb-2 md:mb-4">

          <div className="relative h-[280px] sm:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">

            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782555998/pexels-axp-photography-500641970-19160070_xij4wt.jpg"
              alt="Taj Lake Palace in Udaipur, Rajasthan, surrounded by Lake Pichola"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />

          </div>

          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light">
            Image via pexels
          </p>

        </div>

        {/* Heritage Hotel Explanation */}

        <div className="max-w-6xl">

          <h3 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] mb-1">
            What Makes a Hotel a Heritage Property?
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[14.5px] leading-relaxed text-gray-700 font-light text-justify">
            A heritage hotel generally occupies a historic building, such as a palace,
            fort, haveli, or former royal residence, that has been adapted for
            hospitality. Its historical significance, original architectural features,
            and preservation of local character help distinguish it from a newly built
            hotel with traditional-style décor. Since properties vary in age, history,
            and conservation, it's worth checking each hotel's background before booking.
          </p>

        </div>

      </div>

    </section>
  );
}