"use client";

import Image from "next/image";

export default function HeritageHotelsSection() {
  return (
    <section className="w-full bg-white py-2">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* INTRO */}
        <div className="max-w-6xl">

          <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            India is a land where ancient palaces and royal residences
            have been transformed into luxurious heritage hotels.
          </p>

          <p className=" text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            If your dream is to live in a royal palace then these hotels
            offer a experience like no other. We’ll take you through
            exclusive heritage stays, be it Rajasthan’s regal charm or
            unwinding in a lakeside palace Image via this India Travel Guide.
          </p>

          <p className=" text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Let’s dive into the magic of history, comfort, and
            extraordinary hospitality!
          </p>

        </div>

        {/* SECTION 1 */}
        <div className="mt-4 sm:mt-6">

          {/* HEADING */}
          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px]
              tracking-wide text-[#2c2c2c]
              font-semibold mb-2
            "
          >
            1. Taj Lake Palace, Udaipur – A Floating Dream
          </h2>

          {/* CONTENT */}
          <div className="space-y-2">

            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              Have you ever imagined surrounded by breathtaking
              Aravalli hills & waking upto shimmering waters of a
              Lake?
            </p>

            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              So if you want to experience a pure luxury, you must
              visit Taj Lake Palace in Udaipur.
            </p>

            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              Built in 1746, this white-marble wonder was served as
              Maharana Jagat Singh II summer home.
            </p>

          </div>

          {/* IMAGE */}
          <div className="mt-6">

            <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">

              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779816869/subhashis-das-Jmfy_ec20bk-unsplash_kayzmz.jpg"
                alt="Luxury stay at Taj Lake Palace Udaipur Rajasthan on Lake Pichola"
                fill
                sizes="100vw"
                className="object-cover"
              />

            </div>

            <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light">
              Image via unsplash.com
            </p>

          </div>

          {/* EXTRA CONTENT */}
          <div className="mt-4 max-w-6xl">

            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              With boat transfers, royal décor, and world-class
              service, it offers an unmatched stay. You’ll feel like a
              character in a grand historical tale as you dine by
              candlelight, watching the sunset paint the lake golden.
            </p>

          </div>

        </div>

        {/* SECTION 2 */}
        <div className="mt-4 sm:mt-6">

          {/* HEADING */}
          <h2
            className="
              text-[16px] sm:text-[20px] md:text-[22px]
              tracking-wide text-[#2c2c2c]
              font-semibold mb-2
            "
          >
            2. Umaid Bhawan Palace, Jodhpur – Where Royalty Resides
          </h2>

          {/* CONTENT */}
          <div className="space-y-2">

            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              A amazing mixture of Art Deco and Rajasthani
              architecture, Umaid Bhawan Palace is located on
              Chittar Hill.
            </p>

            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              It is one of the world’s last great palace and is still
              home to Jodhpur’s royal family.
            </p>

            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              As you step into this grand residence you’ll be
              welcomed with exquisite vintage cars, lush gardens, and
              a museum which tells the story of its majestic past.
            </p>

          </div>

          {/* IMAGE */}
          <div className="mt-4">

            <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">

              <Image
                src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779817695/sam-mathews-sYxPnaE_--Q-unsplash_m6og14.jpg"
                alt="Royal heritage stay at Umaid Bhawan Palace Jodhpur Rajasthan India"
                fill
                sizes="100vw"
                className="object-cover"
              />

            </div>

            <p className="mt-2 text-[11px] sm:text-[12px] text-gray-600 font-light">
              Image via unsplash.com
            </p>

          </div>

          {/* EXTRA CONTENT */}
          <div className="mt-4 max-w-6xl">

            <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              If you want to go back in time while experiencing modern
              luxury. If you’re planning a Rajasthan Tour Package, this
              should be at the top of your list.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}