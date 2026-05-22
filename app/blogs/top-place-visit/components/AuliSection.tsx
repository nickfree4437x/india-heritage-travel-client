"use client";

import Image from "next/image";

export default function AuliSection() {
  return (
    <section className="w-full bg-[#f7f4ef] py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* TITLE */}
        <h2 className="text-[40px] sm:text-[54px] leading-tight font-semibold text-[#111]">
          9. Auli, Uttarakhand
        </h2>

        {/* IMAGE */}
        <div className="mt-10">

          <div className="relative w-full h-[420px] sm:h-[540px] rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <Image
              src="/blogs/blog-7/auli.jpg"
              alt="Auli Uttarakhand"
              fill
              className="object-cover"
            />
          </div>

          <p className="mt-4 text-[15px] text-[#8a8a8a]">
            via Rishikesh Day Tour
          </p>

        </div>

        {/* CONTENT */}
        <div className="mt-14 max-w-5xl mx-auto">

          <p className="text-[19px] sm:text-[20px] leading-[2.05] text-[#6a6a6a] font-light">
            It is also known as ‘Skiing Destination of India’. During
            summers it transforms into amazing green meadow which offers
            beautiful views of Nanda Devi range. If you’re a nature
            lover and adventure enthusiast, it is the perfect spot for
            you. In summer it has pleasant weather making it perfect for
            travelling and trekking and camping. Its snow covered
            mountains with lush green landscape which makes its really
            beautiful for tourists. Anyone looking for natural beauty
            and peace, Auli is the perfect destination.
          </p>

          {/* LOCATIONS */}
          <div className="mt-14">

            <h3 className="text-[30px] sm:text-[36px] font-semibold text-[#111]">
              Top Locations to explore:
            </h3>

            <div className="mt-8 space-y-5">

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Auli Artificial Lake:
                </span>{" "}
                It is one of the highest human made lakes in the world.
                It is a perfect spot for relaxation and photography.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Gurso Bugyal:
                </span>{" "}
                it is a popular trekking destination offering offers
                stunning views of the surrounding peaks.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Chattrakund:
                </span>{" "}
                its is a small lake located near Gurso Bugyal,
                Chattrakund and has crystal-clear water and beautiful
                surroundings.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Kwani Bugyal:
                </span>{" "}
                It is a beautiful grassland popular for trekking and
                camping.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}