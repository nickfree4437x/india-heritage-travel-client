// app/blogs/indian-traveler-guide/components/FinalTravelTipsSection.tsx

"use client";

export default function FinalTravelTipsSection() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-16 pb-20 sm:pb-28">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* QUICK DOS & DONTS */}
        <div>

          {/* HEADING */}
          <h2
            className="
              text-center

              text-[36px]
              sm:text-[44px]
              lg:text-[54px]

              leading-[1.15]

              text-[#111111]

              mb-12
              sm:mb-16
            "
            style={{
              fontFamily: "'Marcellus', serif",
            }}
          >
            Quick Do’s and Don’ts
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

            {/* DO */}
            <div>

              <h3
                className="
                  text-[28px]
                  sm:text-[32px]

                  text-[#111111]

                  mb-8
                "
                style={{
                  fontFamily: "'Marcellus', serif",
                }}
              >
                Do:
              </h3>

              <div className="space-y-5">

                <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f]">
                  • Eat street food from busy stalls
                </p>

                <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f]">
                  • Drink bottled water
                </p>

                <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f]">
                  • Haggle politely
                </p>

                <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f]">
                  • Carry toilet paper
                </p>

                <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f]">
                  • Learn a few Hindi phrases
                </p>
              </div>
            </div>

            {/* DON'T */}
            <div>

              <h3
                className="
                  text-[28px]
                  sm:text-[32px]

                  text-[#111111]

                  mb-8
                "
                style={{
                  fontFamily: "'Marcellus', serif",
                }}
              >
                Don’t:
              </h3>

              <div className="space-y-5">

                <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f]">
                  • Accept food from strangers
                </p>

                <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f]">
                  • Wear heavy jewellery
                </p>

                <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f]">
                  • Point your feet at someone
                </p>

                <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f]">
                  • Touch anyone’s head
                </p>

                <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f]">
                  • Skip travel insurance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* REAL TALK */}
        <div className="max-w-5xl mt-16 sm:mt-20">

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
            The Real Talk
          </h2>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f] mb-8">
            India does its own thing. Trains run late.
            Roads close because of sudden parades.
            Restaurants run out of the dish you came for.
            What feels stressful at the start often becomes
            part of the charm later.
          </p>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f] mb-8">
            For first-timers, organised{" "}
            <span className="font-medium">
              India travel packages
            </span>{" "}
            can be helpful. You get reliable transport,
            trusted guides and a structure to fall back on.
            Once you feel confident, add a few free days
            to wander on your own.
          </p>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f] mb-8">
            India has something for everyone:
            Rajasthan’s forts, Goa’s beaches,
            Varanasi’s river rituals, the Himalayan mountains,
            the food, the chaos and the warmth.
            Arrive prepared, stay aware and let the place
            surprise you in its own way.
          </p>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f]">
            If you prefer a smooth start, working with an
            experienced company like{" "}
            <span className="font-semibold text-[#2457d6]">
              indiaheritagetravel
            </span>{" "}
            keeps things simple so you can actually enjoy
            your trip instead of worrying about logistics.
          </p>
        </div>
      </div>
    </section>
  );
}