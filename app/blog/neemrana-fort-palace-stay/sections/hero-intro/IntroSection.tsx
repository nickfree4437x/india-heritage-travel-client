"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Neemrana Fort Palace Stay: The Art of Staying in a Historic Fort
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            While some places you can book your way into, there are others where one has to be let in. The Neemrana Fort Palace experience falls squarely in the latter category. Just two hours' drive from Delhi, stands a magnificent 15th century Rajput fort on an Aravalli Ridge, with its terraces, courtyards and jharokas (carved windows) arranged in eleven levels upwards. You don't simply walk into this palace; you are let into a place which has witnessed more than five hundred years of history unfold against the walls of its chambers.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            This guide is intended for those travellers who need more than just a booking: the history of the fort, the heritage transformation it underwent in restoration, what to do at the fort and most importantly how to make the experience a smooth one.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1791614054/pexels-pramodtiwari-33797751_w0iba1.jpg"
              alt="Neemrana Fort Palace stay - art of staying in a historic 15th-century fort in Rajasthan"
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