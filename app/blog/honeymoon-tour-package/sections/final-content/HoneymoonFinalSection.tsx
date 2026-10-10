"use client";

import Image from "next/image";
import Link from "next/link";

export default function HoneymoonFinalSection() {
  return (
    <section className="w-full bg-white py-4 md:py-6 pb-10 md:pb-12">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 xl:px-10">

        {/* ===== DESERT SECTION ===== */}
        <div>

          {/* HEADING */}
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2">
            Rajasthan Desert Honeymoon: Romantic Experiences
          </h2>

          {/* CONTENT */}
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-3 sm:mb-4">
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
            Image via unsplash.com
          </p>

        </div>

        {/* ===== STAND OUT SECTION ===== */}
        <div className="mt-2 sm:mt-4">

          {/* HEADING */}
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2">
            What to Consider When Planning Your India Honeymoon
          </h2>

          {/* ITEMS */}
          <div className="space-y-4 md:space-y-6">

            {/* ITEM 1 */}
            <div>
              <h3 className="text-[14px] sm:text-[16px] md:text-[18px] tracking-wide text-[#2c2c2c] font-semibold mb-1.5">
                Realistic Romantic Immersion
              </h3>
              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                Get intimately connected with every place off the beaten
                path, we incorporate cultural immersion, local
                interactions, and age-old traditions that deepen your
                experience.
              </p>
            </div>

            {/* ITEM 2 */}
            <div>
              <h3 className="text-[14px] sm:text-[16px] md:text-[18px] tracking-wide text-[#2c2c2c] font-semibold mb-1.5">
                Seamless Planning, Zero Stress
              </h3>
              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                Let us handle the nitty-gritty. From airfare,
                private transfers, and VIP requests to surprises,
                we're here to craft your ideal love adventure.
              </p>
            </div>

            {/* ITEM 3 */}
            <div>
              <h3 className="text-[14px] sm:text-[16px] md:text-[18px] tracking-wide text-[#2c2c2c] font-semibold mb-1.5">
                Flexible & Transparent Pricing
              </h3>
              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                Enjoy complete flexibility, from short retreats to
                extended escapes tailored to your preferences.
                We'll design a beautiful experience that aligns with
                your budget, without compromising on privacy or
                indulgence.
              </p>
            </div>

            {/* ITEM 4 */}
            <div>
              <h3 className="text-[14px] sm:text-[16px] md:text-[18px] tracking-wide text-[#2c2c2c] font-semibold mb-1.5">
                Safe, Responsible Travel
              </h3>
              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                We honor local communities, regions, and heritage.
                Our tours support conservation, responsible tourism,
                and give back to destinations you'll fall in love with
                while ensuring they stay pristine for generations to come.
              </p>
            </div>

          </div>

        </div>

        {/* ===== READY SECTION ===== */}
        <div className="mt-2 sm:mt-4">

          {/* HEADING */}
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c] mb-2">
            Plan Your Honeymoon in India
          </h2>

          {/* CONTENT */}
          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-3 sm:mb-4">
            Whether you imagine your honeymoon amidst Rajasthan's royal palaces,
            surrounded by the misty mountains of the Himalayas, relaxing on
            sun-kissed beaches, or escaping to peaceful countryside retreats,
            the perfect journey begins with thoughtful planning. Your honeymoon
            should feel personal, effortless, and unforgettable from the moment
            you arrive.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-4 sm:mb-5">
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
          <div className="mt-4 md:mt-6 bg-[#faf8f5] rounded-md p-6 sm:p-8">

            <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
              Explore Honeymoon Tour Packages in India
            </h3>

            <p className="text-[12px] sm:text-[13px] md:text-[13px] text-gray-700 leading-relaxed font-light text-justify mb-4">
              Your honeymoon should be as unique as your love story. India Heritage Travel designs romantic
               escapes across India's most enchanting destinations - from palace stays in Rajasthan to 
               tranquil backwaters in Kerala. Every itinerary is crafted with privacy, luxury, and 
               unforgettable experiences in mind.
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
              Plan Your Honeymoon
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}