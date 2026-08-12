"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-1.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="md:mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Who Needs a Visa to Visit India
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Nationals of almost every country generally need a visa to go into India, mainly for tourism. 
            There are two obvious holdouts though, Nepal and Bhutan, whose citizens can cross the border 
            using valid identification, so they don’t require a visa at all. For everyone else - and yes, 
            that covers people from the United States, United Kingdom , European Union member states, 
            Canada, Australia , and the Gulf states - you must have either an e-Visa or a regular visa 
            lined up, before you travel.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            There are also a few categories that simply won’t work through the e-Visa system no matter what 
            passport you hold. This includes diplomatic or official passport holders, people of Pakistani 
            origin or nationality, and those with laissez-passer or UN travel documents. If any of that 
            applies to you then you’re going to need to request a regular visa via your nearest Indian 
            embassy or consulate instead.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786508346/global-residence-index-LPdaW746WAw-unsplash_ou5fdg.jpg"
              alt="India visa guide for foreign tourists 2026 - e-visa and application process"
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