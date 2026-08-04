"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-3 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Banking Hours & GST / Tax Refund Information
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Indian banks are usually open from Monday to Friday, around 10:00 AM to 4:00 PM, and then until 
            roughly 1:00 PM on the 2nd and 4th Saturday of every month, plus most are shut on Sundays. The 
            money exchange desks at airports and in bigger hotels commonly run longer, like into the evenings, 
            and often on weekends too.  
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            India’s Goods and Services Tax, or GST, sits inside the listed price of most goods and services, 
            and unlike some other places, India does not, at the moment, have a wide, simple GST refund setup 
            for travelers at the airport the way the EU or Singapore do. So, for big ticket buys, jewellery, 
            textiles, that kind of thing, always double-check the most current refund rules directly with the 
            retailer , because the terms can shift over time.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785811725/pexels-n-voitkevich-6863181_tqftkp.jpg"
              alt="Banking hours and GST tax refund guide for India - tourist shopping advice 2026"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>
      </div>
    </section>
  );
}