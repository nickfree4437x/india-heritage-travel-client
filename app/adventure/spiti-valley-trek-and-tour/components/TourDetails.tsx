import HighlightsInclusions from "./HighlightsInclusions";
import Itinerary from "./Itinerary";

export default function TourDetails() {
  const cities = [
    {
      title: "Delhi - A Blend Of History & Royalty",
      desc: "Discover Delhi, which is the mixture of history and modernity with vibrant colours. Experience Old Delhi’s rich culture, heritage and architecture.",
      img: "/adventure/spiti/delhi.jpg",
    },
    {
      title: "Chandigarh - Urban & Modern City",
      desc: "Chandigarh is known for its modern architecture, clean roads and planned city layout designed by Le Corbusier.",
      img: "/adventure/spiti/chandigarh.jpg",
    },
    {
      title: "Manali - A Picturesque Hill Station",
      desc: "Manali is surrounded by snow-capped mountains, rivers and valleys, making it one of the most popular hill stations in India.",
      img: "/adventure/spiti/manali.jpg",
    },
    {
      title: "Chandratal - Moon Lake Of Himachal",
      desc: "Chandratal Lake is famous for its crescent shape and crystal clear water, located at high altitude in the Himalayas.",
      img: "/adventure/spiti/chandratal.jpg",
    },
    {
      title: "Kaza - Scenic Hub With Ancient Monasteries",
      desc: "Kaza is the main town of Spiti Valley known for its monasteries, culture and stunning landscapes.",
      img: "/adventure/spiti/kaza.jpg",
    },
    {
      title: "Tabo - Ajanta of Himalayas",
      desc: "Tabo is famous for its ancient monastery which is over 1000 years old and known as Ajanta of the Himalayas.",
      img: "/adventure/spiti/tabo.jpg",
    },
    {
      title: "Langza - Natural Beauty & Geological History",
      desc: "Langza is known for its fossil-rich land, Buddha statue and breathtaking views of the Spiti Valley.",
      img: "/adventure/spiti/langza.jpg",
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
            className="w-full rounded-xl shadow-lg"
          />

        </div>
      ))}

      <HighlightsInclusions />
      {/* ✅ Itinerary */}
      <Itinerary />
    </div>
  );
}