"use client";

import Image from "next/image";

export default function DarjeelingSection() {
  return (
    <section className="w-full bg-white py-6 md:py-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* TITLE */}
        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
          8. Darjeeling, West Bengal
        </h2>

        {/* IMAGE */}
        <div className="mt-4 md:mt-6">

          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779798801/joy-amed-1I07SYGwuys-unsplash_kavncy.jpg"
              alt="Tea gardens and Himalayan mountain views in Darjeeling West Bengal India"
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

          <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Know as ‘Queen of Hills’, Darjeeling is a picturesque town
            which is situated between the Himalayas. It produces world’s
            beat teas and has amazing tea gardens. It is perfect for
            summers since it has cool climate and lush greenery. You can
            take morning trips to Tiger Hills for breathtaking sunrise
            views over Kanchenjunga range which is the third highest
            peak in the world. You must travel through iconic Darjeeling
            Himalayan Railway which is a UNESCO World Heritage Site
            providing a unique travel experience.
          </p>

          {/* LOCATIONS */}
          <div className="mt-4">

            <h3 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
              Top Locations to explore:
            </h3>

            <div className="mt-4 space-y-2">

              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Tiger Hill:
                </span>{" "}
                It is famous for its amazing sunrise views over the
                Kanchenjunga Range.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Darjeeling Himalayan Railway:
                </span>{" "}
                This is also famous as ‘Toy Train’, offering scenic
                rides through the hills making it a unique travel
                experience.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Batasia Loop:
                </span>{" "}
                it is a spiral railway track where the train makes a
                loop around a beautiful garden which offers amazing
                views of Darjeeling.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Padmaja Naidu Himalayan Zoological Park:
                </span>{" "}
                It is home to endangered species such as the red panda
                and snow leopard, this zoo focuses on conservation and
                education.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}