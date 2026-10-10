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
          Overview of Humayun's Tomb
        </h2>

        {/* Content */}
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Humayun's Humayun's Tomb is at Nizamuddin East, pretty close to the Dargah of Nizamuddin Auliya, 
            that Sufi saint, and not all that far from Purana Qila, the fort Humayun himself set up. It was 
            built for the most part with red sandstone, but there’s also white marble inlay, like small 
            bright lines inside the stone. The tomb rises about 47 metres from a raised plinth , and the 
            double dome reaches near 42.5 metres , so it feels tall even when you’re at a distance. It also 
            sits dead centre of a symmetrical Charbagh garden, carved up by stone walkways, and little water 
            channels that guide your eyes as you move along. Compared to the busier monuments of Old Delhi, 
            Humayun's Tomb gives you something more like a hush , a contemplative stretch of space, with 
            broad lawns, long sightlines, and a monument meant to be approached slowly, the way the 16th-century 
            designers, kind of hoped.
          </p>
        </div>

        {/* Image */}
        <div className="mt-4 mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784446003/pexels-tarun-malik-69422259-8385840_mw0bqe.jpg"
              alt="Humayun's Tomb - panoramic view of Mughal garden-tomb with UNESCO heritage"
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