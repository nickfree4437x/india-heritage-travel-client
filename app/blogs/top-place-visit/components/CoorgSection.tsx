"use client";

import Image from "next/image";

export default function CoorgSection() {
  return (
    <section className="w-full bg-[#f7f4ef] py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* TITLE */}
        <h2 className="text-[40px] sm:text-[54px] leading-tight font-semibold text-[#111]">
          6. Coorg, Karnataka
        </h2>

        {/* IMAGE */}
        <div className="mt-10">

          <div className="relative w-full h-[420px] sm:h-[540px] rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <Image
              src="/blogs/blog-7/coorg.jpg"
              alt="Coorg Karnataka"
              fill
              className="object-cover"
            />
          </div>

          <p className="mt-4 text-[15px] text-[#8a8a8a]">
            Via Iris Holidays
          </p>

        </div>

        {/* CONTENT */}
        <div className="mt-14 max-w-5xl mx-auto">

          <p className="text-[19px] sm:text-[20px] leading-[2.05] text-[#6a6a6a] font-light">
            It is a small-town famous for its coffee plantation and
            breathtaking landscapes. It has cool climate which makes it
            perfect during summers. Here you can do many activities such
            as trekking through lush greenery or visiting Abbey Falls.
            Here are some must try local cuisines which are dominated by
            Kodava specialties which adds flavors to your food
            experience. Besides all of these it has also rich culture
            and history. It has ancient temples and forts like Madikeri
            fort and Omkareshwara temple offering peeks into past. Here
            you can also indulge in many activities such as River
            rafting in Barapole river and Exploring Dubare elephant camp
            where you can engage with animals.
          </p>

          {/* LOCATIONS */}
          <div className="mt-14">

            <h3 className="text-[30px] sm:text-[36px] font-semibold text-[#111]">
              Top Locations to explore:
            </h3>

            <div className="mt-8 space-y-5">

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Abbey Falls:
                </span>{" "}
                It is a breathtaking waterfall situated between coffee
                plantations and spice estates. It is beat for nature
                walks and photography.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Dubare Elephant Camp:
                </span>{" "}
                Here you can have unique experience of interacting with
                elephants which includes feeding and bathing them.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Madikeri Fort:
                </span>{" "}
                It is a historical fort which offers panoramic views of
                Coorg. It also has museum which showcase the region’s
                history.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Raja’s Seat:
                </span>{" "}
                it is a beautiful garden with amazing views of the
                sunrise and sunset.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}