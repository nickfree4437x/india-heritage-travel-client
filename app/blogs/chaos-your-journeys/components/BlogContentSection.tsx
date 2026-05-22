"use client";

import Image from "next/image";

export default function BlogContentSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* TOP INTRO */}
        <div className="max-w-5xl">

          <p
            className="
              text-[18px]
              sm:text-[20px]

              leading-[2]

              text-[#222222]
            "
          >
            You have probably felt that gnawing sense of dread before a big
            trip: so many options, so many mysteries. India is vast. It wears
            many faces. Enter without a plan, and you’ll find yourself starting
            to get overwhelmed. But if you opt for a{" "}
            <span className="font-semibold">
              reputable India travel agency
            </span>
            , the dynamic is different. What once seemed wild becomes tamed.
            Suddenly things that seemed murky grow clear.
          </p>
        </div>

        {/* FIRST SECTION */}
        <div className="mt-16 sm:mt-20">

          {/* HEADING */}
          <h2
            className="
              text-[34px]
              sm:text-[42px]
              lg:text-[52px]

              leading-[1.15]

              text-[#111111]

              mb-8
              sm:mb-10
            "
            style={{
              fontFamily: "'Marcellus', serif",
            }}
          >
            When You Try It Alone
          </h2>

          {/* CONTENT */}
          <div className="max-w-5xl">

            <p className="text-[16px] sm:text-[17px] leading-8 text-[#222222] mb-8">
              Picture this: You arrive in Delhi. You’ve booked hotels and
              trains yourself by using random websites.
            </p>

            <p className="text-[16px] sm:text-[17px] leading-8 text-[#222222] mb-8">
              But now a regional festival shifts your route. The train you
              planned to travel on is cancelled. Or your guest house does not
              come to pick you up. You try calling, but the numbers don’t
              work. You spend hours going through all of this.
            </p>

            <p className="text-[16px] sm:text-[17px] leading-8 text-[#222222]">
              That’s what happens when you go without guidance. Every day
              becomes about fixing problems instead of enjoying places.
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

              rounded-[24px]
              sm:rounded-[28px]

              overflow-hidden
            "
          >

            <Image
              src="/blogs/blog-5/solo.jpg"
              alt="Traveler looking at map"
              fill
              className="object-cover"
            />
          </div>

          {/* IMAGE CREDIT */}
          <p className="mt-3 text-[12px] sm:text-[13px] text-[#8b6d52]">
            Photo Via: Dreamstime.com
          </p>
        </div>

        {/* SECOND SECTION */}
        <div className="max-w-5xl mt-16 sm:mt-20">

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
            What a Good Agency Brings to the Table
          </h2>

          {/* CONTENT */}
          <div>

            <p className="text-[16px] sm:text-[17px] leading-8 text-[#222222] mb-8">
              A trusted{" "}
              <span className="font-semibold">
                India travel agency
              </span>{" "}
              does more than book things. It guards your time,
              your mind and your comfort.
            </p>

            {/* LIST */}
            <ul className="space-y-5 pl-5 sm:pl-6 list-disc marker:text-[#111111] mb-8">

              <li className="text-[16px] sm:text-[17px] leading-8 text-[#222222]">
                It knows what train timings are sensible,
                not risky.
              </li>

              <li className="text-[16px] sm:text-[17px] leading-8 text-[#222222]">
                It chooses local transport you can trust.
              </li>

              <li className="text-[16px] sm:text-[17px] leading-8 text-[#222222]">
                It steers you when cultural norms or climates change.
              </li>

              <li className="text-[16px] sm:text-[17px] leading-8 text-[#222222]">
                It provides you with someone to call when
                things get off plan.
              </li>
            </ul>

            <p className="text-[16px] sm:text-[17px] leading-8 text-[#222222]">
              As a result, your trip is smoother. You stop juggling logistics.
              You begin to absorb what’s around you.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}