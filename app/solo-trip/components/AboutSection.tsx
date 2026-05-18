"use client";

import Image from "next/image";

export default function AboutSoloWomen() {
  return (
    <section className="w-full bg-[#f6f1ea] py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* SECTION 2 */}
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2
              className="
                text-[34px]
                md:text-[48px]

                font-[300]
                leading-[1.1]
                tracking-[-0.03em]

                text-[#1f1f1f]

                mb-10
              "
            >
              A little from me to you
            </h2>

            <div
              className="
                space-y-6

                text-[14px]
                md:text-[15px]

                leading-[2]
                font-[300]

                tracking-[0.01em]

                text-[#4d4d4d]
              "
            >
              <p>
                Hi, I’m Isha.
              </p>

              <p>
                And as a woman in the travel industry,
                I’ve seen how many thoughts and fears come into someone’s mind before planning a trip to India.
              </p>

              <p>
                Especially online - where so much of what you see only 
                shows the chaos, the overwhelm, and the difficult side of traveling here.
              </p>

              <p>
                But honestly?
                <br />
                India feels very different when you know someone is genuinely there for you.
              </p>

              <p>
                When you know there’s someone you can message at any moment.
                Someone helping you make the right choices.
                Someone already thinking about your comfort before you even have to ask.
              </p>

              <p>
                That changes everything.
                <br />
                And that’s exactly why I do this.
              </p>

              <p>
                Over the years, I’ve personally hosted 100+ solo women travellers from around the 
                world - helping them experience India in a way that feels calm, safe, flexible, 
                and deeply personal.
              </p>

              <p>
                Places where you can genuinely relax after a 
                long day without feeling uneasy or uncomfortable.
              </p>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="relative w-full h-[620px] overflow-hidden rounded-[28px]">

              <Image
                src="/solo-women/about.JPEG"
                alt="Solo Women Travel"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>

        {/* SECTION 3 */}
        <div className="pt-28 md:pt-36">

          <div className="max-w-5xl space-y-14">
            {/* BLOCK */}
            <div>

              <h3 className="text-[22px] font-[400] text-[#1f1f1f] mb-5">
                About the drivers & guides
              </h3>

              <div className="space-y-5 text-[#4d4d4d] text-[14px] md:text-[15px] leading-[2] font-[300]">
                <p>
                  This part is very important to me.
                </p>

                <p>
                  The drivers and guides you travel with are not random
                  people assigned to a trip.
                </p>

                <p>
                  Most of them have worked with us for years and are honestly
                  like family now.
                </p>

                <p>
                  They understand how women prefer to travel.
                  They respect your space, your comfort, your pace.
                </p>

                <p>
                  And throughout the journey, they’re there quietly making
                  sure everything flows smoothly for you.
                </p>
              </div>

            </div>

            {/* BLOCK */}
            <div>

              <h3 className="text-[22px] font-[400] text-[#1f1f1f] mb-5">
                And throughout the trip… I’m still there.
              </h3>

              <div className="space-y-5 text-[#4d4d4d] text-[14px] md:text-[15px] leading-[2] font-[300]">
                <p>
                  From the moment your trip begins, we stay continuously
                  connected through WhatsApp and calls.
                </p>

                <p>
                  So if there’s absolutely anything — even something small —
                  you can simply message me directly.
                </p>

                <p>
                  Whether it’s changing a plan, needing help,
                  feeling confused, or simply wanting a recommendation…
                  I’m there.
                </p>

                <p>
                  That’s why most women tell me they never really felt
                  alone while traveling here.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}