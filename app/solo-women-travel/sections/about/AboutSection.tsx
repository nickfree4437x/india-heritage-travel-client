"use client";

import Image from "next/image";

export default function AboutSoloWomen() {
  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        {/* Section Header */}
        <h2 className="
          text-[20px] sm:text-[24px] md:text-[26px]
          font-semibold
          text-center
          text-[#2c2c2c]
          tracking-wide
          mb-4 md:mb-14
        ">
          A little from me to you
        </h2>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Introduction */}
            <div className="border-l-2 border-[#CBB299] pl-5">
              <p className="text-gray-800 text-base md:text-lg font-semibold">
                Hi, I'm Isha.
              </p>
              <p className="
                text-[#5f5f5f]
                text-[12px] sm:text-[13px] md:text-[14px]
                font-light
                leading-relaxed
                text-justify
              ">
                And as a woman in the travel industry,
                I've seen how many thoughts and fears come into someone's mind before planning a trip to India.
              </p>
            </div>

            {/* Problem Statement */}
            <div className="bg-gray-50 p-5 rounded-lg">
              <p className="
                text-[#5f5f5f]
                text-[12px] sm:text-[13px] md:text-[14px]
                font-light
                leading-relaxed
                text-justify
              ">
                Especially online - where so much of what you see only
                shows the chaos, the overwhelm, and the difficult side of traveling here.
              </p>
            </div>

            {/* Emotional Shift */}
            <div>
              <p className="
                text-[#5f5f5f]
                text-[12px] sm:text-[13px] md:text-[14px]
                font-light
                leading-relaxed
                text-justify
                pl-5
              ">
                But honestly?
                <br />
                India feels very different when you know someone is genuinely there for you.
              </p>
            </div>

            {/* Promise / Assurance */}
            <div className="bg-[#f8f6f2] p-5 rounded-lg border border-[#f8f6f2]">
              <p className="
                text-gray-600
                text-[12px] sm:text-[13px] md:text-[14px]
                font-light
                leading-relaxed
                text-justify
              ">
                When you know there's someone you can message at any moment.
                <br />
                Someone helping you make the right choices.
                <br />
                Someone already thinking about your comfort before you even have to ask.
              </p>
              <p className="text-[#8b6a3d] text-xs md:text-[13px] mt-3">
                That changes everything.
                <br />
                And that's exactly why I do this.
              </p>
            </div>

            {/* Experience & Trust */}
            <div className="space-y-3">
              <p className="
                text-[#5f5f5f]
                text-[12px] sm:text-[13px] md:text-[14px]
                font-light
                leading-relaxed
                text-justify
                pl-5
              ">
                Over the years, I've personally hosted <span className="font-semibold text-gray-700">100+ solo women travellers</span> from around the
                world - helping them experience India in a way that feels calm, safe, flexible,
                and deeply personal.
              </p>

              <div className="relative text-center">
                <p className="
                  text-[#8b6a3d]
                  italic
                  text-[13px] sm:text-[14px] md:text-[15px]
                  font-light
                  leading-relaxed
                  max-w-2xl
                  mx-auto
                ">
                  "You may arrive in India alone,
                  but you'll never feel like you're travelling alone."
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="
              relative
              w-full
              h-[450px] md:h-[500px]
              overflow-hidden
              rounded-sm
            ">
              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779626927/about_fd99mg.jpg"
                alt="Isha helping solo women travellers explore India safely and confidently"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}