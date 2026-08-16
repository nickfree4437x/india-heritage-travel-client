"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Luxury Desert Camps & Heritage Hotels
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Jaisalmer offers two distinct luxury stays: heritage hotels inside restored fort havelis with 
            carved stone interiors and modern comforts, or desert camps at Sam or Khuri with private 
            tented suites, en-suite bathrooms, butler service, and sweeping dune views.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Couples and honeymooners often blend a heritage haveli night for ambience with a luxury desert 
            camp night for a private dune dinner under the stars. Families and groups tend to prefer desert 
            camps for more space and adaptable dining.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786855425/raghav-modi-5JIXFNJNiGc-unsplash_zzfjhw.jpg"
              alt="Jaisalmer accommodation guide - heritage haveli and desert camp"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
          </p>
        </div>
      </div>
    </section>
  );
}