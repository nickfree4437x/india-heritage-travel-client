export default function Itinerary() {
  const itinerary = [
    {
      title: "Day 1: Delhi",
      desc: "Arrival at Delhi Airport. Explore India Gate, Red Fort, Qutub Minar and enjoy Old Delhi culture with a rickshaw ride.",
      img: "/adventure/ladakh/delhi.jpg",
    },
    {
      title: "Day 2: Chandigarh",
      desc: "Drive to Chandigarh and explore Rock Garden and Sukhna Lake.",
      img: "/adventure/ladakh/chandigarh.jpg",
    },
    {
      title: "Day 3-4: Manali",
      desc: "Travel to Manali and explore Solang Valley, Hadimba Temple and scenic mountain views.",
      img: "/adventure/ladakh/manali.jpg",
    },
    {
      title: "Day 5: Jispa",
      desc: "Drive to Jispa and relax near Bhaga River, enjoy camping and scenic landscapes.",
      img: "/adventure/ladakh/jispa.jpg",
    },
    {
      title: "Day 6-8: Leh",
      desc: "Reach Leh and explore Leh Palace, Shanti Stupa and local monasteries. Acclimatize to high altitude.",
      img: "/adventure/ladakh/leh.jpg",
    },
    {
      title: "Day 9-10: Nubra Valley",
      desc: "Visit Nubra Valley via Khardung La Pass. Enjoy camel rides and desert landscapes.",
      img: "/adventure/ladakh/nubra.jpg",
    },
    {
      title: "Day 11: Pangong Lake",
      desc: "Explore Pangong Lake, famous for its changing blue shades and serene beauty.",
      img: "/adventure/ladakh/pangong.jpg",
    },
    {
      title: "Day 12-13: Leh",
      desc: "Return to Leh and enjoy local markets and relaxation.",
      img: "/adventure/ladakh/leh.jpg",
    },
    {
      title: "Day 14: Departure",
      desc: "Departure with unforgettable memories of Leh-Ladakh.",
      img: "/adventure/ladakh/delhi.jpg",
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