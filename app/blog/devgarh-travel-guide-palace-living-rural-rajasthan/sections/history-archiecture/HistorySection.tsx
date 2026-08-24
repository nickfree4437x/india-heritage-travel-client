"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-1 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The History of Devgarh and Its Palace
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Devgarh’s story is kind of more about Mewar’s landed aristocracy than its actual kings, you 
            know. Here the local rulers carried the title Rawat, more or less like a feudal baron, and 
            their estate- called a thikana in Rajasthani- even at its biggest was among the largest in the 
            whole region. We’re talking several hundred villages, spread out across the Aravalli foothills, 
            all held in faithful service to the Maharana of Udaipur. Devgarh is often described as the 
            fourth-largest thikana across all of Rajasthan, so this is maybe why the palace feels far grander 
            than “village fort” would suggest.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Deogarh Mahal was built in the 1670s by Rawat Dwarka Dasji as a family dwelling with enough 
            fortification to serve as a defensive stronghold. Over the next two centuries, successive 
            Rawats added courtyards, living suites, and ornamental touches. Unlike many similar palaces, 
            Devgarh remained well-kept; later descendants restored it and opened it as a heritage hotel in 
            the late twentieth century.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787540788/794597_819e8124b01b4eca8e94338fde81ff6ef000_eresag.avif"
              alt="Deogarh Mahal - 17th-century palace and heritage hotel in rural Rajasthan"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via deogarhmahal.com
          </p>
        </div>
      </div>
    </section>
  );
}