"use client";

import Image from "next/image";

export default function SummerPlacesContentSection() {
  return (
    <section className="w-full bg-white py-2">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* INTRO */}
        <div className="max-w-6xl mx-auto">

          <div className="space-y-4">

            <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
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

            <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              So here are top 10 places to visit in India during summer
              for a perfect vacation mixed of relaxation, culture and
              thrilling activities.
            </p>

          </div>

        </div>

        {/* MANALI SECTION */}
        <div className="mt-6 md:mt-8">

          {/* TITLE */}
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            1. Manali, Himachal Pradesh
          </h2>

          {/* IMAGE */}
          <div className="mt-6">

            <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">
              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779796837/vishy-9ttisCSNCOc-unsplash_oplhri.jpg"
                alt="Snow-capped Himalayan peaks and pine forests overlooking the scenic Kullu Valley in Manali Himachal Pradesh"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <p className="mt-2 text-[11px] md:text-[12px] text-gray-700">
              via unsplash.com
            </p>

          </div>

          {/* CONTENT */}
          <div className="mt-6 md:mt-6 max-w-6xl mx-auto">

            <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
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
            <div className="mt-6 md:mt-6">

              <h3 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
                Top Locations to explore:
              </h3>

              <div className="mt-4 space-y-2">

                <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                  <span className="font-semibold text-[#222]">
                    Solang Valley:
                  </span>{" "}
                  famous for its adventure sports, including paragliding
                  and skiing.
                </p>

                <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                  <span className="font-semibold text-[#222]">
                    Rohtang Pass:
                  </span>{" "}
                  Have amazing views of snow-covered mountains and
                  glaciers.
                </p>

                <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                  <span className="font-semibold text-[#222]">
                    Hadimba Temple:
                  </span>{" "}
                  An ancient cave temple surrounded by cedar forests.
                </p>

                <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                  <span className="font-semibold text-[#222]">
                    Manu Temple:
                  </span>{" "}
                  located in Old Manali is dedicated to the sage Manu.
                </p>

                <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
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