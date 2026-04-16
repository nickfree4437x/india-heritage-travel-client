export default function Itinerary() {
  const itinerary = [
    {
      title: "Day 1-2: Srinagar",
      desc: "Arrival at Srinagar Airport, transfer to hotel. Explore Dal Lake, houseboats, Mughal gardens and visit Sonamarg known as Meadow of Gold.",
      img: "/adventure/kashmir/srinagar.jpg",
    },
    {
      title: "Day 3: Gulmarg",
      desc: "Visit Gulmarg, famous for skiing and Gondola ride. Enjoy snow-covered mountains and scenic beauty.",
      img: "/adventure/kashmir/gulmarg.jpg",
    },
    {
      title: "Day 4-5: Pahalgam",
      desc: "Explore Pahalgam valley, rivers, pine forests and breathtaking landscapes.",
      img: "/adventure/kashmir/pahalgam.jpg",
    },
    {
      title: "Day 6: Srinagar",
      desc: "Return to Srinagar and explore local markets and cultural spots.",
      img: "/adventure/kashmir/srinagar.jpg",
    },
    {
      title: "Day 7: Kargil",
      desc: "Drive to Kargil, known for its historical significance and scenic routes.",
      img: "/adventure/kashmir/kargil.jpg",
    },
    {
      title: "Day 8-10: Leh",
      desc: "Explore Leh monasteries, local markets and high-altitude landscapes.",
      img: "/adventure/kashmir/leh.jpg",
    },
    {
      title: "Day 11-12: Nubra Valley",
      desc: "Visit Nubra Valley, sand dunes and enjoy camel rides in cold desert.",
      img: "/adventure/kashmir/nubra.jpg",
    },
    {
      title: "Day 13: Pangong Lake",
      desc: "Explore Pangong Lake, famous for its crystal blue waters.",
      img: "/adventure/kashmir/pangong.jpg",
    },
    {
      title: "Day 14: Leh",
      desc: "Return to Leh for rest and local exploration.",
      img: "/adventure/kashmir/leh.jpg",
    },
    {
      title: "Day 15: Departure",
      desc: "Departure from Leh with unforgettable memories.",
      img: "/adventure/kashmir/leh.jpg",
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