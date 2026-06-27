// app/blogs/indian-traveler-guide/components/FinalTravelTipsSection.tsx

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
            mb-4
          ">
            Quick Do's and Don'ts
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {/* Do */}
            <div>
              <h3 className="
                text-[16px] sm:text-[20px] md:text-[22px]
                tracking-wide
                text-[#2c2c2c]
                font-semibold
                mb-4
              ">
                Do:
              </h3>

              <div className="space-y-4">
                <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
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

                <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
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
                mb-4
              ">
                Don't:
              </h3>

              <div className="space-y-5">
                <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
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
        <div className="max-w-5xl mt-4 sm:mt-6">
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-4
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
      </div>
    </section>
  );
}