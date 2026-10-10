"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Bikaner Travel Guide: Rajasthan's Last Great Desert Kingdom
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            Most first-time visitors to Rajasthan seem to sprint between Jaipur, Udaipur, and Jodhpur, and 
            somehow they never properly get around to Bikaner- which is exactly why this Bikaner travel 
            guide is here . Tucked up in the northern reaches of the Thar Desert, Bikaner feels like the 
            state’s best-hidden heritage gem : a walled, red-sandstone town packed with merchant havelis, 
            a desert fort that still reads as “unconquered”, a temple where thousands of rats are revered 
            like royalty, and a lakeside palace where maharajas once received the Prince of Wales. If you’re 
            the sort of traveler who wants Rajasthan but with fewer people, deeper history, straightforward 
            architecture, and a more unhurried , almost private pace of touring - then Bikaner gives a side 
            of Rajasthan that Jaipur and Jodhpur increasingly can’t.  
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            This guide meanders through Bikaner’s history, highlights both the big-ticket sights and the 
            quieter little corners, plus covers food , festivals, and shopping. You’ll also get a full 
            practical section- when to go, how to reach it , what to budget, and how to map out a half-day 
            one-day, or two-day visit, with extra notes for luxury travelers , families, and solo women 
            travelers too.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[650px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786948703/pexels-byrahul-1011093_qppvsw.jpg"
              alt="Bikaner travel guide - Rajasthan's last great desert kingdom with Junagarh Fort"
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