"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-2
        ">
          Introduction - The Hill That Changed the World
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            This Sanchi Stupa travel guide sort of explains why Sanchi is more than a Bhopal 
            daytrip , you know. It was commissioned by Emperor Ashoka in the 3rd century BCE and the 
            Great Stupa (Stupa No. 1) stands as one of India’s oldest surviving stone monuments. The 
            four richly carved toranas , which were added in the Satavahana period (1st century BCE–1st 
            century CE) , feel like true masterpieces of ancient stone craftsmanship. And the whole 
            complex somehow holds and continues to guard over 1,300 years of Buddhist art and architectural 
            tradition, all together in one place. 
          </p>
        </div>

        {/* Image */}
        <div className="mt-6 mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784119572/bishnu-sarangi-g4PBFb6E280-unsplash_di7qyb.jpg"
              alt="Panoramic view of the Sanchi Stupa complex on its hilltop in Madhya Pradesh at dawn"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via unsplash
          </p>
        </div>
      </div>
    </section>
  );
}