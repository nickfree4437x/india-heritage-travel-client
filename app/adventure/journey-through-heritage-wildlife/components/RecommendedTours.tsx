"use client";

import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    title: "Rajasthani Heritage Retreat Tour",
    desc: "Embark on a 13-day odyssey through heritage and wildlife on the ‘A Journey Through Heritage & Wildlife’ tour, from the captivating blend of history in Delhi to the wildlife wonders of Ranthambore, all amidst timeless heritage, desert charm, and regal splendor.",
    img: "/destination//",
    slug: "/destinations/rajasthani-heritage-retreat-tour",
  },
  {
    title: "Royal-Triangle-Odyssey",
    desc: "Experience a 10-day ‘Royal Triangle Odyssey’ from the kaleidoscope of culture in Delhi to the spiritual heart of Varanasi, with enchanting heritage in Mandawa, regal splendor in Jaipur, and the historical magnificence of Agra in between.",
    img: "/recommended/royal.jpg",
    slug: "/adventure/royal-triangle-odyssey-tour",
  },
  {
    title: "Southern Delights: A Journey Through Time",
    desc: "Discover the essence of Southern India on this 17-day tour, covering heritage, culture, and timeless experiences across breathtaking destinations.",
    img: "/recommended/south.jpg",
    slug: "/adventure/southern-delights-tour",
  },
];

export default function RecommendedTours() {
  return (
    <section className="w-full bg-[#f4f0ea] py-20">

      <div className="max-w-[1400px] mx-auto px-6">

        {/* 🔹 Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 tracking-wide">
          Recommended Tours
        </h2>

        {/* 🔹 Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {tours.map((tour, index) => (
            <Link
              key={index}
              href={tour.slug}
              className="group block"
            >

              <div className="bg-white rounded-md
                              shadow-sm
                              border border-[#eee7dd]
                              overflow-hidden
                              transition-all duration-500
                              hover:shadow-md
                              hover:-translate-y-2">

                {/* 🔥 Image */}
                <div className="relative h-[240px] w-full overflow-hidden">
                  <Image
                    src={tour.img}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
                </div>

                {/* 🔥 Content */}
                <div className="p-6 space-y-3">

                  <h3 className="text-[17px] font-semibold text-[#AF956C] leading-snug group-hover:underline">
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

      </div>

    </section>
  );
}