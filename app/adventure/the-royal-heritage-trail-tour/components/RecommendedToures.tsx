"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const tours = [
  {
    title: "Heritage Odyssey: North To South India Tour",
    desc: "Embark on a 15-day ‘Expedition Through India,’ from Mumbai’s history and modern flair to the ethereal Taj Mahal in Agra, exploring a timeless tapestry of history and modernity in Delhi and more, with a blend of past and present in Hampi and Ajanta & Ellora.",
    img: "/tours/tour1.jpg",
    slug: "/adventure/royal-triangle-odyssey-tour",
  },
  {
    title: "Rajasthani Heritage Retreat",
    desc: "Indulge in a 16-day ‘Rajasthani Heritage Retreat’ through Delhi’s history, timeless beauty in Mandawa, desert tales in Jaisalmer, and a journey of romance and regal splendor in Udaipur, all while exploring the rich heritage of Rajasthan.",
    img: "/tours/tour2.jpg",
    slug: "/destinations/rajasthani-heritage-retreat-tour",
  },
  {
    title: "Coastal Treasures & Mountain Magic",
    desc: "Experience a 10-day journey of ‘Coastal Treasures & Mountain Magic’ from Cochin’s historical charm to the lush greenery of Munnar, all while enjoying coastal delights, the majesty of nature in Thekkady, and the vibrant mosaic of life and dreams in Mumbai.",
    img: "/tours/tour3.jpg",
    slug: "/destinations/coastal-treasures-mountain-magic-tour",
  },
];

export default function RecommendedTours() {
  const router = useRouter();

  return (
    <section className="bg-[#f4f0ea] py-20">

      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14 text-[#2c2c2c] tracking-wide">
          Recommended Tours
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {tours.map((tour, index) => (
            <div
              key={index}
              onClick={() => router.push(tour.slug)}
              className="group bg-white rounded-md border border-[#eee7dd]
                         shadow-sm overflow-hidden cursor-pointer
                         transition duration-300
                         hover:-translate-y-1 hover:shadow-md"
            >

              {/* Image */}
              <div className="relative w-full h-[240px] overflow-hidden">
                <Image
                  src={tour.img}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">

                <h3 className="text-[16px] font-semibold text-[#AF956C] leading-snug">
                  {tour.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                  {tour.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}