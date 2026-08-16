"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Jaisalmer Travel Guide: The Golden City
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            There is a particular hour in Jaisalmer-just after four in the afternoon, when the desert light 
            turns kind of thick and low - and for a moment the whole fort looks like it changes its skin 
            colour. The honey-yellow sandstone that has held this city together for nearly nine hundred 
            years starts to glow, then blaze, then finally calms down into that deep amber tone that gives 
            Jaisalmer its nickname: the Golden City. Anyone scrolling for the “right” Jaisalmer travel guide 
            before a trip is usually trying to find exactly that, the practical details, sure, but also a sort 
            of true feeling for what it is like to stand inside those walls, in person.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            This guide is made for that kind of traveler. Whether you are planning a private honeymoon, a 
            solo journey through Rajasthan, or an actually fully customized luxury itinerary, you will 
            find… well, everything here. Like the history behind the golden stone , the forts and havelis 
            that are genuinely worth your time, and those desert moments that make Jaisalmer stand apart, 
            unlike anywhere else in India. You also get a practical framework so you can turn all of it 
            into one good trip that moves smoothly from the moment you land, even if you somehow don’t 
            know where to start.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786852143/hardik-moradiya-2E5b80ReS7A-unsplash_crpkqj.jpg"
              alt="Luxury desert camp Jaisalmer - tented accommodation in Golden City"
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