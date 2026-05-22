"use client";

import Image from "next/image";

export default function RishikeshSection() {
  return (
    <section className="w-full bg-[#f7f4ef] py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* TITLE */}
        <h2 className="text-[40px] sm:text-[54px] leading-tight font-semibold text-[#111]">
          2. Rishikesh, Uttarakhand
        </h2>

        {/* IMAGE */}
        <div className="mt-10">

          <div className="relative w-full h-[420px] sm:h-[540px] rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <Image
              src="/blogs/blog-7/rishikesh.jpg"
              alt="Rishikesh Uttarakhand"
              fill
              className="object-cover"
            />
          </div>

          <p className="mt-4 text-[15px] text-[#8a8a8a]">
            via Incredible India
          </p>

        </div>

        {/* CONTENT */}
        <div className="mt-14 max-w-5xl mx-auto">

          <p className="text-[19px] sm:text-[20px] leading-[2.05] text-[#6a6a6a] font-light">
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
          <div className="mt-14">

            <h3 className="text-[30px] sm:text-[36px] font-semibold text-[#111]">
              Top Locations to explore:
            </h3>

            <div className="mt-8 space-y-5">

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Laxman Jhula and Ram Jhula:
                </span>{" "}
                These are unique suspension offering amazing views of
                the Ganges and the surrounding landscape.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Triveni Ghat:
                </span>{" "}
                A sacred ghat where pilgrims gather for the evening
                Ganga Aarti, which is a breathtaking ritual with
                chanting and spiritual vibe.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Parmarth Niketan Ashram:
                </span>{" "}
                One of the largest ashrams in Rishikesh and in the
                world, offering yoga and meditation sessions with
                spiritual lectures.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
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