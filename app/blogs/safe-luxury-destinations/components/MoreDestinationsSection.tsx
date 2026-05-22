// app/blogs/safe-luxury-destinations/components/MoreDestinationsSection.tsx

"use client";

import Image from "next/image";

export default function MoreDestinationsSection() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 lg:py-16 pb-20 sm:pb-24">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* RISHIKESH */}
        <div className="max-w-5xl">

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
            Rishikesh, Uttarakhand
          </h2>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f] mb-8">
            There’s a reason Rishikesh is such a hit with solo
            travellers. The city runs on routine and calm.
            Yoga studios, riverside paths and early evenings
            create the sense that it is a safe, gentle place.
          </p>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f]">
            Some of the luxury stay options are Ananda in the
            Himalayas or Aloha on Ganges. Morning yoga by the
            river, then quieter seaside walks establish an even
            flow. It’s a town that feels safe because it’s built
            around mindfulness rather than noise.
          </p>
        </div>

        {/* PONDICHERRY */}
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
            Pondicherry
          </h2>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f] mb-8">
            Pondicherry is an easy place to travel alone.
            The streets are clean, the ocean breeze refreshing
            and the neighborhoods more compact, which makes
            getting around easy. People do not like to invade
            your personal space here!
          </p>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f]">
            There are also fancier places to stay like
            The Promenade and Palais de Mahe.
            White Town is perfect for leisurely strolls,
            café meals and balmy nights by the ocean.
            The environment feels familiar even on a first visit.
          </p>
        </div>

        {/* VARANASI */}
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
            Varanasi with Guided Support
          </h2>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f] mb-8">
            Varanasi is challenging, but it does not need to
            be overwhelming. If you have proper guidance,
            it can feel orderly and meaningful rather than
            chaotic. Living close to the ghats will save you
            money and also travel time.
          </p>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f]">
            The options available for a luxury stay are
            BrijRama Palace and Taj Ganges.
            A boat ride at sunrise provides a quiet moment
            of reflection, while evening rituals can be
            observed from a distance. In destination such as
            this, a trusted India travel agency plays a very
            important role. If you are going for{" "}
            <span className="font-semibold">
              personalized holiday packages
            </span>
            , make sure to check that it has Varanasi as a
            destination for the wholesome spiritual experience.
          </p>
        </div>

        {/* KERALA */}
        <div className="mt-16 sm:mt-20">

          {/* HEADING */}
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
            Kerala, including Kochi,
            Alleppey, and Munnar
          </h2>

          {/* CONTENT */}
          <div className="max-w-5xl">

            <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f] mb-8">
              Kerala is also considered to be one of the most
              hassle-free parts of India for solo female
              travellers. High-quality healthcare, clear signs
              and polite local behaviour keep visitors at ease.
            </p>

            <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f]">
              For the luxury traveller, pamper yourself with
              a stay at Brunton Boatyard in Kochi,
              at exclusive houseboats in Alleppey, and
              Windermere Estate in Munnar.
              A backwater cruise, tea gardens, and coastal
              walks allow you to enjoy nature without
              seclusion. The experience feels steady and
              well supported.
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
              src="/blogs/blog-2/goa.jpg"
              alt="Kerala Backwaters"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* SOUTH GOA */}
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
            South Goa Resorts
          </h2>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f]">
            South Goa is quieter and more contained than the
            north. Resorts are spaced out, beaches are less
            crowded, and evenings are relaxed rather than loud.
            Luxury resorts near Palolem and Colva provide calm
            surroundings, wellness spas, and private beach
            experiences that feel comfortable for solo women
            wanting a slower pace.
          </p>
        </div>

        {/* PRACTICAL TIPS */}
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
            Practical Safety Tips for Solo Women
          </h2>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f] mb-8">
            Comfort grows with small habits. Choose accommodation
            with strong reviews and visible staff presence.
            Use hotel drivers or known transport services.
            Keep daily plans simple and avoid rushing between locations.
          </p>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f] mb-8">
            Dress in a way that feels respectful to the setting.
            Carry digital copies of documents. Share your itinerary
            with someone you trust. Ask hotel staff for local advice.
            Trust instinct over politeness. Leaving a situation early
            is always acceptable.
          </p>

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#1f1f1f]">
            For travellers who value calm planning, cultural awareness,
            and steady pacing, working with experienced India travel
            companies often removes unnecessary stress. One such name
            is indiaheritagetravel, which focuses on thoughtfully
            designed journeys that respect local culture while keeping
            comfort and safety at the centre.
          </p>
        </div>
      </div>
    </section>
  );
}