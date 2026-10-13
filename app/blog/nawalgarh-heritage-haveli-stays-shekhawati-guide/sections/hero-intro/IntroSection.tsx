"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-1">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold text-[#2c2c2c] tracking-wide">
            Nawalgarh: Heritage Mansions & Boutique Haveli Stays
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-2">
            It is a special kind of silence that only gets interrupted by the ringing of a passing bicycle 
            bell or the crowing of a kite in the sky sounds that bring life to the painted walls of 
            Nawalgarh and tell their story to anyone who bothers to look.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
            Nawalgarh Heritage Haveli Stays have become one of Rajasthan's most exciting revelations for 
            travellers who want more than palace photographs - who want to stay where a dusty desert trade 
            centre once dreamt of rivalling European capitals in artistic grandeur. This guide covers 
            Nawalgarh's history, architecture, best havelis, boutique hotels, and everything else you'll 
            need.
          </p>
        </div>

        {/* Image */}
        <div className="">
          <div className="relative h-[280px] md:h-[420px] lg:h-[600px] overflow-hidden rounded-sm">
            <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1789030580/ancient-well-nawalgarh-12793400_edserz.webp"
              alt="Nawalgarh heritage mansions - painted havelis and boutique stays in Shekhawati"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-1 md:mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light leading-relaxed">
            Image via thumbs.dreamstime
          </p>
        </div>
      </div>
    </section>
  );
}