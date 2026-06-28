"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogFinalSection() {
  return (
    <section className="w-full bg-white -mt-10 md:pb-12 pb-4">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* Top Section */}
        <div>
          <h2 className="
            text-[18px] sm:text-[22px] md:text-[24px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-4
          ">
            What to Look for in a Travel Partner
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            When you assess a potential India tour packages provider,
            ask:
          </p>

          {/* Bullet Points */}
          <ul className="max-w-6xl">
            <li className="flex items-start gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#8b6d52] mt-2" />
              <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                Do they let you adjust the plan freely?
              </p>
            </li>

            <li className="flex items-start gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#8b6d52] mt-2" />
              <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                Do they have local people helping on the ground?
              </p>
            </li>

            <li className="flex items-start gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#8b6d52] mt-2" />
              <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                Do they give full cost break-downs with no hidden fees?
              </p>
            </li>

            <li className="flex items-start gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#8b6d52] mt-2" />
              <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                Do they show real past journeys, photos,
                honest feedback?
              </p>
            </li>

            <li className="flex items-start gap-4">
              <div className="w-2.5 h-2.5 rounded-full bg-[#8b6d52] mt-2" />
              <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                Do they promise 24/7 support when you're travelling?
              </p>
            </li>
          </ul>

          <p className="mt-4 text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            If yes, that's a good sign.
          </p>

          {/* Image */}
          <div className="
            relative
            mt-4 sm:mt-6
            w-full
            h-[280px] sm:h-[420px] lg:h-[560px]
            rounded-sm
            overflow-hidden
            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          ">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779649909/pexels-chirag-purohit-44055792-15999311-scaled-e1766059375730_whku6m.webp"
              alt="Historic heritage architecture showcasing the beauty of India"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Imagine This Trip */}
        <div className="max-w-6xl mt-6 sm:mt-8">
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-4
          ">
            Imagine This Trip
          </h2>

          <div className="space-y-4">
            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              You arrive in Mumbai. The driver is waiting.
              You move gently through a mix of crowds and calm.
              You see the sunset over the Gateway of India.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              You head to Udaipur. You stay in a haveli with quiet
              walls, speaking with local artists about their craft
              rather than walking past them. You don't worry about
              trains or pick-ups or sudden schedule changes.
              You simply live the moment.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              That shift, from "making this work" to "feeling the
              place", is the change a good agency brings.
            </p>
          </div>
        </div>

        {/* Final Thought */}
        <div className="mt-6 sm:mt-8">
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-4
          ">
            Final Thought
          </h2>

          <div className="max-w-6xl space-y-4">
            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              A trip to India is entwined with surprises.
              It's never totally predictable.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              But with the right India travel company by your side,
              surprises become pleasant, not painful. Your trip turns
              less about scrambling, and more about absorption.
              Less about solving, more about feeling.
              Choose wisely. Let the chaos fade.
              And let bliss remain.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              If you're looking for steady, reliable travel guidance
              from people who truly understand the lay of the land,
              as well as the timing and texture of every place you are
              about to visit, then India Heritage Travel is a name
              to remember.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              For years, they've helped travellers tailor trips that
              feel authentic, not templated.
            </p>

            <p className="text-[16px] sm:text-[18px] text-[#111111]">
              Visit{" "}
              <Link
                href="https://www.indiaheritagetravel.com/"
                className="text-[#8b6d52] hover:underline"
              >
                indiaheritagetravel.com
              </Link>{" "}
              to see how your journey could begin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}