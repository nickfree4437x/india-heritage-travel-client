"use client";

import Image from "next/image";

export default function Cochin() {
  return (
    <div id="cochin" className="w-full max-w-5xl mx-auto scroll-mt-24 md:scroll-mt-28">

      {/* Heading */}
      <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold sm:mb-3 mb-4">
        Cochin – Where Commerce And History Meets
      </h2>

      {/* Description */}
      <div className="text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed font-[300] text-[12px] sm:text-[13px] md:text-[14px] text-justify space-y-3 sm:space-y-4">
        <p>
          Cochin, is former name of Kochi, popularly known as the Queen of the Arabian Sea, is a busy commercial hub rich in spice trading. It is the centre of world spice trade for many centuries. It is emerging cosmopolitan city with busy life on streets, on the other hand it is also financial, commercial & industrial capital of Kerela. Its great to see that Kochi is the only city to have underwater metro system which is world's largest electric boat metro transportation infrastructure.
        </p>

        <p>
          While you travel to <span className="font-medium">Fort Kochi</span>, 
          you'll feel a different time period. The fort is settled into history & culture through ages. Kochi is a place with beautiful monuments & variety of linguistic & ethenic community such as Arabian, Dutch, Phoenician, Portuguese, Chinese, and British influences.
        </p>
      </div>

      {/* Image */}
      <div className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[450px] rounded-md overflow-hidden shadow-md">
        <Image
          src="/destination/coastal-tour/cochin.jpg"
          alt="Cochin Backwaters"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
      </div>

    </div>
  );
}