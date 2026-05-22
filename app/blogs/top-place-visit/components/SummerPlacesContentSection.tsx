"use client";

import Image from "next/image";

export default function SummerPlacesContentSection() {
  return (
    <section className="w-full bg-[#f7f4ef] py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* INTRO */}
        <div className="max-w-5xl mx-auto">

          <div className="space-y-10">

            <p className="text-[19px] sm:text-[21px] leading-[2.05] text-[#6a6a6a] font-light">
              As the summer hitting hard in India, May is the beautiful
              time to explore the amazing beauties and rich experiences
              of this incredible country. Here you’ll find everything,
              from cool hill stations of North India to lush greenery of
              South India where every place offers a unique experience.
              In this perfect guide to India, you’ll find best places to
              visit in India during summer which is made in order to
              refresh you and make your vacation amazing. If you’re an
              adventure lover of calm and refreshing gateways these
              perfectly selected destinations serve all your tastes.
            </p>

            <p className="text-[19px] sm:text-[21px] leading-[2.05] text-[#6a6a6a] font-light">
              So here are top 10 places to visit in India during summer
              for a perfect vacation mixed of relaxation, culture and
              thrilling activities.
            </p>

          </div>

        </div>

        {/* MANALI SECTION */}
        <div className="mt-24">

          {/* TITLE */}
          <h2 className="text-[40px] sm:text-[54px] leading-tight font-semibold text-[#111]">
            1. Manali, Himachal Pradesh
          </h2>

          {/* IMAGE */}
          <div className="mt-10">

            <div className="relative w-full h-[420px] sm:h-[540px] rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <Image
                src="/blogs/blog-7/manali.jpg"
                alt="Manali Himachal Pradesh"
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
              Manali is in the Beas River Valley, and it is a beautiful
              destination for those who are looking for bother
              relaxation and adventure activities. Summer is the ideal
              time to visit here as the weather is relatively mild and
              with a good tourist which makes the vacation more
              interesting and perfect for outdoor activities. There are
              many activities are adventure lovers such as paragliding
              and river rafting, while for those who love nature there
              is an option of trekking through the beautiful Solang
              Valley or explore the snow covered Rohtang pass (your car
              will need permit to go there). This mixture of thrilling
              adventurous activities and breathtaking scenery make sure
              that Manali is best to visit in summers.
            </p>

            {/* LOCATIONS */}
            <div className="mt-14">

              <h3 className="text-[30px] sm:text-[36px] font-semibold text-[#111]">
                Top Locations to explore:
              </h3>

              <div className="mt-8 space-y-5">

                <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                  <span className="font-semibold text-[#222]">
                    Solang Valley:
                  </span>{" "}
                  famous for its adventure sports, including paragliding
                  and skiing.
                </p>

                <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                  <span className="font-semibold text-[#222]">
                    Rohtang Pass:
                  </span>{" "}
                  Have amazing views of snow-covered mountains and
                  glaciers.
                </p>

                <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                  <span className="font-semibold text-[#222]">
                    Hadimba Temple:
                  </span>{" "}
                  An ancient cave temple surrounded by cedar forests.
                </p>

                <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                  <span className="font-semibold text-[#222]">
                    Manu Temple:
                  </span>{" "}
                  located in Old Manali is dedicated to the sage Manu.
                </p>

                <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                  <span className="font-semibold text-[#222]">
                    Vashisht Hot Springs:
                  </span>{" "}
                  It has Natural hot water springs with therapeutic
                  properties.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}