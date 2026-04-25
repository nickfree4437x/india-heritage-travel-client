"use client";

import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    title: "Rajasthani Heritage Retreat",
    desc: "Indulge in a 16-day ‘Rajasthani Heritage Retreat’ through Delhi’s history, timeless beauty in Mandawa, desert tales in Jaisalmer, and a journey of romance and regal splendor in Udaipur, all while exploring the rich heritage of Rajasthan.",
    image: "/adventure/heritage-odyssey/recom/tour1.jpg",
    slug: "/destinations/rajasthani-heritage-retreat-tour",
  },
  {
    title: "Royal Rajasthan & Sacred Ganges",
    desc: "Experience a 20-day journey through the heart of India on the ‘Royal Rajasthan & Sacred Ganges’ tour. From historic Delhi to spiritual Varanasi, explore a rich tapestry of heritage and culture.",
    image: "/adventure/heritage-odyssey/recom/tour2.jpg",
    slug: "/adventure/royal-rajasthan-sacred-ganges-tour",
  },
  {
    title: "Southern Delights: A Journey Through Time",
    desc: "Discover the essence of Southern India on the ‘Southern Delights’ 17-day tour, from Cochin’s history to Mumbai’s vibrant dreams, with coastal delights, natural majesty, and timeless wonders in between.",
    image: "/adventure/heritage-odyssey/recom/tour3.jpg",
    slug: "/adventure/southern-delights-tour",
  },
];

export default function RecommendedTours() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20">

      {/* 🔹 Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 tracking-wide">
        Recommended Tours
      </h2>

      {/* 🔹 Cards */}
      <div className="grid md:grid-cols-3 gap-10">

        {tours.map((tour, index) => (
          <Link key={index} href={tour.slug} className="block group">

            <div className="bg-white rounded-sm
                            shadow-sm
                            border border-[#eee7dd]
                            overflow-hidden 
                            transition-all duration-500
                            hover:shadow-md
                            hover:-translate-y-2">

              {/* 🔥 Image */}
              <div className="relative h-[240px] w-full overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* 🔥 Content */}
              <div className="p-6 space-y-3">

                <h3 className="text-[17px] font-semibold text-red-500 leading-snug group-hover:underline">
                  {tour.title}
                </h3>

                <p className="text-gray-700 text-[14px] leading-relaxed line-clamp-4">
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