"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The History of Neemrana Fort Palace
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Built in 1464, the fort-palace complex was constructed by the descendants of Prithviraj Chauhan, who were well-known Rajput kings of Delhi and Ajmer during the 12th century. Since the downfall of the Chauhan capital, the family split into different branches and settled in various regions of the country. Eventually, a certain branch ended up in the hills and built the fort for very obvious reasons – its prominent position on a ridge that overlooks the old trade and war trail between Delhi and Jaipur.
          </p>

          <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            Decline after 1947
          </h3>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The royal family resided in the fort until 1947. With the end of British rule, the collapse of the princely system, and maintenance becoming too costly, the royal fort gradually fell into disrepair. The roof began to cave in, plaster peeled off, and the rains made their way through.
          </p>

          <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            The 1986 restoration
          </h3>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The restoration process started back in 1986 by the founders of Neemrana Hotels Group - Aman Nath and Francis Wacziarg. With their principle of “non-hotel hotels”, conservation was more important than re-invention, and that’s why they were able to transform this ruined fort into a successful heritage hotel. This place opened for tourists in 1991 and has since then been increasing in popularity and size. This company has shown how this type of restoration can be done successfully.
          </p>
        </div>

        {/* Image */}
        <div className="mb-0">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1791614612/pexels-pramodtiwari-33797766_gmexei.jpg"
              alt="Neemrana Fort Palace history - 15th-century Rajput fort in Rajasthan"
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