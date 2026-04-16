export default function Itinerary() {
  const itinerary = [
    {
      title: "Day 1: Delhi",
      desc: "Arrival at Delhi Airport. Explore India Gate, President’s House, Qutub Minar, Red Fort, Jama Masjid and enjoy Old Delhi rickshaw ride.",
      img: "/adventure/spiti/delhi.jpg",
    },
    {
      title: "Day 2: Chandigarh",
      desc: "Drive to Chandigarh, known for its modern architecture and urban planning designed by Le Corbusier.",
      img: "/adventure/spiti/chandigarh.jpg",
    },
    {
      title: "Day 3-4: Manali",
      desc: "Travel to Manali and explore scenic valleys, rivers and mountain views. Enjoy the beautiful hill station vibe.",
      img: "/adventure/spiti/manali.jpg",
    },
    {
      title: "Day 5: Chandratal",
      desc: "Visit Chandratal Lake, a stunning crescent-shaped lake with crystal-clear water at high altitude.",
      img: "/adventure/spiti/chandratal.jpg",
    },
    {
      title: "Day 6: Kaza",
      desc: "Reach Kaza, the heart of Spiti Valley. Explore monasteries and local culture.",
      img: "/adventure/spiti/kaza.jpg",
    },
    {
      title: "Day 7-8: Tabo",
      desc: "Visit Tabo Monastery, known as the Ajanta of the Himalayas and explore ancient Buddhist culture.",
      img: "/adventure/spiti/tabo.jpg",
    },
    {
      title: "Day 9-10: Langza",
      desc: "Explore Langza village, famous for fossils, giant Buddha statue and breathtaking mountain views.",
      img: "/adventure/spiti/langza.jpg",
    },
    {
      title: "Day 10-11: Manali",
      desc: "Return journey towards Manali with scenic landscapes and relaxing stops.",
      img: "/adventure/spiti/manali.jpg",
    },
    {
      title: "Day 12: Chandigarh",
      desc: "Drive back to Chandigarh and relax after the long journey.",
      img: "/adventure/spiti/chandigarh.jpg",
    },
    {
      title: "Day 13: Departure",
      desc: "Departure with unforgettable memories of Spiti Valley.",
      img: "/adventure/spiti/delhi.jpg",
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