import HighlightsInclusions from "./HighlightsInclusions";
import Itinerary from "./Itinerary";

export default function TourDetails() {
  const cities = [
    {
      title: "Srinagar - Heaven On Earth",
      desc: "Famous as the summer capital of Jammu & Kashmir, Srinagar lies in the Kashmir Valley & on the banks of Jhelum River. It has lush green gardens, lakes & houseboats.",
      img: "/adventure/heaven-kashmir/srinagar.jpg",
    },
    {
      title: "Gulmarg - Meadow Of Flowers",
      desc: "Gulmarg is known for its lush green meadows, snow-covered mountains and one of the best skiing destinations in India.",
      img: "/adventure/heaven-kashmir/gulmarg.jpg",
    },
    {
      title: "Pahalgam - The Valley Of Shepherds",
      desc: "Pahalgam is a beautiful valley surrounded by forests, rivers and breathtaking landscapes.",
      img: "/adventure/heaven-kashmir/pahalgam.jpg",
    },
  ];

  return (
    <div className="space-y-16">
      {cities.map((city, index) => (
        <div key={index} className="space-y-4">

          <h2 className="text-2xl md:text-3xl font-semibold">
            {city.title}
          </h2>

          <p className="text-gray-600">
            {city.desc}
          </p>

          <img
            src={city.img}
            alt={city.title}
            className="w-full rounded-xl shadow-lg"
          />

        </div>
      ))}

      <HighlightsInclusions />
      <Itinerary />
    </div>
  );
}