"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Ranakpur Travel Guide: India's Most Exquisite Jain Temple
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            There are plenty of amazing destinations when you visit Rajasthan, but sometimes, you might 
            overlook Ranakpur for all that. But don't! It's time for us to show off some beautiful sights 
            of our state. We have made this Ranakpur Travel Guide so you can explore the one-of-its-kind 
            sacred architectural marvels of India which lies in the heart of famous Aravalli mountains 
            situated between lake city Udaipur & the blue city Jodhpur. 
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            This isn’t just about checking off a list of sights in 30 minutes with other tourists it’s 
            about spending an entire day (or more) immersing yourself in this 15th century masterpiece of 
            marble temples, exploring its 1,444 individually-carved pillars and hidden trails amid the 
            forests, wandering among the leopards, or simply enjoying the unspoiled villages that haven’t 
            seen change for generations.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1788414172/surendra-raika-4D2ezQmc3kw-unsplash_bfuwz8.jpg"
              alt="Ranakpur Jain Temple - marble temple in Aravalli hills with 1,444 carved pillars"
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