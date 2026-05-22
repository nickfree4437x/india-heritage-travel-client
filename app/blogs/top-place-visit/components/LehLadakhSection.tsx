"use client";

import Image from "next/image";

export default function LehLadakhSection() {
  return (
    <section className="w-full bg-[#f7f4ef] py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* TITLE */}
        <h2 className="text-[40px] sm:text-[54px] leading-tight font-semibold text-[#111]">
          5. Leh-Ladakh, Jammu and Kashmir
        </h2>

        {/* IMAGE */}
        <div className="mt-10">

          <div className="relative w-full h-[420px] sm:h-[540px] rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <Image
              src="/blogs/blog-7/leh-ladakh.jpg"
              alt="Leh Ladakh Jammu and Kashmir"
              fill
              className="object-cover"
            />
          </div>

          <p className="mt-4 text-[15px] text-[#8a8a8a]">
            via Wonder world travels
          </p>

        </div>

        {/* CONTENT */}
        <div className="mt-14 max-w-5xl mx-auto">

          <p className="text-[19px] sm:text-[20px] leading-[2.05] text-[#6a6a6a] font-light">
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
          <div className="mt-14">

            <h3 className="text-[30px] sm:text-[36px] font-semibold text-[#111]">
              Top Locations to Visit:
            </h3>

            <div className="mt-8 space-y-5">

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Pangong Lake:
                </span>{" "}
                Famous for its breathtaking blue waters and views. This
                lake longs from India to Tibet and offers amazing
                environment which is perfect for camping and
                photography.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Nubra Valley:
                </span>{" "}
                it is famous for its landscapes, sand dunes, and
                Bactrian camels. It offers unique experiences like
                camel safaris and ATV rides This valley also have
                ancient Diskit Monastery.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Leh Palace:
                </span>{" "}
                It is a beautiful this nine-story palace overlooking
                the town of Leh and offers panoramic views of the Stok
                Kangri mountains and the Ladakh mountain range.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
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