"use client";
import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0.5 md:py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            The Bishnoi Community: Cultural Significance
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            No Rohet travel guide is really complete without the Bishnoi community, whose villages ring 
            Rohet and somehow give the whole area that distinct, lived in feeling. The Bishnoi faith was 
            started in 1485 by Guru Jambheshwar, who set down 29 guiding principles- the name Bishnoi 
            basically comes from “bish” (twenty) and “noi” (nine), so it feels like a quiet count and 
            most of those rules were about guarding trees, water and wildlife .
          </p>
        </div>

        {/* Image */}
        <div className="mb-2">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1787745127/Screenshot_2026-08-09_at_1.38.57_AM_bwwodj.webp"
              alt="Bishnoi community cultural significance - desert conservation and wildlife protection in Rajasthan"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via rareindia.com
          </p>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
          That resolve got tested in a big way in 1730, at Khejarli, a Bishnoi village not too far from 
          here. When the soldiers of Maharaja Abhay Singh came, to cut khejri trees for palace building, 
          a woman named Amrita Devi stepped forward in front of them, and said, a tree still matters even 
          if it costs your own head. She, plus her daughters, were killed while holding onto the trees, 
          no gentle space between them and the bark. Then the news kept traveling , reaching dozens of 
          nearby villages, and eventually 363 Bishnois from 49 villages offered their lives to protect
          that grove. After that, the Maharaja stopped the felling, and issued a decree that permanently 
          forbade tree cutting and hunting across Bishnoi land.  
        </p>
      </div>
    </section>
  );
}