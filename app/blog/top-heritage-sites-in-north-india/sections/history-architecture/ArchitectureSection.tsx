"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-3">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Architecture and Cultural Significance
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1784525306/pexels-ravi-roshan-2875998-16931337_lbmfhy.jpg"
              alt="North India architecture - Mughal and Rajput cultural heritage with forts and palaces"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            Tracking North India's architecture in order reveals a clear evolution. The Qutub complex begins 
            with its austere victory-tower style, which then flows into Humayun's Tomb and its pioneering 
            Charbagh garden-tomb plan. Over the decades, Mughal architects kept refining the idea - returning 
            to it again and again - until it reached its most celebrated form at the Taj Mahal.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-3">
            Meanwhile, Rajput palace architecture developed its own distinctive language - filigreed sandstone 
            screens, mirrored halls, and fortifications built for both defence and display. Over time, these 
            approaches blended with Mughal decorative techniques through sustained cultural exchange between 
            the two courts. Understanding this progression transforms a dry list of famous names into a 
            genuinely fascinating story.
          </p>
        </div>
      </div>
    </section>
  );
}