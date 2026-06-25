"use client";

import Image from "next/image";
import Link from "next/link";

// Recommended tours data
const tours = [
  {
    title: "The Royal Heritage Trail Tour",
    description:
      "An 8-day journey through Delhi, Mandawa, Jaipur, and Agra, immersing you in a captivating blend of history, timeless heritage, regal splendor, and historical grandeur.",
    image: "/tours/splendors/tour1.jpg",
    slug: "/tours/the-royal-heritage-trail-tour",
  },
  {
    title: "Royal Rajasthan & Sacred Ganges",
    description:
      "Experience a 20-day journey through the heart of India on the 'Royal Rajasthan & Sacred Ganges' tour. From historic Delhi to spiritual Varanasi, explore a rich tapestry of heritage and culture.",
    image: "/tours/splendors/tour2.jpg",
    slug: "/tours/royal-rajasthan-sacred-ganges-tour",
  },
  {
    title: "Coastal Treasures & Mountain Magic",
    description:
      "Experience a 10-day journey of 'Coastal Treasures & Mountain Magic' from Cochin's historical charm to the lush greenery of Munnar, all while enjoying coastal delights and nature.",
    image: "/tours/splendors/tour3.jpg",
    slug: "/tours/coastal-treasures-mountain-magic-tour",
  },
];

export default function RecommendedTours() {
  return (
    <section className="mt-20 px-4 py-16 bg-[#f9f9f9]">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Recommended Tours
      </h2>

      {/* Tour Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {tours.map((tour, index) => (
          <Link key={index} href={tour.slug} className="block group">
            <div className="
              bg-white
              rounded-xl
              shadow-md
              overflow-hidden
              hover:shadow-lg
              transition-all duration-300
              hover:-translate-y-1
            ">
              {/* Tour Image */}
              <div className="relative w-full h-56">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Tour Content */}
              <div className="p-5">
                <h3 className="
                  text-[17px]
                  font-semibold
                  text-red-500
                  leading-snug
                  group-hover:underline
                ">
                  {tour.title}
                </h3>

                <p className="
                  text-gray-700
                  text-[13px]
                  font-light
                  leading-relaxed
                  line-clamp-4
                ">
                  {tour.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}