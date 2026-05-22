"use client";

import Image from "next/image";

export default function OotySection() {
  return (
    <section className="w-full bg-[#f7f4ef] py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* TITLE */}
        <h2 className="text-[40px] sm:text-[54px] leading-tight font-semibold text-[#111]">
          7. Ooty, Tamil Nadu
        </h2>

        {/* IMAGE */}
        <div className="mt-10">

          <div className="relative w-full h-[420px] sm:h-[540px] rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <Image
              src="/blogs/blog-7/ooty.jpg"
              alt="Ooty Tamil Nadu"
              fill
              className="object-cover"
            />
          </div>

          <p className="mt-4 text-[15px] text-[#8a8a8a]">
            via Wikipedia
          </p>

        </div>

        {/* CONTENT */}
        <div className="mt-14 max-w-5xl mx-auto">

          <p className="text-[19px] sm:text-[20px] leading-[2.05] text-[#6a6a6a] font-light">
            Ooty has vast tea gardens and misty mountains and is also
            known as Udhagamandalam. It has a pleasant weather in
            summers which makes it an ideal time for visiting. Ooty has
            many colonial heritage sites like St. Stephen’s Church or
            Ooty club. You can also enjoy boat rides or a walk amidst
            the greenery o a scenic ride on Ooty lake which is also a
            UNESCO World Heritage site. It has Botanical Garden which
            offers various flowering colors among which Rose Garden has
            thousands of varieties of roses. It also has an amazing
            peak, Doddabetta Peak which ensure it is beat to visit
            during summers.
          </p>

          {/* LOCATIONS */}
          <div className="mt-14">

            <h3 className="text-[30px] sm:text-[36px] font-semibold text-[#111]">
              Top Locations to explore:
            </h3>

            <div className="mt-8 space-y-5">

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Doddabetta Peak:
                </span>{" "}
                This is the highest point in the Nilgiri Mountains with
                breathtaking views of the surrounding valleys and hills.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Ooty Lake:
                </span>{" "}
                it is a human made lake surrounded by Eucalyptus trees.
                It is perfect for boating. It has adjoining amusement
                park and toy train which is best for families.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Botanical Gardens:
                </span>{" "}
                These gardens has a variety of plants which includes
                20-million-year-old fossilized tree. It hosts the annual
                flower show in May which is a major highlight and
                attracts thousands of tourists.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Nilgiri Mountain Railway:
                </span>{" "}
                This is a heritage toy train which shows a scenic
                journey through tunnels, bridges, and lush green
                landscapes, making it a memorable experience for all age
                groups.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}