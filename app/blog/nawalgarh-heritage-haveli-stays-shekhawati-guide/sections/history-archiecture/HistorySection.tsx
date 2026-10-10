"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            History of Nawalgarh: From Fortified Outpost to Merchant Capital
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Nawalgarh was established in 1737 by Thakur Nawal Singh Ji Bahadur, a member of the Shekhawat 
            Rajputs clan who created a walled town with four gates, supported by two fortresses. The Bala 
            Qila stands at the centre of Nawalgarh town, while the Fatehgarh Fort acts as the outer 
            fortress. For decades after its establishment, Nawalgarh served as a military town and the 
            administrative centre for the Shekhawat thikana.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            The shift from being a military town to becoming a cultural town came later due to reasons 
            other than royal patronage. Nawalgarh and Shekhawati region were on the routes used by 
            caravans going from the ports of Gujarat to the commercial centers of north and central India. 
            The Marwari merchants who settled in Nawalgarh became prosperous through their trading activities 
            in cotton, opium, and banking. During the nineteenth century, the merchants started moving to 
            booming places such as Calcutta, Bombay, and other places, but they didn’t stop providing financial 
            support to their native land. Instead, they spent a large part of their new found money in building 
            havelis to show off their success to the world. The ancestors of many of the leading businessmen
             houses of India today hail from the region
          </p>
        </div>

        {/* Image */}
        <div className="mb-1">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789031153/360_F_593924304_kXzQrW5HDzpRTrpoEGnwVbJLGeDneNa5_pbmwph.jpg"
              alt="History of Nawalgarh: From Fortified Outpost to Merchant Capital"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via t4.ftcdn.net
          </p>
        </div>
      </div>
    </section>
  );
}