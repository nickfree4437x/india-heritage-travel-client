"use client";

import Image from "next/image";

export default function HoneymoonFinalSection() {
  return (
    <section className="w-full bg-white py-4 lg:py-6">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-10">

        {/* ===== DESERT SECTION ===== */}
        <div>

          {/* HEADING */}
          <h2 className="text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] tracking-wide text-[#2c2c2c] font-semibold mb-3 sm:mb-4">
            Desert Dream in Rajasthan
          </h2>

          {/* CONTENT */}
          <p className="text-gray-700 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] font-light text-justify mb-3 sm:mb-4">
            Let the golden dunes of the desert provide the backdrop
            for romance. Relax in a luxurious tented camp, indulge in
            a private jeep safari, watch a sunset camel ride, and
            indulge in starlight dining that whisks you away to
            timeless sophistication beneath desert skies.
          </p>

          {/* IMAGE */}
          <div className="relative w-full h-[220px] sm:h-[380px] md:h-[450px] lg:h-[520px] rounded-sm overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.08)] mt-3 sm:mt-4">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779651493/ivy-aralia-nizar-_769jmCf26Y-unsplash_sd4oe8.jpg"
              alt="Golden sand dunes of Rajasthan offering an authentic desert travel experience"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
              className="object-cover"
            />
          </div>

          {/* CREDIT */}
          <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-[11px] md:text-[12px] font-light text-gray-500">
            via unsplash.com
          </p>

        </div>

        {/* ===== STAND OUT SECTION ===== */}
        <div className="mt-6 sm:mt-8 md:mt-10">

          {/* HEADING */}
          <h2 className="text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] tracking-wide text-[#2c2c2c] font-semibold mb-4 sm:mb-5 md:mb-6">
            What Makes Our India Heritage Honeymoon Tour Packages Stand Out?
          </h2>

          {/* ITEMS */}
          <div className="space-y-5 sm:space-y-6 md:space-y-7">

            {/* ITEM 1 */}
            <div>
              <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-1.5 sm:mb-2">
                Realistic Romantic Immersion
              </h3>
              <p className="text-gray-700 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] font-light text-justify">
                Get intimately connected with every place off the beaten
                path, we incorporate cultural immersion, local
                interactions, and age-old traditions that deepen your
                experience.
              </p>
            </div>

            {/* ITEM 2 */}
            <div>
              <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-1.5 sm:mb-2">
                Seamless Planning, Zero Stress
              </h3>
              <p className="text-gray-700 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] font-light text-justify">
                Let us handle the nitty-gritty. From airfare,
                private transfers, and VIP requests to surprises,
                we're here to craft your ideal love adventure.
              </p>
            </div>

            {/* ITEM 3 */}
            <div>
              <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-1.5 sm:mb-2">
                Flexible & Transparent Pricing
              </h3>
              <p className="text-gray-700 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] font-light text-justify">
                Enjoy complete flexibility, from short retreats to
                extended escapes—tailored to your preferences.
                We'll design a beautiful experience that aligns with
                your budget, without compromising on privacy or
                indulgence.
              </p>
            </div>

            {/* ITEM 4 */}
            <div>
              <h3 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-1.5 sm:mb-2">
                Safe, Responsible Travel
              </h3>
              <p className="text-gray-700 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] font-light text-justify">
                We honor local communities, regions, and heritage.
                Our tours support conservation, responsible tourism,
                and give back to destinations you'll fall in love with
                while ensuring they stay pristine for generations to come.
              </p>
            </div>

          </div>

        </div>

        {/* ===== READY SECTION ===== */}
        <div className="mt-4 sm:mt-6">

          {/* HEADING */}
          <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px] font-semibold text-[#2c2c2c] mb-4 sm:mb-5">
            Ready to Begin Your Forever Together?
          </h2>

          {/* CONTENT */}
          <p className="text-gray-700 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] font-light text-justify mb-3 sm:mb-4">
            Whether you imagine your honeymoon amidst Rajasthan's royal palaces,
            surrounded by the misty mountains of the Himalayas, relaxing on
            sun-kissed beaches, or escaping to peaceful countryside retreats,
            the perfect journey begins with thoughtful planning. Your honeymoon
            should feel personal, effortless, and unforgettable from the moment
            you arrive.
          </p>

          <p className="text-gray-700 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] font-light text-justify mb-4 sm:mb-5">
            At <span className="font-normal text-[#2c2c2c]">
              <a href="https://www.indiaheritagetravel.com" className="hover:underline">
                India Heritage Travel
              </a>
            </span>,
            every honeymoon itinerary is carefully designed around your travel
            style, interests, and pace. From luxury heritage stays and romantic
            experiences to private transfers and expert local guidance, we help
            create journeys that become lifelong memories.
          </p>

          {/* CTA BOX */}
          <div className="bg-[#faf8f5] rounded-md p-5 sm:p-6 md:p-7 lg:p-8">

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light mb-5 sm:mb-6">
              Speak with our honeymoon specialists for a complimentary
              consultation and let us design a personalised journey crafted
              exclusively for the two of you.
            </p>

            <a
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                bg-[#AF956C]
                hover:bg-[#9c7f54]
                active:bg-[#8a6f4a]
                transition-colors
                duration-300
                text-white
                text-[13px] sm:text-[14px] md:text-[15px]
                font-light
                px-6 sm:px-8
                py-2.5 sm:py-3
                rounded-md
                shadow-sm
                hover:shadow-md
              "
            >
              Plan Your Honeymoon
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}