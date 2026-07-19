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
          mb-1
        ">
          Welcome to India's Wild Side
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            India is home to some of the world's most extraordinary wildlife experiences, where dense 
            jungles, open grasslands, and ancient forests provide a natural habitat for the iconic Royal 
            Bengal tiger, Asiatic lion, one-horned rhinoceros, elephants, leopards, and hundreds of bird 
            species. From the tiger reserves of Ranthambore and Bandhavgarh to the wetlands of Kaziranga 
            and the forests of Jim Corbett, every safari offers a unique adventure into India's rich 
            natural heritage.
          </p>
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Whether you're planning your first wildlife safari or searching for the best national park to 
            spot a tiger, this India Wildlife Safari Guide covers everything you need to know. Discover the 
            top national parks, the best time to visit, safari booking tips, luxury jungle lodges, and practical 
            travel advice to help you plan an unforgettable wildlife adventure.
          </p>
        </div>

        {/* Image */}
        <div className="mt-4 mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784378381/gautam-arora-dCnHbVhM2w8-unsplash_orkjer.jpg"
              alt="Royal Bengal Tiger walking through the forest during a wildlife safari in India"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>
      </div>
    </section>
  );
}