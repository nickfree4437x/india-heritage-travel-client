"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Ajanta Caves: History & Origins
          </h2>
        </div>

        {/* Image */}
        <div className="mb-2 md:mb-4">
          <div className="relative h-[280px] md:h-[420px] lg:h-[560px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1783593923/pexels-roman-saienko-1867764487-31912390_zdwens.jpg"
              alt="Ajanta Caves exterior carved into basalt cliff above Waghora River, Maharashtra India"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via pexels
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
            The 30 caves at Ajanta were carved in two distinct phases. The earliest - five Hinayana 
            Buddhist prayer halls and monasteries - date from the 2nd century BC to 1st century AD 
            under the Satavahanas. After a gap, a second, more prolific phase under Vakataka king 
            Harishena (c.460-480 AD) produced the remaining 25 caves, housing almost all of Ajanta's 
            celebrated paintings.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            By the 7th century, when Buddhism began its long, slow retreat from the Deccan, Ajanta was 
            left behind. The jungle closed in, completely. The caves stayed forgotten for over a 
            millennium, until April 1819, when a British officer named John Smith, hunting tiger 
            in the Indhyadri hills, looked down from the cliff edge of a horseshoe-shaped gorge 
            above the Waghora River. 
          </p>
        </div>
      </div>
    </section>
  );
}