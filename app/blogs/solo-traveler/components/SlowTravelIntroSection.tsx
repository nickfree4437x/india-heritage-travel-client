// app/blogs/solo-traveler/components/SlowTravelIntroSection.tsx

"use client";

import Image from "next/image";

export default function SlowTravelIntroSection() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-24">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* TOP INTRO */}
        <div className="max-w-5xl">

          <p
            className="
              text-[18px]
              sm:text-[20px]

              leading-[2]

              text-[#1f1f1f]

              mb-8
              sm:mb-10
            "
          >
            Slow travel is simple. You stay put.
            You breathe. You allow places to reveal
            themselves to you.
          </p>

          <p
            className="
              text-[18px]
              sm:text-[20px]

              leading-[2]

              text-[#1f1f1f]
            "
          >
            This type of travel works well in India,
            which is not a country that opens itself up
            all at once.
          </p>
        </div>

        {/* WHY INDIA WORKS */}
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
            Why India Works So Well
            <br />
            for Slowing Down
          </h2>

          {/* CONTENT */}
          <div className="max-w-5xl">

            <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f] mb-8">
              India seems like a different place when you
              spend more time in it. People begin to
              recognise you.
            </p>

            <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f] mb-8">
              The chai vendor gives you a nod as you pass by.
              “Have you eaten?” the shopkeeper’s wife asks.
              You cease to feel like a visitor there, and you
              begin to feel that it is your street, your lane,
              in that little nook of the city.
            </p>

            <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f]">
              Solo female travel in India mellows out as well.
              There’s familiarity in faces and schedules,
              there’s predictability, and all of that makes
              the whole experience feel safer.
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

              rounded-sm

              overflow-hidden
            "
          >

            <Image
              src="/blogs/blog-4/solo.jpg"
              alt="Slow Travel India"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* CULTURAL MOMENTS */}
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
            Cultural Moments That Feel Real
          </h2>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f] mb-8">
            Heritage stays put you up in old family homes,
            not globally uniform hotels. You hear tales from
            people who actually live there.
          </p>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f] mb-8">
            You eat food that isn’t copied from a menu and
            cooked in the same way someone’s grandmother
            once cooked it. Craft workshops teach you to
            slow down. The art of carving a wooden block
            for printing, or of mixing dyes from a plant base,
            is slow, steady labour. That’s what makes it
            satisfying. You get to bring home something
            you made with your hands.
          </p>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f] mb-8">
            You have food trails with families that stick
            with you. You hit the morning markets together,
            you “cook” in their kitchen and you pick up
            recipes that exist only in memory,
            not in a recipe book!
          </p>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f] mb-8">
            Village walks will introduce you to a quieter
            world: chalk patterns outside doorsteps,
            children playing cricket in narrow lanes,
            and farmers filing into the fields before dawn.
          </p>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f]">
            These little scenarios are taken for granted by
            locals and cherished by travellers who linger.
          </p>
        </div>
      </div>
    </section>
  );
}