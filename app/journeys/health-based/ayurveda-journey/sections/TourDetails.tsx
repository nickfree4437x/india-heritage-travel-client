import HighlightsInclusions from "./HighlightsInclusions";
import Itinerary from "./Itinerary";
import ExcludedServices from "./ExcludedServices";

export default function TourDetails() {
  const tours = [
    {
      title: "Mumbai",
      desc: `Mumbai, often referred to as Bombay, is the heartbeat of India’s urban landscape. 
      This bustling metropolis on the western coast is a captivating fusion of diverse cultures 
      and pulsating energy. With its iconic landmarks like the Gateway of India, a rich cosmopolitan 
      lifestyle, and an endless array of experiences, Mumbai is a city that never ceases to amaze.`,
      image: "/journeys/ayurvedic/mumbai.jpg",
    },
    {
      title: "Cochin",
      desc: `Cochin (Kochi) is a vibrant port city known for its colonial charm, Chinese fishing nets, 
      and rich cultural heritage. It blends history, art, and scenic beauty, offering a peaceful yet 
      culturally immersive experience.`,
      image: "/journeys/ayurvedic/cochin.jpg",
    },
    {
      title: "Kumarakom",
      desc: `Kumarakom is a tranquil backwater destination famous for its serene lagoons, lush greenery, 
      and houseboat experiences. It is a perfect place to relax and connect with nature.`,
      image: "/journeys/ayurvedic/kumarakom.jpg",
    },
    {
      title: "Alleppey",
      desc: `Alleppey, also known as Alappuzha, is the “Venice of the East.” Known for its houseboat 
      cruises, canals, and scenic beauty, it offers a unique and peaceful backwater experience.`,
      image: "/journeys/ayurvedic/alleppey.jpg",
    },
    {
      title: "Thekkedy",
      desc: `Thekkedy is home to the famous Periyar Wildlife Sanctuary. Surrounded by dense forests and 
      hills, it offers opportunities for wildlife spotting, boating, and nature walks.`,
      image: "/journeys/ayurvedic/thekkedy.jpg",
    },
    {
      title: "Munnar",
      desc: `Munnar is a breathtaking hill station known for its rolling tea plantations, misty mountains, 
      and cool climate. It is a paradise for nature lovers and those seeking tranquility.`,
      image: "/journeys/ayurvedic/munnar.jpg",
    },
  ];

  return (
    <div className="space-y-16">

      {tours.map((tour, index) => (
        <div key={index} className="space-y-4">

          {/* Title */}
          <h2 className="text-3xl font-semibold">{tour.title}</h2>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">
            {tour.desc}
          </p>

          {/* Image */}
          <img
            src={tour.image}
            alt={tour.title}
            className="rounded-xl shadow-md"
          />

        </div>
      ))}
      
      <HighlightsInclusions />
      <Itinerary/>
      <ExcludedServices />
    </div>
  );
}