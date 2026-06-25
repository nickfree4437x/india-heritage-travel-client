"use client";

import Image from "next/image";
import Link from "next/link";

// Recommended tours data
const tours = [
  {
    title: "Heritage Odyssey: North To South India Tour",
    desc: "Embark on a 15-day 'Expedition Through India,' from Mumbai's history and modern flair to the ethereal Taj Mahal in Agra, exploring a timeless tapestry of history and modernity in Delhi and more, with a blend of past and present in Hampi and Ajanta & Ellora.",
    img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779538299/banner_teujgc.jpg",
    slug: "/tours/royal-triangle-odyssey-tour",
  },
  {
    title: "Rajasthani Heritage Retreat",
    desc: "Indulge in a 16-day 'Rajasthani Heritage Retreat' through Delhi's history, timeless beauty in Mandawa, desert tales in Jaisalmer, and a journey of romance and regal splendor in Udaipur, all while exploring the rich heritage of Rajasthan.",
    img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779527998/heritage_b4eaqj.jpg",
    slug: "/tours/rajasthani-heritage-retreat-tour",
  },
  {
    title: "Coastal Treasures & Mountain Magic",
    desc: "Experience a 10-day journey of 'Coastal Treasures & Mountain Magic' from Cochin's historical charm to the lush greenery of Munnar, all while enjoying coastal delights, the majesty of nature in Thekkady, and the vibrant mosaic of life and dreams in Mumbai.",
    img: "https://res.cloudinary.com/dhfsyt4x9/image/upload/v1779523352/coastal_uysoj5.jpg",
    slug: "/tours/coastal-treasures-mountain-magic-tour",
  },
];

export default function RecommendedTours() {
  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="
          text-[20px] sm:text-[24px] md:text-[28px]
          font-semibold
          text-center
          text-[#2c2c2c]
          tracking-wide
          mb-6 sm:mb-8 md:mb-10
        ">
          Recommended Tours
        </h2>

        {/* Tour Cards */}
        <div className="
          grid grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6 sm:gap-8 md:gap-10
        ">
          {tours.map((tour, index) => (
            <Link
              key={index}
              href={tour.slug}
              className="
                group
                block
                bg-white
                rounded-sm
                border border-[#eee7dd]
                shadow-sm
                overflow-hidden
                cursor-pointer
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-md
                h-full
              "
            >
              {/* Tour Image */}
              <div className="relative w-full h-[220px] sm:h-[240px] overflow-hidden">
                <Image
                  src={tour.img}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-700"
                />

                {/* Image Overlay */}
                <div className="
                  absolute inset-0
                  bg-black/10
                  opacity-0
                  group-hover:opacity-100
                  transition duration-500
                " />
              </div>

              {/* Tour Content */}
              <div className="p-5 sm:p-6 space-y-3">
                <h3 className="
                  text-[16px] sm:text-[17px]
                  font-semibold
                  text-red-500
                  leading-snug
                  group-hover:underline
                ">
                  {tour.title}
                </h3>

                <p className="
                  text-[#555]
                  text-[13px]
                  font-light
                  leading-relaxed
                  line-clamp-4
                ">
                  {tour.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}