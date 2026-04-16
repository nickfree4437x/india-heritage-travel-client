"use client";

import Image from "next/image";

const tours = [
  {
    title: "The Royal Heritage Trail Tour",
    desc: "An 8-day journey through Delhi, Mandawa, Jaipur, and Agra, immersing you in a captivating blend of history, timeless heritage, regal splendor, and historical grandeur.",
    image: "/destination/golden-triangle/recommended/tour1.jpg",
  },
  {
    title: "Royal Rajasthan & Sacred Ganges",
    desc: "Experience a 20-day journey through the heart of India on the ‘Royal Rajasthan & Sacred Ganges’ tour. From historic Delhi to spiritual Varanasi, explore a rich tapestry of heritage and culture.",
    image: "/destination/golden-triangle/recommended/tour2.jpg",
  },
  {
    title: "Southern Delights: A Journey Through Time",
    desc: "Discover the essence of Southern India on the ‘Southern Delights’ 17-day tour, from Cochin’s history to Mumbai’s vibrant dreams, with coastal delights, natural majesty, and timeless wonders in between.",
    image: "/destination/golden-triangle/recommended/tour3.jpg",
  },
];

export default function RecommendedTours() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="py-16 bg-[#f4f0ea]">
        <h2 className="text-3xl font-bold text-center mb-10">
            Recommended Tours
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

            {[
            {
                title: "The Royal Heritage Trail Tour",
                img: "/tour1.jpg",
            },
            {
                title: "Royal Rajasthan & Sacred Ganges",
                img: "/tour2.jpg",
            },
            {
                title: "Southern Delights",
                img: "/tour3.jpg",
            },
            ].map((tour, i) => (
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-xl transition">
                <Image src={tour.img} alt="" width={400} height={250} className="rounded-t-xl" />
                <div className="p-4">
                <h3 className="text-red-600 font-semibold">
                    {tour.title}
                </h3>
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
  );
}