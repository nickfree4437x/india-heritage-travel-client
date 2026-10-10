"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Overview: Why Jaisalmer Is Called the Golden City
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Jaisalmer is way out on the western edge of Rajasthan, a lot nearer to the Pakistan border 
            than to any big Indian metropolis, and it feels almost tucked deep inside the Thar Desert. 
            It’s one of the last spots in India where a whole old town- fort, havelis , temples, bazaars 
            - still hangs together, mostly intact. Even better, most of it was built using a single 
            material: a soft yellow sandstone quarried nearby, so the entire place seems like somebody 
            carved the town out of one block of gold.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Unlike Jaipur’s “Pink City” image, which is mostly just paint, Jaisalmer’s gold is more structural, 
            you know. Every wall, every carved jharokha (that overhanging balcony), every bastion of the fort 
            all share the same warm sandstone, so the tone shifts on its own with the sun rather than going 
            dull like a thin layer of wash. That’s why photographers, filmmakers, and heritage travelers keep 
            coming back, the place really looks changed at 7 a.m. , at noon, and also near sunset.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786852304/pexels-shootsaga-35130760_ebpm2f.jpg"
              alt="Jaisalmer Golden City travel guide - Jaisalmer Fort desert and Sam Sand Dunes"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via pexels
          </p>
        </div>
      </div>
    </section>
  );
}