// app/blogs/solo-traveler/components/SlowTravelIntroSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

export default function SlowTravelIntroSection() {
  return (
    <section className="w-full bg-white py-2">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* TOP INTRO */}
        <div className="max-w-6xl">

          <p
            className="
              text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify
            "
          >
            Solo travel is simple. You stay put.
            You breathe. You allow places to reveal
            themselves to you.
          </p>

          <p
            className="
              text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify
            "
          >
            This type of travel works well in India,
            which is not a country that opens itself up
            all at once.
          </p>
        </div>

        {/* WHY INDIA WORKS */}
        <div className="mt-6 sm:mt-8">

          {/* HEADING */}
          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2
            "
          >
            Why India Is Well Suited to Solo Female Travel
          </h2>

          {/* CONTENT */}
          <div className="max-w-6xl">

            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              India seems like a different place when you
              spend more time in it. People begin to
              recognise you.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              The chai vendor gives you a nod as you pass by.
              “Have you eaten?” the shopkeeper’s wife asks.
              You cease to feel like a visitor there, and you
              begin to feel that it is your street, your lane,
              in that little nook of the city.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              <Link href="/solo-women-travel" className="hover:underline font-[400]">Solo female travel in India</Link> mellows out as well.
              There’s familiarity in faces and schedules,
              there’s predictability, and all of that makes
              the whole experience feel safer.
            </p>
          </div>

          {/* IMAGE */}
          <div
            className="
              relative
              mt-4
              sm:mt-6
              w-full
              h-[280px]
              sm:h-[420px]
              lg:h-[560px]
              rounded-sm
              overflow-hidden"
          >
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779641965/solo_znipyv.jpg"
              alt="Solo female traveller experiencing Indian culture, heritage and local traditions"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-2 text-[11px] md:text-[12px] text-gray-600 font-light">
            via unsplash
          </p>
        </div>

        {/* CULTURAL MOMENTS */}
        <div className="max-w-6xl mt-4 sm:mt-6">

          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2
            "
          >
            Cultural Experiences for Solo Female Travellers in India
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Heritage stays put you up in old family homes,
            not globally uniform hotels. You hear tales from
            people who actually live there.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            You eat food that isn’t copied from a menu and
            cooked in the same way someone’s grandmother
            once cooked it. Craft workshops teach you to
            slow down. The art of carving a wooden block
            for printing, or of mixing dyes from a plant base,
            is slow, steady labour. That’s what makes it
            satisfying. You get to bring home something
            you made with your hands.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            You have food trails with families that stick
            with you. You hit the morning markets together,
            you “cook” in their kitchen and you pick up
            recipes that exist only in memory,
            not in a recipe book!
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            Village walks will introduce you to a quieter
            world: chalk patterns outside doorsteps,
            children playing cricket in narrow lanes,
            and farmers filing into the fields before dawn.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
            These little scenarios are taken for granted by
            locals and cherished by travellers who linger.
          </p>
        </div>
      </div>
    </section>
  );
}