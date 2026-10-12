"use client";

import Image from "next/image";

export default function OverviewSection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Alwar at a Glance
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Alwar lies in East Rajasthan, roughly 150 km south of Delhi and 150 km north of Jaipur, along 
            the Delhi–Jaipur rail and road corridor. It's known for Bala Quila (Alwar Fort), the City 
            Palace Museum, Moosi Maharani Ki Chhatri, Siliserh Lake, and Sariska Tiger Reserve. Quiet 
            and layered with Rajput and Mughal influences, Alwar carries a strong wildlife and nature 
            element.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Heritage stays include lake palaces, hill forts, and fort-palaces such as Siliserh Lake Palace, 
            Hill Fort Kesroli, and Tijara Fort Palace. Alwar suits couples, heritage lovers, wildlife and 
            photography enthusiasts, Delhi-based weekenders, and slow travellers. Ideal stay: two nights, 
            ideally with one in a heritage property.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1791786751/pexels-roman-saienko-1867764487-29112883_zjvfxj.jpg"
              alt="Alwar Rajasthan - location heritage stays and Sariska Tiger Reserve"
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