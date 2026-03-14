"use client";

import Image from "next/image";

type Destination = {
  title: string;
  days: string;
  image: string;
  desc: string;
};

const destinations: Destination[] = [
  {
    title: "Majestic Golden Triangle Tour",
    days: "7",
    image: "/golden-triangle.jpg",
    desc: "Rich blend of history, architecture, and culture in three iconic Indian cities.",
  },
  {
    title: "Rajasthani Heritage Retreat Tour",
    days: "16",
    image: "/rajasthan.jpg",
    desc: "Discover the rich culture of Rajasthan through its historic sites and colorful traditions.",
  },
  {
    title: "Coastal Treasures & Mountain Magic Tour",
    days: "10",
    image: "/kerala.jpg",
    desc: "Explore God’s Own Country with Ayurveda, wildlife, and scenic hill stations.",
  },
  {
    title: "Mystical North India Discovery Tour",
    days: "12",
    image: "/varanasi.jpg",
    desc: "Discover where spirituality thrives in temples, cities, and the holy Ganga River.",
  },
];

export default function PopularDestinations() {
  return (
    <section className="bg-[#f4f0ea] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold text-[#8b6a3d] mb-4">
            Begin Your Journey With Popular Destinations
          </h2>

          <p className="text-lg text-[#8b6a3d] tracking-wide">
            Our Best-Loved Routes Across India’s Cultural Landscape.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-[#d6c6a8] p-6 text-center shadow-sm hover:shadow-xl transition duration-300 group"
            >

              {/* Image */}
              <div className="overflow-hidden rounded-lg mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={260}
                  className="rounded-lg object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#8b6a3d] mb-3">
                {item.title}
              </h3>

              {/* Days */}
              <p className="text-[#8b6a3d] font-medium mb-4">
                Days : {item.days}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}