"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-1.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Silk and Handloom Heritage
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
             The name Murshidabad cannot be separated from the name of silk because this place was known 
             for its mulberry sericulture and its Murshidabad silk used for making saris and scarves. 
             Factories were set up by the Europeans in the 17th and 18th centuries near this town in 
             order to buy their raw silk and other textiles. Silk wealth played an important role in 
             the development of the town.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The most famous of all the textiles is the Baluchari sari. This was first made in the 18th 
            century in Baluchar village of Murshidabad district. In this sari, the pallu has pictorial 
            depictions, which were once of the nawabs and European officers and now depict mythological 
            stories from the Ramayana and Mahabharata. Later, the production was transferred to Bishnupur 
            in Bankura district and now this place produces authentic Baluchari. This sari has also been 
            given the Geographical Indication tag in the year 2011. Other silks like Garad and Korial are 
            also famous.
          </p>
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            One of the must-dos is visiting the loom. Your guide will help you arrange for a visit to 
            the loom in a weaver’s home or cooperative, and then buy your silk there directly. Ensure 
            that you see a silk mark
          </p>
        </div>

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1792580756/pexels-md-mohiul-islam-940923000-35171652_d9lmwr.jpg"
              alt="Murshidabad silk and handloom heritage - traditional Bengal weaving and looms"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>
      </div>
    </section>
  );
}