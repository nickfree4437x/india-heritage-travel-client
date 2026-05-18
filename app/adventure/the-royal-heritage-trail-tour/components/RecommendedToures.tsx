"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const tours = [
  {
    title: "Heritage Odyssey: North To South India Tour",
    desc: "Embark on a 15-day ‘Expedition Through India,’ from Mumbai’s history and modern flair to the ethereal Taj Mahal in Agra, exploring a timeless tapestry of history and modernity in Delhi and more, with a blend of past and present in Hampi and Ajanta & Ellora.",
    img: "/adventure/heritage/trail-tour.jpg",
    slug: "/adventure/royal-triangle-odyssey-tour",
  },
  {
    title: "Rajasthani Heritage Retreat",
    desc: "Indulge in a 16-day ‘Rajasthani Heritage Retreat’ through Delhi’s history, timeless beauty in Mandawa, desert tales in Jaisalmer, and a journey of romance and regal splendor in Udaipur, all while exploring the rich heritage of Rajasthan.",
    img: "/adventure/ganga-tour/hero_img.jpg",
    slug: "/destinations/rajasthani-heritage-retreat-tour",
  },
  {
    title: "Coastal Treasures & Mountain Magic",
    desc: "Experience a 10-day journey of ‘Coastal Treasures & Mountain Magic’ from Cochin’s historical charm to the lush greenery of Munnar, all while enjoying coastal delights, the majesty of nature in Thekkady, and the vibrant mosaic of life and dreams in Mumbai.",
    img: "/adventure/coastal.jpg",
    slug: "/destinations/coastal-treasures-mountain-magic-tour",
  },
];

export default function RecommendedTours() {
  const router = useRouter();

  return (
    <section
      className="
        w-full
        bg-white
        py-10 sm:py-12 md:py-14 lg:py-16
      "
    >

      {/* 🔥 MAIN CONTAINER */}
      <div
        className="
          max-w-[1400px]
          mx-auto
          px-3 sm:px-4 md:px-6 lg:px-8
        "
      >

        {/* 🔹 Heading */}
        <h2
          className="
            text-[20px] sm:text-[24px] md:text-[28px]
            font-semibold
            text-center
            mb-6 sm:mb-8 md:mb-10
            text-[#2c2c2c]
            tracking-wide
          "
        >
          Recommended Tours
        </h2>

        {/* 🔹 Cards */}
        <div
          className="
            grid grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6 sm:gap-8 md:gap-10
          "
        >

          {tours.map((tour, index) => (
            <div
              key={index}
              onClick={() => router.push(tour.slug)}
              className="
                group
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

              {/* 🔥 Image */}
              <div
                className="
                  relative
                  w-full
                  h-[220px] sm:h-[240px]
                  overflow-hidden
                "
              >

                <Image
                  src={tour.img}
                  alt={tour.title}
                  fill
                  className="
                    object-cover
                    transition-transform duration-700
                  "
                />

                {/* 🔥 Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-black/10
                    opacity-0
                    group-hover:opacity-100
                    transition duration-500
                  "
                />

              </div>

              {/* 🔥 Content */}
              <div
                className="
                  p-5 sm:p-6
                  space-y-3
                "
              >

                <h3
                  className="
                    text-[16px] sm:text-[17px]
                    font-semibold
                    text-red-500
                    leading-snug
                    group-hover:underline
                  "
                >
                  {tour.title}
                </h3>

                <p
                  className="
                    text-[#555]
                    text-[13px]
                    font-light
                    leading-relaxed
                    line-clamp-4
                  "
                >
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