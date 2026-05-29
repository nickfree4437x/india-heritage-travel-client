"use client";

import Image from "next/image";

export default function AndamanSection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* TITLE */}
        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
          4. Andaman and Nicobar Islands
        </h2>

        {/* IMAGE */}
        <div className="mt-6">

          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779798166/dileesh-kumar-KbirwZJIq7g-unsplash_riaaph.jpg"
              alt="Andaman and Nicobar Islands"
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

          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justifyt">
            For water sport lovers these islands are paradise. It has
            cleat turquoise water where tourist can experience scuba
            diving and snorkeling. Here there is rich marine life and
            well-preserved coral reefs which are the highlights of this
            island. Here are many historical sights such as Cellular
            jail. These are best spots for summer vacations in India
            since they’ve relaxed vibe and beautiful beaches.
          </p>

          {/* LOCATIONS */}
          <div className="mt-6">

            <h3 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
              Top Locations to explore:
            </h3>

            <div className="mt-6 space-y-2">

              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Havelock Island:
                </span>{" "}
                it is famous for its beautiful beaches like Radhanagar
                and Elephant Beach. It is also a prime spot for scuba
                diving and snorkeling.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Neil Island:
                </span>{" "}
                It has coral reefs and clear waters. It has less tourist
                crowd which makes It more peaceful.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Cellular Jail:
                </span>{" "}
                it is a historic site in Port Blair, which also shows
                sacrifices made by freedom fighters.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Ross Island:
                </span>{" "}
                it is once the administrative headquarters for the
                British. Now it has historical remnants and beautiful
                scenery.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}