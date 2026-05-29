"use client";

import Image from "next/image";

export default function OotySection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* TITLE */}
        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
          7. Ooty, Tamil Nadu
        </h2>

        {/* IMAGE */}
        <div className="mt-6">

          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779800023/harshal-more-8dS_mTPZ38w-unsplash_dwlicq.jpg"
              alt="Ooty Tamil Nadu"
              fill
              className="object-cover"
            />
          </div>

          <p className="mt-4 text-[12px] md:text-[13px] text-[#8a8a8a]">
            via unsplash.com
          </p>

        </div>

        {/* CONTENT */}
        <div className="mt-6 max-w-6xl mx-auto">

          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
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
          <div className="mt-6">

            <h3 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
              Top Locations to explore:
            </h3>

            <div className="mt-6 space-y-2">

              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Doddabetta Peak:
                </span>{" "}
                This is the highest point in the Nilgiri Mountains with
                breathtaking views of the surrounding valleys and hills.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Ooty Lake:
                </span>{" "}
                it is a human made lake surrounded by Eucalyptus trees.
                It is perfect for boating. It has adjoining amusement
                park and toy train which is best for families.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Botanical Gardens:
                </span>{" "}
                These gardens has a variety of plants which includes
                20-million-year-old fossilized tree. It hosts the annual
                flower show in May which is a major highlight and
                attracts thousands of tourists.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
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