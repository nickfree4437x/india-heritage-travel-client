"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            History of Mandawa: From Silk Route Outpost to Painted Town
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            The history of Mandawa goes back to the beginning of the eighteenth century. At that time, 
            Mandawa was created as a fortified outpost for trading activities on a branch of the ancient 
            silk route which linked China, Central Asia and Indian ports together. In 1735, Thakur Nawal 
            Singh, a chieftain of the local Shekhawat Rajput community, erected the Mandawa fort, located 
            in the center of the city to protect the rising trade town and to control the area.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            However, it is only in the nineteenth and twentieth centuries that this place has become really 
            prosperous thanks to the decline of the Mughal Empire and colonial trade of the British Empire. 
            Many members of Marwari and Jain merchant families migrated to colonial Indian cities of Calcutta 
            and Bombay to make money, and then used this money to erect splendid buildings in Shekhawati, 
            including Mandawa, and surpass their rival or neighbor in richness.
          </p>
        </div>

        {/* Image */}
        <div className="mb-1">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1788954265/vikram-chouhan-udaipur-web-designer-tEyo6KzN6X8-unsplash_cuz7ja.jpg"
              alt="History of Mandawa: From Silk Route Outpost to Painted Town"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via unsplash
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          It is exactly the peculiarity of this situation that creates the uniqueness of the Havelis of 
          Shekhawati. The members of the families who did not live in Mandawa any more were competing in 
          creation of the most richly decorated building of this kind, hiring various	
        </p>
      </div>
    </section>
  );
}