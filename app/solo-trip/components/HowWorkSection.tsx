"use client";

import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-[#f8f6f2] py-12 md:py-12">

      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* SECTION LABEL */}
        <p
          className="
            text-[11px]
            tracking-[0.2em]
            uppercase

            text-[#8b7355]

            text-center

            mb-2
          "
        >
          How Everything Works
        </p>

        {/* HEADING */}
        <h2
          className="
            text-[20px]
            sm:text-[24px]
            md:text-[26px]

            font-semibold

            text-center

            mb-4 md:mb-4

            text-[#2c2c2c]

            tracking-wide
          "
        >
          So… how does it all actually work?
        </h2>

        {/* TOP CONTENT */}
        <div
          className="
            max-w-4xl
            mx-auto

            space-y-14

            text-[14px]
            md:text-[15px]

            leading-[2]
            tracking-[0.01em]

            text-[#555555]
            font-[300]
          "
        >

          {/* BLOCK */}
          <div className="space-y-5">

            <h3
              className="font-semibold text-gray-800 text-[13px] md:text-[14px] mb-4 leading-[1.7]"
              style={{
                fontFamily:
                  '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
              }}
            >
              First, we talk.
            </h3>

            <div
              className="text-gray-500 text-[12px] md:text-[13px] mb-4 font-[350] leading-[1.7]"
              style={{
                fontFamily:
                  '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
              }}
            >
              <p className="mt-4">
                Before anything else, I simply want to understand you.
              </p>

              <p className="mt-4">
                The way you like to travel.
              </p>

              <p>
                The pace you enjoy.
              </p>

              <p>
                The kind of places that make you feel comfortable.
              </p>

              <p className="mt-4">
                We can connect over a Google Meet or a call and simply discuss
                ideas together — like two people planning a meaningful journey,
                not just a package.
              </p>
            </div>

          </div>

          {/* BLOCK */}
          <div className="space-y-5">

            <h3
              className="font-semibold text-gray-800 text-[13px] md:text-[14px] mb-4 leading-[1.7]"
              style={{
                fontFamily:
                  '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
              }}
            >
              Then, I personally design your journey.
            </h3>

            <div
              className="text-gray-500 text-[12px] md:text-[13px] mb-4 font-[350] leading-[1.7]"
              style={{
                fontFamily:
                  '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
              }}
            >
              <p>
                Every route is designed around your comfort, interests,
                energy, and travel style.
              </p>

              <p className="mt-4">
                Some women want slow mornings and heritage stays.
              </p>

              <p>
                Some want spirituality, local culture, shopping,
                or quieter experiences.
              </p>

              <p className="mt-4">
                No two journeys feel the same here — because no two women
                travel the same way.
              </p>
            </div>

          </div>

          {/* BLOCK */}
          <div className="space-y-5">

            <h3
              className="font-semibold text-gray-800 text-[13px] md:text-[14px] mb-4 leading-[1.7]"
              style={{
                fontFamily:
                  '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
              }}
            >
              The stays we choose matter deeply.
            </h3>

            <div
              className="text-gray-500 text-[12px] md:text-[13px] mb-4 font-[350] leading-[1.7]"
              style={{
                fontFamily:
                  '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
              }}
            >
              <p>
                The hotels we work with are handpicked carefully — places we
                already know, trust, and regularly work with.
              </p>

              <p>
                Clean spaces. Safe locations. Warm hospitality.
              </p>

              <p className="mt-4">
                Places where you can genuinely relax after a long day without
                feeling uneasy or uncomfortable.
              </p>
            </div>

          </div>

        </div>

        {/* DRIVERS + SUPPORT SECTION */}
        <div className="pt-24 md:pt-28">

          {/* FIXED GRID */}
          <div className="grid lg:grid-cols-[0.9fr_1.3fr] gap-14 xl:gap-20 items-center">

            {/* LEFT IMAGE */}
            <div className="relative order-2 lg:order-1">

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
                  src="/solo-women/drivers.jpeg"
                  alt="Drivers and Guides"
                  fill
                  className="object-cover"
                />

              </div>

            </div>

            {/* RIGHT CONTENT */}
            <div
              className="
                space-y-14
                order-1 lg:order-2

                w-full
              "
            >

              {/* BLOCK */}
              <div className="space-y-5">

                <h3
                  className="font-semibold text-gray-800 text-[13px] md:text-[14px] leading-[1.7]"
                  style={{
                    fontFamily:
                      '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
                  }}
                >
                  About the drivers & guides
                </h3>

                <div
                  className="text-gray-500 text-[12px] md:text-[13px] font-[350] leading-[1.7]"
                  style={{
                    fontFamily:
                      '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
                  }}
                >
                  <p>
                    This part is very important to me.
                  </p>

                  <p className="mt-4">
                    The drivers and guides you travel with are not random people
                    assigned to a trip.
                  </p>

                  <p>
                    Most of them have worked with us for years and are honestly
                    like family now.
                  </p>

                  <p className="mt-4">
                    They understand how women prefer to travel.
                  </p>

                  <p>
                    They respect your space, your comfort, your pace.
                  </p>

                  <p className="mt-4">
                    And throughout the journey, they’re there quietly making sure
                    everything flows smoothly for you.
                  </p>
                </div>

              </div>

              {/* BLOCK */}
              <div className="space-y-5 -mt-4">

                <h3
                  className="font-semibold text-gray-800 text-[13px] md:text-[14px] leading-[1.7]"
                  style={{
                    fontFamily:
                      '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
                  }}
                >
                  And throughout the trip… I’m still there.
                </h3>

                <div
                  className="text-gray-500 text-[12px] md:text-[13px] mb-4 font-[350] leading-[1.7]"
                  style={{
                    fontFamily:
                      '"Lucida Sans", "Lucida Sans Unicode", sans-serif',
                  }}
                >
                  <p>
                    From the moment your trip begins, we stay continuously connected
                    through WhatsApp and calls.
                  </p>

                  <p className="mt-4">
                    So if there’s absolutely anything — even something small —
                    you can simply message me directly.
                  </p>

                  <p>
                    Whether it’s changing a plan, needing help, feeling confused,
                    or simply wanting a recommendation…
                  </p>

                  <p>
                    I’m there.
                  </p>

                  <p className="mt-4">
                    That’s why most women tell me they never really felt alone
                    while traveling here.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}