"use client";

import Image from "next/image";

export default function SpitiValleySection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* TITLE */}
        <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
          3. Spiti Valley, Himachal Pradesh
        </h2>

        {/* IMAGE */}
        <div className="mt-6">

          <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">
            <Image
              src="https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779797966/shashank-rai-M3BAj-XdjPQ-unsplash_s81lqa.jpg"
              alt="Spiti Valley Himachal Pradesh"
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
        <div className="mt-4 max-w-6xl mx-auto">

          <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
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
          <div className="mt-4">

            <h3 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
              Top Locations to explore:
            </h3>

            <div className="mt-4 space-y-2">

              <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Key Monastery:
                </span>{" "}
                This is located on hilltop and offers breathtaking
                views of the surrounding valley. It is famous for
                Buddhist learning and culture with rich ancient murals
                and books collections.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Tabo Monastery:
                </span>{" "}
                it is also nown as the ‘Ajanta of the Himalayas’. It is
                one of the oldest monasteries in Spiti. It has amazing
                Buddhist art.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
                <span className="font-semibold text-[#222]">
                  Chandratal Lake:
                </span>{" "}
                It is known as the ‘Moon Lake’. It is a high-altitude
                lake which is famous for its clear blue waters. It is a
                picturesque spot which makes it a popular spot for
                trekkers and campers.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
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