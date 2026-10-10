"use client";
import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Local Food: What to Eat in Bikaner
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Bikaner is, gram for gram, India’s namkeen sort of capital. Bikaneri Bhujia, that crisp , 
            spiced noodle-snack made from moth-dal flour, is said to have first been readied in 1877 
            during the reign of Maharaja Dungar Singh and it got a Geographical Indication (GI) tag in 
            2010, so the name is protected for items really made in the Bikaner area. The locals also 
            like to say the city’s alkaline groundwater and that dry desert air give it a crunch you 
            just can’t copy anywhere else, and these days it’s shipped worldwide by brands that trace 
            their roots back to Bikaner’s old bhujia bazaars.  
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            And yeah, beyond bhujia, don’t skip rasgulla (Bikaner insists its own separate, drier style), 
            ghewar in festival months, and a proper Rajasthani thali with dal-baati-churma on the table. 
            If you want something a bit more royal sounding, ask about Bikaneri-style laal maas, or go for 
            the vegetarian tasting menus served at heritage hotels like Lallgarh Palace and Gajner Palace. 
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786951026/Bhujia_Bishanlal_Babulal_bhujia_qfyac4.jpg"
              alt="Bikaner local food - bhujia kachori and Rajasthani thali guide"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via cntraveller.in
          </p>
        </div>
      </div>
    </section>
  );
}