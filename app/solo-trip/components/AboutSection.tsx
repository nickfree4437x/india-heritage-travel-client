"use client";

import Image from "next/image";

export default function AboutSoloWomen() {
  return (
    <section className="w-full bg-[#f8f6f2] py-12 md:py-12">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">

        {/* SECTION 1 */}
        <div>

          {/* CENTER HEADING */}
          <h2
            className="
              text-[20px] sm:text-[24px] md:text-[26px]
              font-semibold
              text-center
              mb-4 md:mb-14
              text-[#2c2c2c]
              tracking-wide
            "
          >
            A little from me to you
          </h2>

          {/* CONTENT GRID */}
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-20 items-center">

            {/* LEFT CONTENT */}
            <div
              className="
                space-y-5

                text-[14px]
                md:text-[15px]

                leading-[1.95]
                font-[300]

                tracking-[0.01em]

                text-[#555555]
              "
            >

              <p className="font-semibold text-gray-800 text-[13px] md:text-[14px] leading-[1.7]"
                style={{
                  fontFamily:
                    '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
                }}>
                Hi, I’m Isha.
              </p>

            <div className="text-gray-500 text-[12px] md:text-[13px] mb-4 font-light leading-[1.7] text-justify">
              <p>
                And as a woman in the travel industry,
                I’ve seen how many thoughts and fears come into someone’s mind before planning a trip to India.
              </p>

              <p className="mt-4">
                Especially online - where so much of what you see only
                shows the chaos, the overwhelm, and the difficult side of traveling here.
              </p>

              <p className="mt-4">
                But honestly?
                <br />
                India feels very different when you know someone is genuinely there for you.
              </p>

              <p className="mt-4">
                When you know there’s someone you can message at any moment.
                Someone helping you make the right choices.
                Someone already thinking about your comfort before you even have to ask.
              </p>

              <p className="mt-4">
                That changes everything.
                <br />
                And that’s exactly why I do this.
              </p>

              <p className="mt-4">
                Over the years, I’ve personally hosted 100+ solo women travellers from around the
                world - helping them experience India in a way that feels calm, safe, flexible,
                and deeply personal.
              </p>

              <p className="mt-4">
                Places where you can genuinely relax after a
                long day without feeling uneasy or uncomfortable.
              </p>
            </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              <div
                className="
                  relative
                  w-full
                  h-[450px]
                  md:h-[500px]

                  overflow-hidden
                  rounded-sm
                "
              >

                <Image
                  src="/solo-women/about.JPEG"
                  alt="Solo Women Travel"
                  fill
                  className="object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}