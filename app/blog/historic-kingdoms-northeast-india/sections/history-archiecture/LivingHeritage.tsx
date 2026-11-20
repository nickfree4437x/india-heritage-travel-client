"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 md:py-2.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           Living heritage, food and cultural encounters
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Heritage trails become visible mostly when we do not think about monuments. Regarding the condition of Assam, dishes such as thali, khar, tenga fish curry, seasonal vegetable, and rice become possible to eat. It becomes easy for us to associate the cuisine with tea gardens and hospitality at Sivasagar and Jorhat. In case of the cuisine of the Manipuri valley, there are vegetables, herbs, fish, and eromba. The cuisine of the Tripuri people includes bamboo shoots, fish, and seasonal dishes.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The food is different depending on the community or season in the hills. For this reason, it becomes necessary to gather information regarding the composition of the food as well as its cooking process.
          </p>
        </div>

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1795177278/Guide_to_Northeast_Indian_food_b5k3wq.jpg"
              alt="Northeast India's living heritage: food, culture and local encounters"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via cntraveller
          </p>
        </div>
      </div>
    </section>
  );
}