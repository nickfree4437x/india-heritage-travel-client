"use client";

import Image from "next/image";

const architectureFeatures = [
  {
    description:
      `Show timings vary by season and are subject to change - confirm current timings at the ASI 
       ticket counter or on the ASI website on the day of your visit`,
  },
  {
    description:
      `Entry for the show is separate from daytime complex entry - a combined or evening-only ticket 
       is available`,
  },
  {
    description:
      `The show lasts approximately 40 to 50 minutes and is available in English and Hindi`,
  },
  {
    description:
      `Arrive at least 30 minutes before the show to secure good seating - benches are provided but 
       space is limited`,
  },
];

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 sm:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The Sound and Light Show - A Qutub Complex Evening
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[650px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784176271/070bbfe94c201d5353beb6d14b46e2e3c34dc1e22b5567e5dd09c6b722160542_vxiy09.webp"
              alt="Qutub Minar Sound and Light Show - illuminated 73-metre tower with evening lights"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via getyourguide.com
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            The Qutub Complex hosts a Sound and Light Show on most evenings, narrating the history of 
            the Delhi Sultanate against the dramatically illuminated backdrop of the Qutub Minar and 
            its surrounding monuments. The minar at night - lit from below, its calligraphy catching 
            the warm amber light, the medieval ruins spread around it in silver shadow - is a genuinely 
            magnificent sight.
          </p>
        </div>

        {/* Features */}

        <div className="mt-2 md:mt-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-3">

            {architectureFeatures.map((feature) => (
              <div
                key={feature.description}
                className="border border-gray-200 rounded-md p-5"
              >

                <p className="text-[12px] sm:text-[13px] text-gray-700 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}