export default function YogaItinerary() {
  const itinerary = [
    {
      title: "Day 1-3: Delhi",
      desc: "Arriving at Delhi Airport, we’ll welcome you and escort you to your comfy hotel. Explore India Gate, Qutub Minar, Red Fort, Humayun’s Tomb, Lotus Temple, and Chandni Chowk.",
      img: "/adventure/yoga/delhi.jpg",
    },
    {
      title: "Day 3-4: Agra",
      desc: "Visit the iconic Taj Mahal and Agra Fort. Experience the beauty of Mughal architecture.",
      img: "/adventure/yoga/agra.jpg",
    },
    {
      title: "Day 4-6: Jaipur",
      desc: "Explore Jaipur’s palaces, forts, markets, and vibrant culture.",
      img: "/adventure/yoga/jaipur.jpg",
    },
    {
      title: "Day 6: Delhi",
      desc: "Return to Delhi and relax or explore remaining attractions.",
      img: "/adventure/yoga/delhi.jpg",
    },
    {
      title: "Day 7-13: Rishikesh",
      desc: "Experience yoga, meditation, and spiritual practices in Rishikesh by the Ganges.",
      img: "/adventure/yoga/rishikesh.jpg",
    },
    {
      title: "Day 13: Delhi",
      desc: "Return to Delhi for final stay and relaxation.",
      img: "/adventure/yoga/delhi.jpg",
    },
    {
      title: "Day 14: Departure",
      desc: "Departure with peaceful and rejuvenating memories.",
      img: "/adventure/yoga/delhi.jpg",
    },
    {
      title: "Day 15",
      desc: "Buffer / optional extension or final departure.",
      img: "/adventure/yoga/delhi.jpg",
    },
  ];

  return (
    <section className="mt-20">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
        Detailed Itinerary
      </h2>

      {/* Cards */}
      <div className="space-y-8">
        {itinerary.map((day, index) => (
          <div key={index} className="bg-[#f8f8f8] rounded-xl shadow p-6">

            <h3 className="text-lg md:text-xl font-semibold text-red-500 mb-3">
              {day.title}
            </h3>

            <p className="text-gray-700 mb-4">
              {day.desc}
            </p>

            <img
              src={day.img}
              alt={day.title}
              className="w-full rounded-lg shadow"
            />

          </div>
        ))}
      </div>

    </section>
  );
}