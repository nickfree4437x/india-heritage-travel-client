"use client";

import Image from "next/image";

export default function FoodSection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Food in Maheshwar: What to Eat and Where
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Maheshwar's cuisine is uncomplicated and entirely vegetarian, following Malwa conventions. 
            Start your day with poha and jalebi, and try dal bafla- a local variant of Rajasthan's dal 
            baati- along with bhutte ka kees, a regional corn dish.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           Chai and snacks are available at riverside stalls throughout the day. Small cafés and Ahilya Fort's restaurant serve fuller meals, including thalis made from seasonal produce and Narmada Valley grains.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789550251/images_2_gjx07z.jpg"
              alt="Food in Maheshwar - Malwa cuisine street food and local dining"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via encrypted-tbn0
          </p>
        </div>
      </div>
    </section>
  );
}