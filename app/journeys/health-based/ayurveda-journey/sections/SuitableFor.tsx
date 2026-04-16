import { Briefcase, Leaf, Users, User } from "lucide-react";

export default function SuitableFor() {
  const places = [
    "Mumbai",
    "Cochin",
    "Kumarakom",
    "Alleppey",
    "Thekkady",
    "Munnar",
    "Mumbai",
  ];

  const items = [
    {
      icon: <Briefcase size={40} />,
      title: "Corporate Travel",
    },
    {
      icon: <Leaf size={40} />,
      title: "Spiritual, Cultural, Artistic & Gastronomic",
    },
    {
      icon: <Users size={40} />,
      title: "Friends & Family Travel",
    },
    {
      icon: <User size={40} />,
      title: "Solo Travel",
    },
  ];

  return (
    <section className="bg-[#f8f6f2]">

      {/* 🔥 Top Links Bar */}
      <div className="bg-[#9b7a50] text-white py-3">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-4 text-sm md:text-base">
          
          {places.map((place, index) => (
            <span key={index} className="flex items-center gap-4">
              
              <span className="cursor-pointer hover:underline">
                {place}
              </span>

              {index !== places.length - 1 && <span>|</span>}
            </span>
          ))}

        </div>
      </div>

      {/* 🔥 Suitable For Content */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-gray-800">
            Suitable For
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                
                <div className="text-[#9b7a50]">
                  {item.icon}
                </div>

                <p className="text-sm md:text-base font-medium text-gray-700 text-center">
                  {item.title}
                </p>

              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}