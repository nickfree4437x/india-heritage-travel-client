"use client";

import Image from "next/image";

export default function AuliSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* TITLE */}
        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold">
          9. Auli, Uttarakhand
        </h2>

        {/* IMAGE */}
        <div className="mt-4 md:mt-6">

          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779798339/aniket-mandish-3cunzsPf3U4-unsplash_ro4pxv.jpg"
              alt="Snow covered mountains and scenic landscapes in Auli Uttarakhand India"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <p className="mt-2 text-[11px] md:text-[12px] text-gray-600 font-light">
            via unsplash.com
          </p>

        </div>

        {/* CONTENT */}
        <div className="mt-4 max-w-6xl mx-auto">

          <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justifyt">
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
          <div className="mt-4">

            <h3 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
              Top Locations to explore:
            </h3>

            <div className="mt-4 space-y-2">

              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Auli Artificial Lake:
                </span>{" "}
                It is one of the highest human made lakes in the world.
                It is a perfect spot for relaxation and photography.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Gurso Bugyal:
                </span>{" "}
                it is a popular trekking destination offering offers
                stunning views of the surrounding peaks.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Chattrakund:
                </span>{" "}
                its is a small lake located near Gurso Bugyal,
                Chattrakund and has crystal-clear water and beautiful
                surroundings.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
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