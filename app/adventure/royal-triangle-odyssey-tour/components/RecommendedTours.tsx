"use client";

import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    title: "The Royal Heritage Trail Tour",
    image: "/adventure/heritage/mandawa.jpg",
    desc: "An 8-day journey through Delhi, Mandawa, Jaipur, and Agra, immersing you in a captivating blend of history, timeless heritage, regal splendor, and historical grandeur.",
    link: "/tours/royal-rajasthan",
  },
  {
    title: "Mystical North India Discovery",
    image: "/adventure/odyssey/varanasi.jpg",
    desc: "Discover the mystical North India in 12 days with ‘Mystical North India Discovery,’ from Delhi to Varanasi, with timeless heritage and sculpted wonders in between.",
    link: "/tours/mystical-north-india",
  },
  {
    title: "Southern Splendors: Culture & Nature Trail Tour",
    image: "/adventure/southern/kerala.jpg",
    desc: "Embark on a 19-day Southern Splendors journey from Mumbai to Hampi, experiencing history, coastal delights, nature’s majesty, and regal splendor.",
    link: "/tours/southern-splendors",
  },
];

export default function OdysseyRecommendedTours() {
  return (
    <section className="mt-20">

      {/* Heading */}
      <h2 className="text-4xl font-semibold text-center mb-12">
        Recommended Tours
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {tours.map((tour, i) => (
          <Link href={tour.link} key={i}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">

              {/* Image */}
              <div className="relative w-full h-[220px]">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-red-600 mb-2">
                  {tour.title}
                </h3>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {tour.desc}
                </p>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}