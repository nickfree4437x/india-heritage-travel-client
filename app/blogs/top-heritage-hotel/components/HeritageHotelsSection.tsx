"use client";

import Image from "next/image";

export default function HeritageHotelsSection() {
  return (
    <section className="w-full bg-[#f7f4ef] py-10 sm:py-14 lg:py-16">

      {/* SAME WIDTH AS HERO */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">

        {/* INTRO */}
        <div className="max-w-5xl">

          <p className="text-[16px] sm:text-[17px] leading-8 text-[#555555] font-light">
            India is a land where ancient palaces and royal residences
            have been transformed into luxurious heritage hotels.
          </p>

          <p className="mt-8 text-[16px] sm:text-[17px] leading-8 text-[#555555] font-light">
            If your dream is to live in a royal palace then these hotels
            offer a experience like no other. We’ll take you through
            exclusive heritage stays, be it Rajasthan’s regal charm or
            unwinding in a lakeside palace via this India Travel Guide.
          </p>

          <p className="mt-8 text-[16px] sm:text-[17px] leading-8 text-[#555555] font-light">
            Let’s dive into the magic of history, comfort, and
            extraordinary hospitality!
          </p>

        </div>

        {/* SECTION 1 */}
        <div className="mt-20 sm:mt-24">

          {/* HEADING */}
          <h2
            className="
              text-[34px]
              sm:text-[42px]
              lg:text-[52px]

              leading-[1.15]

              text-[#111111]
            "
            style={{
              fontFamily: "'Marcellus', serif",
            }}
          >
            1. Taj Lake Palace, Udaipur – A Floating Dream
          </h2>

          {/* CONTENT + IMAGE */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-start">

            {/* CONTENT */}
            <div className="space-y-7">

              <p className="text-[16px] sm:text-[17px] leading-8 text-[#555555] font-light">
                Have you ever imagined surrounded by breathtaking
                Aravalli hills & waking upto shimmering waters of a
                Lake?
              </p>

              <p className="text-[16px] sm:text-[17px] leading-8 text-[#555555] font-light">
                So if you want to experience a pure luxury, you must
                visit Taj Lake Palace in Udaipur.
              </p>

              <p className="text-[16px] sm:text-[17px] leading-8 text-[#555555] font-light">
                Built in 1746, this white-marble wonder was served as
                Maharana Jagat Singh II summer home.
              </p>

            </div>

            {/* IMAGE */}
            <div>

              <div className="relative w-full h-[300px] sm:h-[360px] rounded-[24px] overflow-hidden">

                <Image
                  src="/blogs/blog-9/taj-lake-palace.jpg"
                  alt="Taj Lake Palace"
                  fill
                  className="object-cover"
                />

              </div>

              <p className="mt-3 text-[13px] text-[#8a8a8a]">
                via Tata Group
              </p>

            </div>

          </div>

          {/* EXTRA CONTENT */}
          <div className="mt-10 max-w-5xl">

            <p className="text-[16px] sm:text-[17px] leading-8 text-[#555555] font-light">
              With boat transfers, royal décor, and world-class
              service, it offers an unmatched stay. You’ll feel like a
              character in a grand historical tale as you dine by
              candlelight, watching the sunset paint the lake golden.
            </p>

          </div>

        </div>

        {/* SECTION 2 */}
        <div className="mt-24 sm:mt-28">

          {/* HEADING */}
          <h2
            className="
              text-[34px]
              sm:text-[42px]
              lg:text-[52px]

              leading-[1.15]

              text-[#111111]
            "
            style={{
              fontFamily: "'Marcellus', serif",
            }}
          >
            2. Umaid Bhawan Palace, Jodhpur – Where Royalty Resides
          </h2>

          {/* CONTENT + IMAGE */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-start">

            {/* IMAGE */}
            <div>

              <div className="relative w-full h-[300px] sm:h-[360px] rounded-[24px] overflow-hidden">

                <Image
                  src="/blogs/blog-9/umaid-bhawan.jpg"
                  alt="Umaid Bhawan Palace"
                  fill
                  className="object-cover"
                />

              </div>

              <p className="mt-3 text-[13px] text-[#8a8a8a]">
                via Wikipedia
              </p>

            </div>

            {/* CONTENT */}
            <div className="space-y-7">

              <p className="text-[16px] sm:text-[17px] leading-8 text-[#555555] font-light">
                A amazing mixture of Art Deco and Rajasthani
                architecture, Umaid Bhawan Palace is located on
                Chittar Hill.
              </p>

              <p className="text-[16px] sm:text-[17px] leading-8 text-[#555555] font-light">
                It is one of the world’s last great palace and is still
                home to Jodhpur’s royal family.
              </p>

              <p className="text-[16px] sm:text-[17px] leading-8 text-[#555555] font-light">
                As you step into this grand residence you’ll be
                welcomed with exquisite vintage cars, lush gardens, and
                a museum which tells the story of its majestic past.
              </p>

            </div>

          </div>

          {/* EXTRA CONTENT */}
          <div className="mt-10 max-w-5xl">

            <p className="text-[16px] sm:text-[17px] leading-8 text-[#555555] font-light">
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