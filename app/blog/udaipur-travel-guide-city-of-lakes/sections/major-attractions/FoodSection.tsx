"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1.5 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Udaipur Food and Local Cuisine
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Udaipur food culture kinda mixes royal Mewari recipes with regular everyday Rajasthani comfort 
            stuff. Don’t skip dal baati churma, those baked wheat rolls are crushed, then really drenched 
            in ghee, and served alongside spiced lentils, plus sweet churma. Then there’s gatte ki sabzi, 
            you know gram flour dumplings in a tangy yogurt gravy, also laal maas, a fiery Rajputana mutton 
            curry that was historically pretty much favored by royal hunting parties , and ker sangri, a 
            desert-bean and caper style preparation that feels very specific to the region. Together they 
            show how cooking adapted to the arid climate, almost like survival meets flavor.  
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786685600/pexels-anand-raj-222546-5775684_yosqfn.jpg"
              alt="Udaipur food and local cuisine - Rajasthani thali and street food guide"
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