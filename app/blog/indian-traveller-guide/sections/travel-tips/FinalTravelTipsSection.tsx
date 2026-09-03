// app/blogs/indian-traveller-guide/components/FinalTravelTipsSection.tsx

"use client";

import Link from "next/link";

export default function FinalTravelTipsSection() {
  return (
    <section className="w-full bg-white pb-10 sm:pb-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Quick Do's and Don'ts */}
        <div>
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-2
          ">
            Quick Do's and Don'ts
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20">
            {/* Do */}
            <div>
              <h3 className="
                text-[16px] sm:text-[20px] md:text-[22px]
                tracking-wide
                text-[#2c2c2c]
                font-semibold
                mb-2
              ">
                Do:
              </h3>

              <div className="space-y-2 md:space-y-2">
                <p className="text-gray-700 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                  • Eat street food from busy stalls
                </p>

                <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                  • Drink bottled water
                </p>

                <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                  • Haggle politely
                </p>

                <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                  • Carry toilet paper
                </p>

                <p className="text-gray-700 mb-0 md:mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                  • Learn a few Hindi phrases
                </p>
              </div>
            </div>

            {/* Don't */}
            <div>
              <h3 className="
                text-[16px] sm:text-[20px] md:text-[22px]
                tracking-wide
                text-[#2c2c2c]
                font-semibold
                mb-2
              ">
                Don't:
              </h3>

              <div className="space-y-2 md:space-y-2">
                <p className="text-gray-700 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                  • Accept food from strangers
                </p>

                <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                  • Wear heavy jewellery
                </p>

                <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                  • Point your feet at someone
                </p>

                <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                  • Touch anyone's head
                </p>

                <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                  • Skip travel insurance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Talk */}
        <div className="max-w-5xl mt-4 sm:mt-8">
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-2
          ">
            The Real Talk
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            India does its own thing. Trains run late.
            Roads close because of sudden parades.
            Restaurants run out of the dish you came for.
            What feels stressful at the start often becomes
            part of the charm later.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            For first-timers, organised{" "}
            India travel packages can be helpful. You get
            reliable transport, trusted guides and a structure
            to fall back on. Once you feel confident, add a
            few free days to wander on your own.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            India has something for everyone:
            Rajasthan's forts, Goa's beaches,
            Varanasi's river rituals, the Himalayan mountains,
            the food, the chaos and the warmth.
            Arrive prepared, stay aware and let the place
            surprise you in its own way.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            If you prefer a smooth start, working with an
            experienced company like{" "}
            <Link
              href="https://www.indiaheritagetravel.com"
              className="font-[450] hover:underline text-[#8b6a3d]"
            >
              India Heritage Travel
            </Link>{" "}
            keeps things simple so you can actually enjoy
            your trip instead of worrying about logistics.
          </p>
        </div>

        <div className="mt-4 md:mt-6 bg-[#faf8f5] rounded-md p-6 sm:p-8">

          <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
            Planning Your First Trip to India?
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[13px] text-gray-700 leading-relaxed font-light text-justify mb-4">
            India Heritage Travel specialises in creating seamless first-time journeys that combine 
            comfort, safety, and authentic experiences. From heritage stays and local insights to 
            private transfers and expert guidance - we make your first visit truly unforgettable.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              rounded-md
              bg-[#AF956C]
              px-6
              py-2 md:py-2.5
              text-[12px]
              sm:text-[13px]
              font-light
              text-white
              transition-colors
              duration-300
              hover:bg-[#9d8157]
            "
          >
            Plan Your India Journey
          </Link>

        </div>
      </div>
    </section>
  );
}