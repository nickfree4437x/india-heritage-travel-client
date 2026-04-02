import { Users, Map, Clock, MapPin } from "lucide-react";

export default function Difference() {
  const items = [
    {
      icon: <Users size={24} />,
      text: "Safe And Secure Women Travel",
    },
    {
      icon: <Map size={24} />,
      text: "100+ Diverse Destinations",
    },
    {
      icon: <Clock size={24} />,
      text: "24×7 Round The Clock Support",
    },
    {
      icon: <MapPin size={24} />,
      text: "Traveler Friendly Curated Itineraries",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gray-50 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#c9a45c]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#c9a45c]/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3.5xl font-bold text-[#A38664] tracking-tight">
            How We Make a Difference
          </h2>

          <p className="mt-3 text-gray-600 max-w-xl mx-auto text-base">
            We craft meaningful journeys with comfort, safety, and unforgettable experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {items.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white backdrop-blur-md border border-gray-100 hover:shadow-sm transition duration-300 hover:-translate-y-2 text-center flex flex-col items-center justify-center"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#c9a45c]/10 text-[#A38664] mb-4 group-hover:bg-[#A38664] group-hover:text-white transition duration-300">
                {item.icon}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm font-medium leading-relaxed text-center">
                {item.text}
              </p>

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-[#A38664]/30 transition duration-300"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}