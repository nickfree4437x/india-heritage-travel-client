"use client";

import Image from "next/image";

export default function AndamanSection() {
  return (
    <section className="w-full bg-[#f7f4ef] py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* TITLE */}
        <h2 className="text-[40px] sm:text-[54px] leading-tight font-semibold text-[#111]">
          4. Andaman and Nicobar Islands
        </h2>

        {/* IMAGE */}
        <div className="mt-10">

          <div className="relative w-full h-[420px] sm:h-[540px] rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <Image
              src="/blogs/blog-7/andaman.jpg"
              alt="Andaman and Nicobar Islands"
              fill
              className="object-cover"
            />
          </div>

          <p className="mt-4 text-[15px] text-[#8a8a8a]">
            via Andaman Island
          </p>

        </div>

        {/* CONTENT */}
        <div className="mt-14 max-w-5xl mx-auto">

          <p className="text-[19px] sm:text-[20px] leading-[2.05] text-[#6a6a6a] font-light">
            For water sport lovers these islands are paradise. It has
            cleat turquoise water where tourist can experience scuba
            diving and snorkeling. Here there is rich marine life and
            well-preserved coral reefs which are the highlights of this
            island. Here are many historical sights such as Cellular
            jail. These are best spots for summer vacations in India
            since they’ve relaxed vibe and beautiful beaches.
          </p>

          {/* LOCATIONS */}
          <div className="mt-14">

            <h3 className="text-[30px] sm:text-[36px] font-semibold text-[#111]">
              Top Locations to explore:
            </h3>

            <div className="mt-8 space-y-5">

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Havelock Island:
                </span>{" "}
                it is famous for its beautiful beaches like Radhanagar
                and Elephant Beach. It is also a prime spot for scuba
                diving and snorkeling.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Neil Island:
                </span>{" "}
                It has coral reefs and clear waters. It has less tourist
                crowd which makes It more peaceful.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Cellular Jail:
                </span>{" "}
                it is a historic site in Port Blair, which also shows
                sacrifices made by freedom fighters.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
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