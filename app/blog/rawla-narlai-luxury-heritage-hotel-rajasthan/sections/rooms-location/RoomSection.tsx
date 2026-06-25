
"use client";

import Image from "next/image";

const rooms = [
  {
    title: "Classic Heritage Rooms",
    description:
      "Located within the original heritage wing, these rooms showcase authentic stone walls, hand-painted frescoes, antique wooden furnishings, and charming courtyard or garden views. They offer a genuine glimpse into Rajasthan's royal past.",
  },
  {
    title: "Grand Heritage Rooms",
    description:
      "Offering additional space and elevated comfort, Grand Heritage Rooms feature refined furnishings, richer fabrics, detailed fresco artwork, and in some cases private balconies overlooking the village or Aravalli landscape.",
  },
  {
    title: "Luxury Grand Heritage Rooms",
    description:
      "Among the most luxurious accommodations within the heritage block, these rooms combine original architecture, antique décor, premium textiles, and beautiful views of the surrounding hills for a truly regal experience.",
  },
  {
    title: "Narlai Suite",
    description:
      "The finest accommodation at Rawla Narlai. Spacious interiors, elegant artwork, dedicated sitting areas, and exceptional views make this suite perfect for honeymoons, anniversaries, and milestone celebrations.",
  },
];

export default function RoomsSection() {
  return (
    <section className="w-full bg-white py-8">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* HEADER */}

        <div className="mb-8">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            Stay With Us: Feel Like Royalty in Every Suite
          </h2>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Every room at Rawla Narlai possesses its own distinct character.
            Unlike modern hotels with standardized layouts, each accommodation
            has been thoughtfully designed around the property's original
            architecture, creating a unique atmosphere that reflects Rajasthan's
            royal heritage.
          </p>

        </div>

        {/* FEATURE IMAGE */}

        <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md mb-10">

          <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782298243/7_Rawla_Narlai_ofc1v1.jpg"
            alt="Luxury Heritage Room at Rawla Narlai Rajasthan"
            fill
            className="object-cover"
          />

        </div>

        {/* ROOM CARDS */}

        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {rooms.map((room) => (
            <div
              key={room.title}
              className="border-gray-200 border rounded-md bg-white  p-6"
            >

              <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#2c2c2c] mb-3">
                {room.title}
              </h3>

              <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
                {room.description}
              </p>

            </div>
          ))}

        </div>

        {/* EXPERT NOTE */}

        <div className=" bg-[#faf7f3] p-5">

          <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-[#AF956C] mb-2">
            Choosing Your Stay
          </span>

          <h3 className="text-[15px] sm:text-[17px] font-semibold text-[#2c2c2c] mb-3">
            Heritage Wing or Modern Comfort?
          </h3>

          <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light text-justify">
            Guests seeking the most authentic historical atmosphere generally
            prefer accommodations within the original heritage wing, where
            centuries-old architecture and artistic details create a deeper
            connection to the property's past. Travelers who appreciate a more
            contemporary feel while still enjoying the character of Rawla
            Narlai may find the newer sections of the property better suited to
            their preferences.
          </p>

        </div>

      </div>

    </section>
  );
}