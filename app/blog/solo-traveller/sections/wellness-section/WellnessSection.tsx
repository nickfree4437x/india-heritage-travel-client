// app/blogs/solo-traveler/components/WellnessSection.tsx

"use client";

import Image from "next/image";

export default function WellnessSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <h2 className="
          text-[16px] sm:text-[20px] md:text-[22px]
          tracking-wide
          text-[#2c2c2c]
          font-semibold
          mb-2
        ">
          Wellness and Yoga Retreats in India for Solo Female Travellers
        </h2>

        {/* Content */}
        <div className="max-w-6xl">
          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Rishikesh is the obvious pick, but small towns
            offer more peace. The slower the place,
            the easier it is to clear your head.
            Yoga retreats either have intense schedules or
            extremely relaxed days. Choose the one that
            helps you feel better, not the one that looks
            good in photos.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Ashrams can be a challenge - no phones,
            simple food, long silences - but they give
            women on their solo female travel in India
            a grounded space to reflect without stress.
            Ayurveda begins with knowing your own body type.
            Out of that come oils, steam, herbs and food
            routines.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Small clinics can provide the same care as
            fancy centres without breaking the bank.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300]">
            Digital detox retreats take your phone at
            check-in. It feels odd at first.
            Then it feels freeing.
          </p>
        </div>

        {/* Image */}
        <div className="
          relative
          mt-4 sm:mt-6
          w-full
          h-[280px] sm:h-[420px] lg:h-[560px]
          rounded-sm
          overflow-hidden
        ">
          <Image
            src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779641968/yoga_ipnvsv.jpg"
            alt="Yoga and wellness retreat in India for solo female travellers"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-[11px] md:text-[12px] text-gray-600 font-light">
          Image via unsplash
        </p>
      </div>
    </section>
  );
}