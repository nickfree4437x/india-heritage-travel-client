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
          Overview of the Red Fort
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            The The Red Fort is sitting on the banks of the Yamuna River in Old Delhi, sort of at the 
            very centre of what once was Shahjahanabad , the Mughal capital established by Shah Jahan 
            in the 17th century. It covers about 255 acres or so and it is boxed in by 2.4 kilometres 
            of red sandstone walls. You could say it was made like a self-contained imperial town , 
            with palaces , halls for audiences, a mosque , a bazaar , gardens and even canal works all 
            stacked inside one fortified complex. For around 200 years it served as both the residence 
            and the administration centre for the Mughal emperors. Nowadays it works as a museum-monument, 
            plus a kind of living emblem of the Indian state , where the Prime Minister speaks to the nation 
            from the ramparts every August 15.
          </p>
        </div>

        {/* Image */}
        <div className="mt-4 mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784276342/pexels-abdus-samad-mahkri-1624305361-34201914_hwi0o9.jpg"
              alt="Red Fort Delhi - panoramic view of Mughal fortress with red sandstone walls and UNESCO heritage"
              fill
              priority
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