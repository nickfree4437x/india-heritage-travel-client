"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Overview: What Is the India Visa for Foreign Tourists?
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Almost every foreign national needs authorisation to enter India, and ever since 2014 the government 
            has kept shifting that step online through the Electronic Travel Authorization system, or simply the 
            e-Visa. Instead of going to an embassy in person, eligible travellers fill in an application on the 
            official portal, indianvisaonline.gov.in and then they upload a passport scan plus a photo, pay the 
            visa fee, and later get their approval by email , usually within just a few working days.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Now, the e-Visa isn’t really one tidy product. It comes as several different travel purposes - 
            tourism, business, medical care, conferences and short courses under the e-Ayush label - and 
            each purpose has its own paperwork requirements and also its own validity rules. For most 
            readers of this guide, the relevant option is the e-Tourist Visa, which is what we’ll focus on, 
            plus a quick look at when a standard visa issued by an Indian mission is still the more suitable 
            route.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786509098/kit-formerly-convertkit-QMU1z6ReS5A-unsplash_necwn4.jpg"
              alt="India visa documents - passport photo and application checklist"
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