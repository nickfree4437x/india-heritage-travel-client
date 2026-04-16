export default function Itinerary() {
  const itinerary = [
    {
      title: "Day 1-3: Srinagar",
      desc: "Arrival at Srinagar Airport, transfer to hotel. Explore Dal Lake, houseboats, Mughal gardens and enjoy a day trip to Sonamarg, known as Meadow of Gold.",
      img: "/adventure/heaven-kashmir/srinagar.jpg",
    },
    {
      title: "Day 4: Gulmarg",
      desc: "Visit Gulmarg, famous for skiing and Gondola ride. Enjoy snow-covered mountains and scenic beauty.",
      img: "/adventure/heaven-kashmir/gulmarg.jpg",
    },
    {
      title: "Day 5-6: Pahalgam",
      desc: "Explore Pahalgam valley, rivers, pine forests and breathtaking landscapes.",
      img: "/adventure/heaven-kashmir/pahalgam.jpg",
    },
    {
      title: "Day 7: Srinagar",
      desc: "Return to Srinagar, explore local markets and cultural spots.",
      img: "/adventure/heaven-kashmir/srinagar.jpg",
    },
    {
      title: "Day 8: Departure",
      desc: "Departure from Srinagar with beautiful memories of Kashmir.",
      img: "/adventure/heaven-kashmir/srinagar.jpg",
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
          <div
            key={index}
            className="bg-[#f8f8f8] rounded-xl shadow p-6"
          >
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