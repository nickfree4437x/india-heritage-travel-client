"use client";

import Image from "next/image";

export default function RishikeshSection() {
  return (
    <section className="w-full bg-white py-4 md:py-6">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* TITLE */}
        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
          2. Rishikesh, Uttarakhand
        </h2>

        {/* IMAGE */}
        <div className="mt-2 md:mt-4">

          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779797762/palak-pitroda-05DurkzaUsg-unsplash_zl3qd9.jpg"
              alt="Spiritual retreats and Ganges river views in Rishikesh Uttarakhand India"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <p className="mt-2 text-[11px] md:text-[12px] text-gray-600 font-light">
            Image via unsplash.com
          </p>

        </div>

        {/* CONTENT */}
        <div className="mt-2 md:mt-4 max-w-6xl mx-auto">

          <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Rishikesh is famous for offering unique experiences with
            spiritual rejuvenation and adrenaline-pumping activities.
            It is known as ‘Yoga Capital of the World’, and attracts
            tourists who are looking for spiritual Yoga and meditation
            retreats at the best location. There are many adventurous
            activities as well which can be done such as white-water
            river rafting on the Ganges. You can also camp along the
            riverside which is a perfect escape from city hustle.
          </p>

          {/* LOCATIONS */}
          <div className="mt-4">

            <h3 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold">
              Top Locations to explore:
            </h3>

            <div className="mt-4 space-y-2">

              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Laxman Jhula and Ram Jhula:
                </span>{" "}
                These are unique suspension offering amazing views of
                the Ganges and the surrounding landscape.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Triveni Ghat:
                </span>{" "}
                A sacred ghat where pilgrims gather for the evening
                Ganga Aarti, which is a breathtaking ritual with
                chanting and spiritual vibe.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Parmarth Niketan Ashram:
                </span>{" "}
                One of the largest ashrams in Rishikesh and in the
                world, offering yoga and meditation sessions with
                spiritual lectures.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Neelkanth Mahadev Temple:
                </span>{" "}
                A sacred Hindu temple dedicated to Lord Shiva, located
                between the picturesque surroundings.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}