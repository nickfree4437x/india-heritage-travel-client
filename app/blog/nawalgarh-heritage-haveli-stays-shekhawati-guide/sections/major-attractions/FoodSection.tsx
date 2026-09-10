"use client";

import Image from "next/image";

export default function FoodSection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Food and Culinary Experiences
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Nawalgarh's food culture is shaped by its Marwari trading heritage - pulses, cereals, and 
            preserved vegetables take centre stage over fresh leafy greens, given the desert climate. A 
            typical haveli meal includes dal-baati-churma, ker sangri, gatte ki sabzi, and bajre ki roti 
            served with ghee.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Most haveli stays offer open-air dinners where guests can learn about Rajasthani cooking 
            firsthand.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789036124/images_mxsphk.jpg"
              alt="Nawalgarh food and culinary experiences - Marwari cuisine and haveli dining"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via encrypted-tbn0.gstatic.com
          </p>
        </div>
      </div>
    </section>
  );
}