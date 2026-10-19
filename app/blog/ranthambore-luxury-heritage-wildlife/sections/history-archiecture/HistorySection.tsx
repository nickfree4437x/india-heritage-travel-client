"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 md:py-2.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
           A Short History: From Chauhan Fortress to Royal Hunting Ground
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            There is no definitive evidence about Ranthambore Fort's foundation. Some credit Chauhan 
            ruler Sapaldaksha in the mid-10th century, while others argue its origins predate that. 
            Pre-10th-century evidence suggests the fort formed part of the Chauhan defensive network 
            long after Sapaldaksha's death - Prithviraj Chauhan used it as his stronghold against 
            Muhammad of Ghor in 1192. In 1299, Chauhan king Hammir Dev gave refuge to a rebel general 
            of Alauddin Khilji, who besieged the fort in 1301 - an event celebrated in Rajput folklore.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            After independence, preservation began when the territory became a sanctuary, then a Project 
            Tiger reserve in 1973, and finally a national park.
          </p>
        </div>

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1792404589/pexels-himanshu817-16007596_yrrhmb.jpg"
              alt="Ranthambore history - from Chauhan fortress to royal hunting ground"
              fill
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