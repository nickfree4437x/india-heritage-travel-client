import HighlightsInclusions from "./HighlightsInclusions";
import Itinerary from "./Itinerary";
import ExcludedServices from "./ExcludedServices";

export default function TourDetails() {
  const places = [
    {
      title: "Delhi",
      desc: "Discover Delhi, where history and modernity intertwine in a captivating dance. Vibrant, contemporary, and bursting with colors.",
      img: "/journeys/yoga/delhi.jpg",
    },
    {
      title: "Agra",
      desc: "Explore Agra, home to the iconic Taj Mahal and Mughal heritage.",
      img: "/journeys/yoga/agra.jpg",
    },
    {
      title: "Jaipur",
      desc: "Experience Jaipur, the Pink City known for its royal palaces and culture.",
      img: "/journeys/yoga/jaipur.jpg",
    },
    {
      title: "Rishikesh",
      desc: "Find peace in Rishikesh, the yoga capital of the world by the Ganges.",
      img: "/journeys/yoga/rishikesh.jpg",
    },
  ];

  return (
    <div className="space-y-12">

      {places.map((place, index) => (
        <div key={index}>

          <h2 className="text-2xl font-semibold mb-3">
            {place.title}
          </h2>

          <p className="text-gray-700 mb-4">
            {place.desc}
          </p>

          <img
            src={place.img}
            alt={place.title}
            className="rounded-xl shadow w-full"
          />

        </div>
      ))}
       
       <HighlightsInclusions />
       <Itinerary />
       <ExcludedServices />
    </div>
  );
}