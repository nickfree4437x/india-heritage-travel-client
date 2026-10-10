"use client";

import Image from "next/image";

export default function LehLadakhSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* TITLE */}
        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
          5. Leh-Ladakh, Jammu and Kashmir
        </h2>

        {/* IMAGE */}
        <div className="mt-2 md:mt-4">

          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779799900/darshan-chudasama-v1oGBUnXVDs-unsplash_exd7os.jpg"
              alt="Leh Ladakh Jammu and Kashmir"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <p className="mt-2 text-[11px] md:text-[12px] text-gray-600 font-light">
            Image via unsplash.com
          </p>

        </div>

        {/* CONTENT */}
        <div className="mt-4 max-w-6xl mx-auto">

          <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            For travelers looking for adventure and peace, the serene
            landscape of Leh-Ladakh offers another world beauty.
            Summers is the ideal time to visit Leh-Ladakh as the roads
            are clear after the long winter. It has breathtaking
            Pangong Lake which changes hues of blue and a perfect
            gateway for summers. It has beautiful mountains and sand
            dunes of Nubra Valley which is a adventurous activity for
            tourists like camel rides Bactrian camels and ATV rides.
            There are many historical sites and serene monasteries such
            as Hemis, Thiksey, and Diskit which offers a sneak peek
            into spiritual life of local which is decorated with prayer
            flag and ancient Buddhist artifacts.
          </p>

          {/* LOCATIONS */}
          <div className="mt-4">

            <h3 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
              Top Locations to Visit:
            </h3>

            <div className="mt-4 space-y-2">

              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Pangong Lake:
                </span>{" "}
                Famous for its breathtaking blue waters and views. This
                lake longs from India to Tibet and offers amazing
                environment which is perfect for camping and
                photography.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Nubra Valley:
                </span>{" "}
                it is famous for its landscapes, sand dunes, and
                Bactrian camels. It offers unique experiences like
                camel safaris and ATV rides This valley also have
                ancient Diskit Monastery.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Leh Palace:
                </span>{" "}
                It is a beautiful this nine-story palace overlooking
                the town of Leh and offers panoramic views of the Stok
                Kangri mountains and the Ladakh mountain range.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Hemis Monastery:
                </span>{" "}
                This is the largest and wealthiest monastery in
                Ladakh. It is famous for its annual festival
                consisting masked dances and cultural performances.
                This monastery has a vast collection of ancient relics
                and artifacts.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}