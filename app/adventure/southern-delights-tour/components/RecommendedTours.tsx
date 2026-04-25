"use client";

import Image from "next/image";
import Link from "next/link";

const tours = [
  {
    title: "The Royal Heritage Trail Tour",
    desc: "An 8-day journey through Delhi, Mandawa, Jaipur, and Agra, immersing you in a captivating blend of history, timeless heritage, regal splendor, and historical grandeur.",
    img: "/adventure/delights/recom/reco1.jpg",
    link: "/adventure/the-royal-heritage-trail-tour",
  },
  {
    title: "A Journey Through Heritage & Wildlife",
    desc: "Embark on a 13-day odyssey through heritage and wildlife on the ‘A Journey Through Heritage & Wildlife’ tour, from the captivating blend of history in Delhi to the wildlife wonders of Ranthambore, desert charm, and regal splendor.",
    img: "/adventure/delights/recom/reco2.jpg",
    link: "/adventure/journey-through-heritage-wildlife",
  },
  {
    title: "Southern Splendors: Culture & Nature Trail",
    desc: "Embark on a 19-day ‘Southern Splendors: Culture & Nature Trail’ from Mumbai’s vibrant dreams to the rich cultural tapestry of Hampi, experiencing history, coastal delights, nature’s majesty, and regal splendor in between.",
    img: "/adventure/delights/recom/reco3.jpg",
    link: "/adventure/southern-splendors",
  },
];

export default function RecommendedTours() {
  return (
    <section className="bg-[#f4f0ea] py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[#2c2c2c] tracking-wide">
          Recommended Tours
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {tours.map((tour, index) => (
            <Link key={index} href={tour.link}>

              <div className="group bg-white rounded-md border border-[#eee7dd] overflow-hidden 
                              transition-all duration-300 hover:shadow-lg cursor-pointer">

                {/* Image */}
                <div className="overflow-hidden">
                  <Image
                    src={tour.img}
                    alt={tour.title}
                    width={400}
                    height={250}
                    className="w-full h-[220px] object-cover 
                               transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">

                  <h3 className="text-[16.5px] font-semibold text-[#AF956C] mb-2 leading-snug group-hover:underline">
                    {tour.title}
                  </h3>

                  <p className="text-gray-700 text-[14px] leading-relaxed text-justify">
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