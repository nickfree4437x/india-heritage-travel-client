"use client";

import Image from "next/image";

export default function HoneymoonFinalSection() {
  return (
    <section className="w-full bg-white py-8">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* DESERT SECTION */}
        <div>

          {/* HEADING */}
          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4
            "
          >
            Desert Dream in Rajasthan
          </h2>

          {/* CONTENT */}
          <div className="max-w-5xl">

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              Let the golden dunes of the desert provide the backdrop
              for romance. Relax in a luxurious tented camp, indulge in
              a private jeep safari, watch a sunset camel ride, and
              indulge in starlight dining that whisks you away to
              timeless sophistication beneath desert skies.
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

              shadow-[0_10px_35px_rgba(0,0,0,0.08)]
            "
          >

            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779651493/ivy-aralia-nizar-_769jmCf26Y-unsplash_sd4oe8.jpg"
              alt="Golden sand dunes of Rajasthan offering an authentic desert travel experience"
              fill
              className="object-cover"
            />

          </div>

          {/* CREDIT */}
          <p className="mt-2 text-[12px] sm:text-[13px] text-[#8d8d8d]">
            via unsplash.com
          </p>

        </div>

        {/* STAND OUT SECTION */}
        <div className="mt-6 sm:mt-8">

          {/* HEADING */}
          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4
            "
          >
            What Makes Our India Heritage Honeymoon Tour Packages Stand Out?
          </h2>

          {/* ITEMS */}
          <div className="space-y-6 sm:space-y-8">

            {/* ITEM */}
            <div className="max-w-5xl">

              <h3
                className="
                  text-[16px] sm:text-[118px] md:text-[20px] tracking-wide text-[#2c2c2c] font-semibold mb-4
                "
              >
                Realistic Romantic Immersion
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                Get intimately connected with every place—off the beaten
                path, we incorporate cultural immersion, local
                interactions, and age-old traditions that deepen your
                experience.
              </p>

            </div>

            {/* ITEM */}
            <div className="max-w-5xl">

              <h3
                className="
                  text-[16px] sm:text-[118px] md:text-[20px] tracking-wide text-[#2c2c2c] font-semibold mb-4
                "
              >
                Seamless Planning, Zero Stress
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                Let us handle the nitty-gritty. From airfare,
                private transfers, and VIP requests to surprises,
                we’re here to craft your ideal love adventure.
              </p>

            </div>

            {/* ITEM */}
            <div className="max-w-5xl">

              <h3
                className="
                  text-[16px] sm:text-[118px] md:text-[20px] tracking-wide text-[#2c2c2c] font-semibold mb-4
                "
              >
                Flexible & Transparent Pricing
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                Enjoy complete flexibility, from short retreats to
                extended escapes—tailored to your preferences.
                We’ll design a beautiful experience that aligns with
                your budget, without compromising on privacy or
                indulgence.
              </p>

            </div>

            {/* ITEM */}
            <div className="max-w-5xl">

              <h3
                className="
                  text-[16px] sm:text-[118px] md:text-[20px] tracking-wide text-[#2c2c2c] font-semibold mb-4
                "
              >
                Safe, Responsible Travel
              </h3>

              <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
                We honor local communities, regions, and heritage.
                Our tours support conservation, responsible tourism,
                and give back to destinations you’ll fall in love with
                while ensuring they stay pristine for generations to come.
              </p>

            </div>

          </div>

        </div>

        {/* READY SECTION */}
        <div
          className="
            mt-6
            sm:mt-8
          "
        >

          {/* HEADING */}
          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4
            "
          >
            Ready to Start Your Forever?
          </h2>

          {/* CONTENT */}
          <div className="max-w-5xl space-y-8">

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              Whether you’d like to celebrate in regal grandeur,
              nestled in tropical green hideaways, nestled in mountain
              tranquility, or surrounded by sunset-kissed beaches—our
              Honeymoon Tour Packages are crafted for romance.
              Begin your best adventure with{" "}
              <span className="font-medium text-[#111111]">
                India Heritage Travel.
              </span>
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[13px] sm:text-[14px] md:text-[14.5px] font-[300] text-justify">
              Contact our romance experts today for a free consultation.
              Let’s create your fairytale—the way you always dreamed.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}