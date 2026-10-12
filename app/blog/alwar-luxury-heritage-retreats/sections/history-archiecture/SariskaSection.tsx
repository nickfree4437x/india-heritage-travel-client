"use client";

import Image from "next/image";

export default function SariskaSection() {
  return (
    <section className="w-full bg-white py-4 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Sariska and the Aravalli Wild Side
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The greatest strength that Alwar possesses compared to other historical cities is the presence 
            of wildlife in its surroundings. Sariska Tiger Reserve covers an area of more than 1,200 square 
            kilometers within its buffer, located in the Aravalli hills. The region was declared as a tiger 
            reserve in 1978 and then as a national park in 1982. When the tigers disappeared from the reserve, 
            in 2008, two tigers were introduced to this place by relocation from Ranthambhore using an air 
            transfer method; their number reached 30 by 2023.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Tiger spots can be seen in the period of March to May when the animals usually come out looking 
            for water, while one can enjoy the pleasant winter days at the park. Even without seeing a tiger, 
            you can have a look at sambar, nilgai, leopard, and many other birds. The Pandu Pol Temple and 
            spring and Siliserh forests are located nearby. The safaris are carried out during dawn and dusk, 
            while the jeeps and canters are allowed entry into the Sariska Gates via certain zones that have 
            a higher probability of encountering animals. The timing for the park, as well as the rates, is 
            very frequent, and it can even be closed during monsoon times, so keep an eye on the timings.
          </p>

        </div>

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1791789412/images_2_dvo5or.jpg"
              alt="Sariska Tiger Reserve - wildlife safari in Aravalli hills near Alwar Rajasthan"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via assets.cntraveller.in
          </p>
        </div>
      </div>
    </section>
  );
}