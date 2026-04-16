"use client";

import Image from "next/image";

export default function RecommendedTours() {
  const tours = [
    {
      title: "A Journey Through Heritage & Wildlife",
      desc: "Embark on a 13-day odyssey through heritage and wildlife...",
      img: "/tours/tour1.jpg",
    },
    {
      title: "Royal-Triangle-Odyssey",
      desc: "Experience a 10-day Royal Triangle Odyssey...",
      img: "/tours/tour2.jpg",
    },
    {
      title: "Heritage Odyssey: North To South India",
      desc: "Explore North to South India in 16 days...",
      img: "/tours/tour3.jpg",
    },
  ];

  return (
    <section className="bg-[#f4f0ea] py-16 px-6 border-t">
      
      <div className="max-w-[1300px] mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Recommended Tours
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <Image
                src={tour.img}
                alt={tour.title}
                width={400}
                height={250}
                className="w-full h-[220px] object-cover"
              />

              <div className="p-5">
                <h3 className="text-red-500 font-semibold mb-2">
                  {tour.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
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