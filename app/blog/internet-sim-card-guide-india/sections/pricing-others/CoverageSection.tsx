"use client";
import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 sm:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[18px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            4G, 5G Coverage & Rural Connectivity
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            4G is widely available across cities and highways, with 5G in major metros. But coverage dips 
            in remote spots like Ladakh or rural Rajasthan - download offline maps and have backup contact 
            plans for your driver.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785562444/pexels-trileafu-37888038_to0n52.jpg"
                alt="International roaming vs local SIM in India - best option for tourists 2026"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[18px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Wi-Fi Availability Across India
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-4">
            Wi-Fi is sort of widely there in hotels , cafés and shopping malls around India’s main cities, 
            though speed and reliability kind of drift depending on the place-like, a five-star heritage 
            hotel will usually give you fast and stable access through the whole stay, but budget guesthouses 
            may end up with slower, or even patchy connections. Public Wi-Fi can also show up at some airports 
            and metro stations, but you should treat it with a bit of caution, especially for anything touching 
            banking or sensitive logins. For day to day use, having your own SIM or eSIM data connection is 
            still the safer default, honestly.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[18px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Digital Payments, OTPs & Travel Apps
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            4G is widely available across cities and highways, with 5G in major metros. But coverage dips 
            in remote spots like Ladakh or rural Rajasthan - download offline maps and have backup contact 
            plans for your driver.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785562744/pexels-shvetsa-4226272_kqr1g1.jpg"
                alt="Complete guide to digital payments and OTPs in India - best travel apps for international tourists 2026"
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