"use client";

import Image from "next/image";

export default function ShillongSection() {
  return (
    <section className="w-full bg-white py-10 md:pb-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* TITLE */}
        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
          10. Shillong, Meghalaya
        </h2>

        {/* IMAGE */}
        <div className="mt-6">

          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779800264/shashank-sharma-C2iZMCROPXo-unsplash_oiyf6p.jpg"
              alt="Shillong Meghalaya"
              fill
              className="object-cover"
            />
          </div>

          <p className="mt-4 text-[12px] md:text-[13px] text-[#8a8a8a]">
            via unsplash.com
          </p>

        </div>

        {/* CONTENT */}
        <div className="mt-6 max-w-6xl mx-auto space-y-8">

          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            It is also known as ‘Scotland of the East’ with cool climate
            and unique cultural experiences which attracts tourist.
            Shillong is also famous for its vibrant and hospitable Khasi
            culture. It has beautiful markets full of handcrafted goods
            with lively atmosphere. Shillong also hosts various music
            festivals and events that attract artists from all over the
            country.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            It has picturesque landscape, lush green forests, serene
            lakes which is perfect escape form summer heat and ideal for
            summer vacations.
          </p>

          {/* LOCATIONS */}
          <div>

            <h3 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
              Top Locations to explore:
            </h3>

            <div className="mt-6 space-y-2">

              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Elephant Falls:
                </span>{" "}
                it is a three-tiered waterfall offering amazing views
                and a pleasent environment.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Umiam Lake:
                </span>{" "}
                it is also called Barapani. It is expansive lake is
                perfect for water sports, picnics, and enjoying serene
                boat rides.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Shillong Peak:
                </span>{" "}
                it is the highest point in Shillong which offers
                breathtaking views of the entire city. It’s famous for
                photography and picnics.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Don Bosco Museum:
                </span>{" "}
                it offers history about cultures and lifestyles of the
                Northeast Indian people.
              </p>

            </div>

          </div>

          {/* END TEXT */}
          <div className="space-y-4">

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              Plan your perfect summer trip to India and make them your
              dream destinations with India Heritage Travel ensuring
              memorable experiences tailored just right according to your
              preferences – because there’s nothing like exploring new
              destinations and country!
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
              So why not start planning now? Your adventure awaits just
              around corner!
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}