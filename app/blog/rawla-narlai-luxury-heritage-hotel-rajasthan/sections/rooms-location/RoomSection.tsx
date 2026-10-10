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
];

export default function RoomsSection() {
  return (
    <section className="w-full bg-white py-2 md:py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2">
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

        {/* Feature Image */}
        <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md">
          <Image
            src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782298243/7_Rawla_Narlai_ofc1v1.jpg"
            alt="Luxury Heritage Room at Rawla Narlai Rajasthan"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-2 text-[12px] md:text-[13px] text-gray-600 font-light">
          Image via Rawla Narlai
        </p>

        {/* Room Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-4 md:mt-6 mb-4 md:mb-6">
          {rooms.map((room) => (
            <div
              key={room.title}
              className="border-gray-200 border rounded-md bg-white p-6"
            >
              <h3 className="text-[14px] sm:text-[16px] font-semibold text-[#2c2c2c] mb-2">
                {room.title}
              </h3>

              <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
                {room.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}