"use client";

import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="w-full bg-white py-2 md:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            India e-Visa Eligible Countries in 2026
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            India’s e-Visa scheme is now, sort of, well over 170 countries and territories, and the roster 
            just keeps growing- the authorities added about two dozen extra nationalities , including a 
            handful across Africa, Latin America, and Eastern Europe, during a mid-2026 push meant to 
            double yearly e-Visa issuance. Since eligibility, smaller categories and reciprocal fees get 
            adjusted from time to time , always double-check your own nationality’s standing on the 
            official portal before you lock in travel dates.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
          Passport and Document Requirements
        </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
           In general, the requirements stay pretty consistent for most e-Tourist Visa applications on the 
           portal: you need a passport that is valid for at least six months past your planned arrival date 
           in India, plus a minimum of two completely blank pages so immigration can place stamps, without 
           any annoying edge cases. Then there’s the recent, front-facing colour photo on a plain white 
           background , it has to match the square-format and the file size limits that the website lists. 
           You also have to upload a clear digital scan of the biographical (photo) page of your passport.
        </p>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
          You’ll additionally need a working email address, and of course a debit or credit card for the 
          online payment step. If your purpose is business, medical, or a conference, expect extra backup 
          papers such as an invitation letter, maybe even a business card, or a hospital confirmation. 
          Photo rejections are kinda one of the most common reasons for delays, so it’s smart to verify 
          head size, the background, and the file format against what the official site says, right before 
          you upload anything.
        </p>
        </div>

        {/* Image */}
        <div className="">
         <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
             src="https://res.cloudinary.com/dja5yspwr/image/upload/v1786509098/kit-formerly-convertkit-QMU1z6ReS5A-unsplash_necwn4.jpg"
             alt="India visa guide for foreign tourists - e-visa and entry requirements 2026"
             fill
             sizes="100vw"
             className="object-cover"
            />
         </div>
         <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            via unsplash
         </p>
        </div>
     </div>
    </section>
  );
}