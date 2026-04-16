import HighlightsInclusions from "./HighlightsInclusions";
import Itinerary from "./Itinerary";

export default function TourDetails() {
  const cities = [
    {
      title: "Delhi - A Blend Of History & Royalty",
      desc: "Discover Delhi, a mix of history and modernity with vibrant culture and heritage landmarks.",
      img: "/adventure/ladakh/delhi.jpg",
    },
    {
      title: "Chandigarh - Urban & Modern City",
      desc: "Chandigarh is known for its modern architecture and well-planned infrastructure.",
      img: "/adventure/ladakh/chandigarh.jpg",
    },
    {
      title: "Manali - A Picturesque Hill Station",
      desc: "Manali offers scenic mountains, rivers, and beautiful valleys.",
      img: "/adventure/ladakh/manali.jpg",
    },
    {
      title: "Jispa - A Picturesque Village",
      desc: "Jispa is a peaceful village surrounded by mountains and rivers.",
      img: "/adventure/ladakh/jispa.jpg",
    },
    {
      title: "Leh - A Historic High-Altitude Town",
      desc: "Leh is famous for monasteries, culture and breathtaking landscapes.",
      img: "/adventure/ladakh/leh.jpg",
    },
    {
      title: "Nubra Valley - A Cold Desert In High Altitude",
      desc: "Nubra Valley is known for sand dunes, camels and scenic beauty.",
      img: "/adventure/ladakh/nubra.jpg",
    },
    {
      title: "Pangong Lake - Blue Water Lake",
      desc: "Pangong Lake is famous for its crystal blue water and changing colors.",
      img: "/adventure/ladakh/pangong.jpg",
    },
  ];

  return (
    <div className="space-y-16">
      {cities.map((city, index) => (
        <div key={index} className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {city.title}
          </h2>

          <p className="text-gray-600">{city.desc}</p>

          <img
            src={city.img}
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      ))}

      <HighlightsInclusions />
      <Itinerary />
    </div>
  );
}