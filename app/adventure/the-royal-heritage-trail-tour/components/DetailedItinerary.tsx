"use client";

import Image from "next/image";

const itinerary = [
  {
    day: "Day 1-3: Delhi",
    desc: [
      "Whenever you reach at the Delhi Airport, we’ll welcome you and take you to your hotel.",
      "Explore Delhi’s history, politics, and spirituality with iconic landmarks.",
      "Visit Red Fort, Jama Masjid, Chandni Chowk and more.",
    ],
    img: "/adventure/heritage/delhi-1.jpg",
    next: "Mandawa",
  },
  {
    day: "Day 3-4: Mandawa",
    desc: [
      "A traditional Rajasthan town filled with art and murals.",
      "Explore Haveli architecture and heritage walk.",
    ],
    img: "/adventure/heritage/mandawa-1.jpg",
    next: "Jaipur",
  },
  {
    day: "Day 4-6: Jaipur",
    desc: [
      "Visit Hawa Mahal, Jal Mahal and Amber Fort.",
      "Explore local markets and temples.",
    ],
    img: "/adventure/heritage/jaipur-1.jpg",
    next: "Agra",
  },
  {
    day: "Day 6-7: Agra",
    desc: [
      "Witness Taj Mahal and Mughal history.",
      "Explore Agra Fort and sunrise view of Taj Mahal.",
    ],
    img: "/adventure/heritage/agra-1.jpg",
    next: "Delhi",
  },
  {
    day: "Day 7: Delhi",
    desc: [
      "Relax or explore local markets and temples.",
      "Enjoy last day in Delhi.",
    ],
    img: "/adventure/heritage/delhi-2.jpg",
  },
  {
    day: "Day 8: Farewell And Departure",
    desc: [
      "Return journey with beautiful memories.",
      "Drop to airport as per schedule.",
    ],
    img: "/adventure/heritage/departure.jpg",
  },
];

export default function DetailedItinerary() {
  return (
    <section className="mt-20">

      <h2 className="text-3xl font-semibold text-center mb-10">
        Detailed Itinerary
      </h2>

      <div className="space-y-10">

        {itinerary.map((item, index) => (
          <div
            key={index}
            className="bg-white border shadow-md rounded-xl p-6"
          >

            {/* DAY TITLE */}
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              {item.day}
            </h3>

            {/* CONTENT */}
            <div className="grid md:grid-cols-2 gap-6 items-start">

              {/* IMAGE */}
              <Image
                src={item.img}
                alt={item.day}
                width={500}
                height={300}
                className="rounded-lg shadow-sm object-cover w-full h-[260px]"
              />

              {/* TEXT */}
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                {item.desc.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>

            </div>

            {/* NEXT STOP */}
            {item.next && (
              <p className="mt-4 text-sm font-medium">
                Next stop: <span className="font-semibold">{item.next}</span>
              </p>
            )}

          </div>
        ))}

      </div>

      {/* CTA BUTTON */}
      <div className="mt-14 text-center">
        <button className="bg-[#9b7a50] text-white px-8 py-3 rounded-md hover:bg-[#7c5f3e] transition">
          Book This Tour Or Modify This Itinerary
        </button>
      </div>

    </section>
  );
}