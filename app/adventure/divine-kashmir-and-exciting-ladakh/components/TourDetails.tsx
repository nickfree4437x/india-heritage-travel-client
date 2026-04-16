import HighlightsInclusions from "./HighlightsInclusions";
import Itinerary from "./Itinerary";

export default function TourDetails() {
  const cities = [
    {
      title: "Srinagar - Heaven On Earth",
      desc: "Famous as the summer capital of Jammu & Kashmir, Srinagar lies in the Kashmir Valley & on the banks of Jhelum River.",
      img: "/adventure/kashmir/srinagar.jpg",
    },
    {
      title: "Gulmarg - Meadow Of Flowers",
      desc: "Gulmarg is known for its lush green meadows, snow-covered mountains and one of the best skiing destinations in India.",
      img: "/adventure/kashmir/gulmarg.jpg",
    },
    {
      title: "Pahalgam - The Valley Of Shepherds",
      desc: "Pahalgam is a beautiful valley surrounded by forests, rivers and breathtaking landscapes.",
      img: "/adventure/kashmir/pahalgam.jpg",
    },
    {
      title: "Kargil - Strategic Importance With Scenic Beauty",
      desc: "Kargil is not only historically important but also offers stunning natural beauty with mountains and valleys.",
      img: "/adventure/kashmir/kargil.jpg",
    },
    {
      title: "Leh - A Historic Town",
      desc: "Leh is famous for its monasteries, culture, and high-altitude desert landscapes.",
      img: "/adventure/kashmir/leh.jpg",
    },
    {
      title: "Nubra Valley - A Cold Desert In High Altitude",
      desc: "Nubra Valley is known for its sand dunes, double-humped camels and scenic beauty.",
      img: "/adventure/kashmir/nubra.jpg",
    },
    {
      title: "Pangong Lake - Blue Water Lake",
      desc: "Pangong Lake is a stunning high-altitude lake famous for its changing blue shades.",
      img: "/adventure/kashmir/pangong.jpg",
    },
  ];

  return (
    <div className="space-y-16">
      {cities.map((city, index) => (
        <div key={index} className="space-y-4">

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold">
            {city.title}
          </h2>

          {/* Description */}
          <p className="text-gray-600">
            {city.desc}
          </p>

          {/* Image */}
          <img
            src={city.img}
            alt={city.title}
            className="w-full rounded-xl shadow-lg hover:scale-[1.02] transition duration-300"
          />

        </div>
      ))}

      <HighlightsInclusions />
      <Itinerary />
    </div>
  );
}