"use client";

import Image from "next/image";

export default function FoodSection() {
  return (
    <section className="w-full bg-white py-1 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            What to Eat
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The cuisine in Murshidabad is Bengali but also has a nawabi tone to it. You can have fish cooked in mustard gravy, rice and dal, seasonal vegetables, and also Mughlai preparations like biryani and kebabs. Bengali sweets form an important part of the cuisine – sandesh, rasgulla, mishti doi, and other specialities. It’s worth mentioning that mangoes and litchis are also specialties of the area. As far as the eating arrangements go in the town itself, they are limited, so do plan accordingly.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1792586183/images_1_xllyqz.jpg"
              alt="What to eat in Murshidabad - Bengali cuisine and local Nawabi-era food"
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