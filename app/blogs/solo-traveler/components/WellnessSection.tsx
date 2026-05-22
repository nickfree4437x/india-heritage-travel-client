// app/blogs/solo-traveler/components/WellnessSection.tsx

"use client";

import Image from "next/image";

export default function WellnessSection() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-16">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* HEADING */}
        <h2
          className="
            text-[34px]
            sm:text-[42px]
            lg:text-[48px]

            leading-[1.15]

            text-[#111111]

            mb-8
            sm:mb-10
          "
          style={{
            fontFamily: "'Marcellus', serif",
          }}
        >
          Wellness Without the Noise
        </h2>

        {/* CONTENT */}
        <div className="max-w-5xl">

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f] mb-8">
            Rishikesh is the obvious pick, but small towns
            offer more peace. The slower the place,
            the easier it is to clear your head.
            Yoga retreats either have intense schedules or
            extremely relaxed days. Choose the one that
            helps you feel better, not the one that looks
            good in photos.
          </p>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f] mb-8">
            Ashrams can be a challenge — no phones,
            simple food, long silences — but they give
            women on their solo female travel in India
            a grounded space to reflect without stress.
            Ayurveda begins with knowing your own body type.
            Out of that come oils, steam, herbs and food
            routines.
          </p>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f] mb-8">
            Small clinics can provide the same care as
            fancy centres without breaking the bank.
          </p>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f]">
            Digital detox retreats take your phone at
            check-in. It feels odd at first.
            Then it feels freeing.
          </p>
        </div>

        {/* IMAGE */}
        <div
          className="
            relative

            mt-10
            sm:mt-12

            w-full

            h-[280px]
            sm:h-[420px]
            lg:h-[620px]

            rounded-sm

            overflow-hidden
          "
        >

          <Image
            src="/blogs/blog-4/yoga.jpg"
            alt="Wellness Retreat India"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}