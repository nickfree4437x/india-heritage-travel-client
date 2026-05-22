"use client";

import Image from "next/image";

export default function ShillongSection() {
  return (
    <section className="w-full bg-[#f7f4ef] py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* TITLE */}
        <h2 className="text-[40px] sm:text-[54px] leading-tight font-semibold text-[#111]">
          10. Shillong, Meghalaya
        </h2>

        {/* IMAGE */}
        <div className="mt-10">

          <div className="relative w-full h-[420px] sm:h-[540px] rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <Image
              src="/blogs/blog-7/shillong.jpg"
              alt="Shillong Meghalaya"
              fill
              className="object-cover"
            />
          </div>

          <p className="mt-4 text-[15px] text-[#8a8a8a]">
            via Incredible India
          </p>

        </div>

        {/* CONTENT */}
        <div className="mt-14 max-w-5xl mx-auto space-y-8">

          <p className="text-[19px] sm:text-[20px] leading-[2.05] text-[#6a6a6a] font-light">
            It is also known as ‘Scotland of the East’ with cool climate
            and unique cultural experiences which attracts tourist.
            Shillong is also famous for its vibrant and hospitable Khasi
            culture. It has beautiful markets full of handcrafted goods
            with lively atmosphere. Shillong also hosts various music
            festivals and events that attract artists from all over the
            country.
          </p>

          <p className="text-[19px] sm:text-[20px] leading-[2.05] text-[#6a6a6a] font-light">
            It has picturesque landscape, lush green forests, serene
            lakes which is perfect escape form summer heat and ideal for
            summer vacations.
          </p>

          {/* LOCATIONS */}
          <div className="pt-4">

            <h3 className="text-[30px] sm:text-[36px] font-semibold text-[#111]">
              Top Locations to explore:
            </h3>

            <div className="mt-8 space-y-5">

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Elephant Falls:
                </span>{" "}
                it is a three-tiered waterfall offering amazing views
                and a pleasent environment.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Umiam Lake:
                </span>{" "}
                it is also called Barapani. It is expansive lake is
                perfect for water sports, picnics, and enjoying serene
                boat rides.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Shillong Peak:
                </span>{" "}
                it is the highest point in Shillong which offers
                breathtaking views of the entire city. It’s famous for
                photography and picnics.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Don Bosco Museum:
                </span>{" "}
                it offers history about cultures and lifestyles of the
                Northeast Indian people.
              </p>

            </div>

          </div>

          {/* END TEXT */}
          <div className="pt-6 space-y-8">

            <p className="text-[19px] sm:text-[20px] leading-[2.05] text-[#6a6a6a] font-light">
              Plan your perfect summer trip to India and make them your
              dream destinations with India Heritage Travel ensuring
              memorable experiences tailored just right according to your
              preferences – because there’s nothing like exploring new
              destinations and country!
            </p>

            <p className="text-[19px] sm:text-[20px] leading-[2.05] text-[#6a6a6a] font-light">
              So why not start planning now? Your adventure awaits just
              around corner!
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}