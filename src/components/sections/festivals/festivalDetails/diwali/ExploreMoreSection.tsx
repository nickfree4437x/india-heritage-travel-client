"use client";

import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    image: "/festivals/holi/holi1.jpg",
    title: "Holi Festival Tour",
    days: "Days : 16",
    desc: "Celebrate Holi with locals through colours, music, and tradition.",
    link: "/festivals/holi",
  },
  {
    image: "/festivals/kumbh/kumbh.jpg",
    title: "Sacred Path: Kumbh Mela",
    days: "Days : 11",
    desc: "Take part in Kumbh Mela’s sacred rituals, holy dips, and ancient traditions.",
    link: "/festivals/kumbh",
  },
  {
    image: "/festivals/pushkar/pushkar.jpg",
    title: "Pushkar Camel Carnival",
    days: "Days : 16",
    desc: "Experience India’s most vibrant desert fair – with camels, color, and culture.",
    link: "/festivals/pushkar",
  },
];

export default function ExploreMoreSection() {
  return (
    <section className="py-20 bg-[#f4f0ea]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-[#9b7a50] mb-4">
          Keep Exploring
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 mb-12 tracking-wide">
          Go Beyond Diwali With More Cultural And Offbeat Tours.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {tours.map((tour, i) => (
            <Link key={i} href={tour.link} className="group block">

              <div className="bg-white border border-[#eee7dd] rounded-lg overflow-hidden
                              shadow-sm transition-all duration-300 ease-out
                              hover:shadow-md hover:-translate-y-1">

                {/* Image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 text-center">

                  <h3 className="text-[17px] font-semibold text-[#9b7a50] mb-2 leading-snug">
                    {tour.title}
                  </h3>

                  <p className="text-sm font-medium text-gray-800 mb-3">
                    {tour.days}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {tour.desc}
                  </p>

                  <span className="inline-block bg-[#9b7a50] text-white px-6 py-2 rounded-md
                                   transition-all duration-300
                                   group-hover:bg-[#876845]">
                    Explore Now
                  </span>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}