"use client";

import Image from "next/image";

const data = [
  {
    day: "Day 1-3: Delhi",
    image: "/adventure/odyssey/delhi-itinerary.jpg",
    reverse: false,
    content: `
Whenever you reach at the Delhi Airport, we’ll welcome you with a sign board and take you to your well-prepared hotel for a comfortable stay.

If you prefer to wake up early, you can explore more into Delhi’s rich history, politics, and spirituality. Explore landmarks such as India Gate, President’s House, and Parliament House.

Dive into history at Gandhi Smriti and Qutub Minar. Experience Old Delhi through a rickshaw ride, uncovering Jama Masjid, Red Fort, and Raj Ghat.

Enrich your senses at Akshardham Temple, Humayun’s Tomb and Lotus Temple, and don’t miss Chandni Chowk.
`,
  },
  {
    day: "Day 3-4: Mandawa",
    image: "/adventure/odyssey/mandawa-itinerary.jpg",
    reverse: true,
    content: `
An authentic Rajasthan town that immerses you in traditional & rural life. It’s an open-art gallery where each step uncovers unique architecture and vibrant mural paintings.

Don’t miss the Heritage Walk, where you’ll see Silk Route-era mansions known as Havelis.
`,
    next: "Next stop: Jaipur • 3 hrs (175 km)",
  },
  {
    day: "Day 4-6: Jaipur",
    image: "/adventure/odyssey/jaipur-itinerary.jpg",
    reverse: false,
    content: `
Jaipur, the Pink City, is a major sightseeing destination in Rajasthan. Hawa Mahal & Jal Mahal are iconic places.

Explore Jantar Mantar, Amber Fort, and Birla Temple.

Walk through Johri Bazaar & Bapu Bazaar for shopping.
`,
    next: "Next stop: Agra • 4.5 hrs (240 km)",
  },
  {
    day: "Day 6-7: Agra",
    image: "/adventure/odyssey/agra-itinerary.jpg",
    reverse: true,
    content: `
Agra lies on the banks of Yamuna river. Witness Taj Mahal sunset views and explore Red Fort.

Early morning visit to Taj Mahal is highly recommended.

Note: Taj Mahal is closed on Fridays.
`,
    next: "Next stop: Varanasi • Flight (648 km)",
  },
  {
    day: "Day 7-9: Varanasi",
    image: "/adventure/odyssey/varanasi-itinerary.jpg",
    reverse: false,
    content: `
Varanasi is the spiritual heart of India. Experience Ganga Ghats, morning rituals, and evening Ganga Aarti.

It is a center of spirituality, culture, and pilgrimage.
`,
    next: "Next stop: Delhi • Flight (1.6 hrs)",
  },
  {
    day: "Day 9: Delhi",
    image: "/adventure/odyssey/delhi-last.jpg",
    reverse: true,
    content: `
Relax at your hotel or explore markets like Chandni Chowk, Textile Market, and Spice Market.

Visit temples and mosques based on your interest.
`,
  },
  {
    day: "Day 10: Farewell And Departure",
    image: "/adventure/odyssey/farewell.jpg",
    reverse: false,
    content: `
After an unforgettable journey, we ensure smooth airport transfer.

Safe travels!
`,
  },
];

export default function OdysseyItinerary() {
  return (
    <section className="space-y-12">

      <h2 className="text-4xl font-semibold text-center mb-10">
        Detailed Itinerary
      </h2>

      {data.map((item, i) => (
        <div
          key={i}
          className="bg-white shadow-md rounded-xl p-6 border"
        >
          <h3 className="text-xl font-bold text-red-600 mb-4">
            {item.day}
          </h3>

          <div
            className={`grid md:grid-cols-2 gap-6 items-center ${
              item.reverse ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            {/* IMAGE */}
            <Image
              src={item.image}
              alt={item.day}
              width={500}
              height={300}
              className="rounded-lg shadow w-full h-[220px] object-cover"
            />

            {/* TEXT */}
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {item.content}
            </p>
          </div>

          {item.next && (
            <p className="mt-4 font-semibold text-gray-800">
              {item.next}
            </p>
          )}
        </div>
      ))}

      {/* CTA */}
      <div className="text-center pt-10">
        <button className="bg-[#9b7a50] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#7d6241] transition">
          Book This Tour Or Modify This Itinerary
        </button>
      </div>

    </section>
  );
}