"use client";

import Image from "next/image";

export default function CoorgSection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* TITLE */}
        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
          6. Coorg, Karnataka
        </h2>

        {/* IMAGE */}
        <div className="mt-6">

          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779798546/aakash-goel--Zt97RnOWJ8-unsplash_b22otl.jpg"
              alt="Coorg Karnataka"
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
          <div className="mt-6">

            <h3 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
              Top Locations to explore:
            </h3>

            <div className="mt-6 space-y-2">

              <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Abbey Falls:
                </span>{" "}
                It is a breathtaking waterfall situated between coffee
                plantations and spice estates. It is beat for nature
                walks and photography.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Dubare Elephant Camp:
                </span>{" "}
                Here you can have unique experience of interacting with
                elephants which includes feeding and bathing them.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Madikeri Fort:
                </span>{" "}
                It is a historical fort which offers panoramic views of
                Coorg. It also has museum which showcase the region’s
                history.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
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