import { Users, Map, Clock, MapPin } from "lucide-react";

export default function Difference() {
  const items = [
    {
      icon: <Users size={40} />,
      text: "Safe And Secure Women Travel",
    },
    {
      icon: <Map size={40} />,
      text: "100+ Diverse Destinations",
    },
    {
      icon: <Clock size={40} />,
      text: "24×7 Round The Clock Support",
    },
    {
      icon: <MapPin size={40} />,
      text: "Traveler Friendly Curated Itineraries",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#9b7a53] mb-16">
          How We Make A Difference
        </h2>

        {/* Features */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">

          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4"
            >
              <div className="text-[#9b7a53]">
                {item.icon}
              </div>

              <p className="text-gray-700 font-medium">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}