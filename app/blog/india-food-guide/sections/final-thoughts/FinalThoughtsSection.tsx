// app/blogs/india-food-guide/components/FinalThoughtsSection.tsx

"use client";

import Link from "next/link";

export default function FinalThoughtsSection() {
  return (
    <section className="w-full bg-white py-8 md:py-8 pb:10 md:pb-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Solo Female Travellers */}
        <div className="max-w-6xl">
          <h2 className="
            text-[16px] sm:text-[20px] md:text-[22px]
            tracking-wide
            text-[#2c2c2c]
            font-semibold
            mb-4
          ">
            The Reality for Solo Female Travellers
          </h2>

          <div className="text-gray-700 mb-6 leading-relaxed text-[13px] md:text-[14.5px] font-[300] text-justify">
            <p>
              Getting sick whilst travelling alone isn't fun.
              Pack hand sanitiser. Use it before meals.
              Bring rehydration salts just in case.
              These tiny precautions matter.
            </p>

            <p className="mt-4">
              Start conservatively. Stick to cooked foods in
              reputable places your first few days.
              Once your stomach adjusts, you can be slightly
              adventurous. But never ignore water and ice rules.
            </p>

            <p className="mt-4">
              Ask other female travellers where they've eaten
              safely. The solo travel community in India shares
              information about reliably safe places.
              Many{" "}
              <span className="font-semibold">
                India travel agencies
              </span>{" "}
              now offer women-only groups because solo female
              travel has increased dramatically.
            </p>
          </div>
        </div>

        {/* Final Thoughts */}
        <div className="max-w-6xl mt-4 md:mt-6">

          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px]
              font-semibold
              text-[#2c2c2c]
              mb-3
            "
          >
            Final Thoughts
          </h2>

          <div className="max-w-6xl">

            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
              Indian cuisine is one of the world's great culinary traditions.
              From fragrant biryanis and regional curries to freshly prepared
              dosas and street-food specialties, the variety and depth of flavours
              found across India are extraordinary. For many travellers, food
              becomes one of the most memorable parts of the entire journey.
            </p>

            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
              Enjoying Indian food safely does not require avoiding local cuisine.
              It simply requires making informed choices. Choose reputable and
              busy restaurants, drink bottled or filtered water, pay attention to
              hygiene standards, and be mindful when trying unfamiliar dishes.
              A little caution allows you to experience India's remarkable food
              culture with confidence.
            </p>

            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4">
              Many well-planned India tours now include restaurant
              recommendations, food-safety guidance, and local expertise that
              help travellers discover authentic regional cuisine without
              unnecessary concerns. This makes it easier to focus on the
              experience itself rather than worrying about what to eat next.
            </p>

          </div>

          {/* CTA */}

          <div className="mt-4 md:mt-6 bg-[#faf8f5] rounded-md p-6 sm:p-8">

            <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
              Planning a Culinary Journey Through India?
            </h3>

            <p className="text-[12px] sm:text-[13px] md:text-[13px] text-gray-700 leading-relaxed font-light mb-4">
              India Heritage Travel designs personalised journeys that combine
              iconic destinations with authentic food experiences, trusted local
              recommendations, and expert travel guidance throughout your trip.
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
      </div>
    </section>
  );
}