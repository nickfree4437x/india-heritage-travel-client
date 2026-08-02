"use client";
import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 sm:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            Troubleshooting & Customer Support
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            If a SIM doesn’t activate within the expected time  window, the quickest “do this” is going back 
            to the place of purchase with your original paperwork, because most activation delays end up being 
            about a document mismatch more than a network fault, yes. Airtel and Jio both have customer care 
            lines and in-app chat support (Airtel Thanks and MyJio) for tourists who have already done the 
            registration part. Also most eSIM providers give you 24/7 live chat, which is usually the fastest 
            route to sort out an activation snag or an APN configuration matter, sometimes.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[15px] sm:text-[16px] md:text-[18px] font-semibold text-[#2c2c2c] tracking-wide">
            Luxury, Solo & Family Traveler Tips
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            For luxury travellers, an international eSIM active from day one offers instant connectivity, 
            while a private guide or driver can help with a local SIM for better long-term value. Solo 
            female travellers benefit from steady data for navigation and staying in touch with trusted 
            contacts - making verified ride-hailing apps easier to use. Families with multiple devices 
            should consider a mobile hotspot or tethering plan to share one connection instead of separate 
            SIMs.
          </p>
        </div>
      </div>
    </section>
  );
}