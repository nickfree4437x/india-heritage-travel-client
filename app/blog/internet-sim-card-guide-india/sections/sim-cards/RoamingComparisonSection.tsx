"use client";
import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 sm:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[18px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            International Roaming vs Local SIM
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Home-carrier roaming is consistently the least data-efficient option - often several dollars 
            per megabyte once you exceed a carrier's bundled roaming pack. It can still make sense for a 
            very short trip of a day or two, mainly as a fallback for calls and texts, or for travelers who 
            strongly prefer to keep their existing number rather than manage a second SIM or eSIM. For anything 
            longer, a local SIM or travel eSIM will beat roaming on both cost and data allowance.
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785561556/pexels-jack-sparrow-5917332_qtw7lm.jpg"
                alt="International roaming vs local SIM in India - best option for tourists 2026"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[18px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Documents Needed: Passport, Visa & Photo
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Every SIM and eSIM activation in India - for residents and tourists alike - must pass Know Your 
            Customer (KYC) verification, a requirement set by India's telecom regulator. For foreign visitors, 
            in practice this means bringing the following:
          </p>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
                src="https://res.cloudinary.com/dja5yspwr/image/upload/v1785561664/pexels-mrborys-8061986_gqkorx.jpg"
                alt="Documents needed for India travel - passport visa and photo requirements"
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