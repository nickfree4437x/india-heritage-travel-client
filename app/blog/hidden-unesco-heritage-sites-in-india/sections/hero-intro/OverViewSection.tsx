"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          font-semibold
          text-[#2c2c2c]
          tracking-wide
          mb-1
        ">
          Overview: What Counts as a “Hidden” UNESCO Site in India?
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            India’s UNESCO list breaks down into 36 cultural places, 7 natural spots, and 1 mixed site, 
            scattered across about nineteen states. There’s a little cluster of them - the Taj Mahal, Agra 
            Fort, Ajanta and Ellora, Jaipur’s Pink City, and Fatehpur Sikri - and they kind of take up most 
            of the attention from foreign visitors. The rest, thirty-plus sites, even when they’re just as 
            important, get a much smaller slice of the footfall. A site doesn’t get on the list because it’s 
            meant to stay hidden or obscure, it’s more that it gives the traveler who actually reaches it 
            something the super famous monuments can’t: quiet. You can stand by yourself in a 500-year-old 
            mosque courtyard, or catch a glimpse of a temple ceiling with those stone bracket figures , and 
            somehow there’s no one else in the frame. That’s basically the experience this guide is built 
            around.
          </p>
        </div>

        {/* Image */}
        <div className="mt-4 mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784723931/Rani_ki_Vav_Vishnu_t6czu7.jpg"
              alt="Hidden UNESCO sites in India - offbeat and lesser-known monuments overview"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via wikipedia
          </p>
        </div>
      </div>
    </section>
  );
}