"use client";

import Image from "next/image";

export default function DarjeelingSection() {
  return (
    <section className="w-full bg-[#f7f4ef] py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* TITLE */}
        <h2 className="text-[40px] sm:text-[54px] leading-tight font-semibold text-[#111]">
          8. Darjeeling, West Bengal
        </h2>

        {/* IMAGE */}
        <div className="mt-10">

          <div className="relative w-full h-[420px] sm:h-[540px] rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <Image
              src="/blogs/blog-7/darjeeling.jpg"
              alt="Darjeeling West Bengal"
              fill
              className="object-cover"
            />
          </div>

          <p className="mt-4 text-[15px] text-[#8a8a8a]">
            via Travels of Bookpacker
          </p>

        </div>

        {/* CONTENT */}
        <div className="mt-14 max-w-5xl mx-auto">

          <p className="text-[19px] sm:text-[20px] leading-[2.05] text-[#6a6a6a] font-light">
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
          <div className="mt-14">

            <h3 className="text-[30px] sm:text-[36px] font-semibold text-[#111]">
              Top Locations to explore:
            </h3>

            <div className="mt-8 space-y-5">

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Tiger Hill:
                </span>{" "}
                It is famous for its amazing sunrise views over the
                Kanchenjunga Range.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Darjeeling Himalayan Railway:
                </span>{" "}
                This is also famous as ‘Toy Train’, offering scenic
                rides through the hills making it a unique travel
                experience.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Batasia Loop:
                </span>{" "}
                it is a spiral railway track where the train makes a
                loop around a beautiful garden which offers amazing
                views of Darjeeling.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
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