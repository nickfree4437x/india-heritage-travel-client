export default function Itinerary() {
  const itinerary = [
    {
      title: "Day 1-3: Mumbai",
      desc: [
        "Immerse yourself in the vibrant pulse of this dynamic metropolis and explore the mesmerizing Elephanta Caves.",
        "Journey through the heart of Mumbai to discover Dharavi, a locale that has served as the backdrop for iconic Bollywood movies.",
        "Join us for an unforgettable experience as we unlock the essence of this incredible city, blending tradition and modernity.",
      ],
      image: "/journeys/ayurvedic/mumbai.jpg",
      next: "Next Stop: Cochin (A mere 2-hour flight from Mumbai)",
    },
    {
      title: "Day 3-5: Cochin",
      desc: ["Explore colonial architecture, local markets, and cultural performances."],
      image: "/journeys/ayurvedic/cochin.jpg",
    },
    {
      title: "Day 5-11: Kumarakom",
      desc: ["Relax with Ayurvedic therapies and enjoy peaceful backwaters."],
      image: "/journeys/ayurvedic/kumarakom.jpg",
    },
    {
      title: "Day 12-13: Alleppey",
      desc: ["Experience houseboat cruises through scenic canals."],
      image: "/journeys/ayurvedic/alleppey.jpg",
    },
    {
      title: "Day 13-14: Thekkady",
      desc: ["Visit Periyar Wildlife Sanctuary and spice plantations."],
      image: "/journeys/ayurvedic/thekkedy.jpg",
    },
    {
      title: "Day 14-16: Munnar",
      desc: ["Explore tea gardens and misty hills."],
      image: "/journeys/ayurvedic/munnar.jpg",
    },
    {
      title: "Day 16-17: Mumbai",
      desc: ["Return to Mumbai and enjoy leisure time."],
      image: "/journeys/ayurvedic/mumbai.jpg",
    },
    {
      title: "Day 18: Departure",
      desc: ["Bid farewell with unforgettable memories."],
      image: "/journeys/ayurvedic/departure.jpg",
    },
  ];

  return (
    <section className="mt-16">
      
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center mb-10">
        Detailed Itinerary
      </h2>

      <div className="space-y-10">

        {itinerary.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">

            {/* Title */}
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              {item.title}
            </h3>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-6 items-center">
              
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg shadow"
              />

              {/* Text */}
              <div className="space-y-3 text-gray-700">
                {item.desc.map((d, i) => (
                  <p key={i}>{d}</p>
                ))}
              </div>

            </div>

            {/* Next Stop */}
            {item.next && (
              <p className="mt-4 font-medium">
                {item.next}
              </p>
            )}

          </div>
        ))}

      </div>
    </section>
  );
}