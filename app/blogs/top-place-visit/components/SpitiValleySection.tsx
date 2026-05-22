"use client";

import Image from "next/image";

export default function SpitiValleySection() {
  return (
    <section className="w-full bg-[#f7f4ef] py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* TITLE */}
        <h2 className="text-[40px] sm:text-[54px] leading-tight font-semibold text-[#111]">
          3. Spiti Valley, Himachal Pradesh
        </h2>

        {/* IMAGE */}
        <div className="mt-10">

          <div className="relative w-full h-[420px] sm:h-[540px] rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            <Image
              src="/blogs/blog-7/spiti-valley.jpg"
              alt="Spiti Valley Himachal Pradesh"
              fill
              className="object-cover"
            />
          </div>

          <p className="mt-4 text-[15px] text-[#8a8a8a]">
            via Tripzy Go
          </p>

        </div>

        {/* CONTENT */}
        <div className="mt-14 max-w-5xl mx-auto">

          <p className="text-[19px] sm:text-[20px] leading-[2.05] text-[#6a6a6a] font-light">
            A unique experience in itself, Spiti Valley is often called
            ‘Little Tibet’. It is a remote village which is extremely
            beautiful. In summers the weather here is moderate which is
            ideal for trekking and mountain biking. This valley has
            ancient monasteries like Tabo and Key which is a sneak peek
            into rich Buddhist traditions. It is isolated from
            surroundings which makes it one of the best places for
            vacations in summers with peace and adventure.
          </p>

          {/* LOCATIONS */}
          <div className="mt-14">

            <h3 className="text-[30px] sm:text-[36px] font-semibold text-[#111]">
              Top Locations to explore:
            </h3>

            <div className="mt-8 space-y-5">

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Key Monastery:
                </span>{" "}
                This is located on hilltop and offers breathtaking
                views of the surrounding valley. It is famous for
                Buddhist learning and culture with rich ancient murals
                and books collections.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Tabo Monastery:
                </span>{" "}
                it is also nown as the ‘Ajanta of the Himalayas’. It is
                one of the oldest monasteries in Spiti. It has amazing
                Buddhist art.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Chandratal Lake:
                </span>{" "}
                It is known as the ‘Moon Lake’. It is a high-altitude
                lake which is famous for its clear blue waters. It is a
                picturesque spot which makes it a popular spot for
                trekkers and campers.
              </p>

              <p className="text-[19px] sm:text-[20px] leading-[1.9] text-[#6a6a6a]">
                <span className="font-semibold text-[#222]">
                  Dhankar Monastery:
                </span>{" "}
                it offers a breathtaking view of the confluence of the
                Spiti and Pin rivers. It has historical significance and
                ancient forts.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}