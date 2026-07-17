"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 sm:py-1">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            History of the Red Fort: Shah Jahan and the Mughal Empire
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784276730/20191203_Naubat_Khana__Red_Fort__Delhi_0453_6340_DxO_1_b9ovcr.jpg"
              alt="Red Fort history - Shah Jahan's Mughal capital with red sandstone fort and UNESCO"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via wikipedia
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            A proper Red Fort travel guide always begins with Shah Jahan - the fifth Mughal emperor, 
            also the ruler who built the Taj Mahal. In 1639, he shifted the Mughal capital from Agra 
            to Delhi and began constructing his palace-fortress, supervised by architect Ustad Ahmad 
            Lahauri. The fort, called Qila-i-Mubarak ("the Blessed Fort"), was completed in 1648 after 
            nine years of work.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-3">
            The fort’s fortunes seemed to stick with the empire’s, you know, in some way. In 1739 , 
            the Persian ruler Nadir Shah marched into Delhi and took a lot of the fort’s treasure with 
            him, reportedly even the legendary Peacock Throne and, depending on who you ask, the Koh-i-Noor 
            diamond too. Then after the 1857 Indian Rebellion the British grabbed direct control, they knocked 
            down a big chunk of the fort’s palace structures and they repurposed huge sections into military 
            barracks, so much of what visitors see today is really only a sliver of the original place
          </p>
        </div>
      </div>
    </section>
  );
}