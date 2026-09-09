"use client";

import Image from "next/image";

export default function WildlifeSection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Beyond the Temple: Wildlife in the Aravalli Wilderness
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Because Ranakpur sits in the Aravalli forest belt, visiting here offers more than just 
            architectural splendour. The area also borders the famous Kumbhalgarh Wildlife Sanctuary 
            one of the biggest wolf sanctuary in India, home to many species such as leopards, sloth 
            bear & 4 horned antelope. 
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            You can now take guided leopard safaris and jeep excursion to explore the forest along with 
            your spiritual journey which only a handful of heritage circuit in India can provide you.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1788416464/3_Nagarhole_1_c4j8db.jpg"
              alt="Aravalli wildlife beyond Ranakpur temple - nature and forest landscape"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via explorekodagu
          </p>
        </div>
      </div>
    </section>
  );
}