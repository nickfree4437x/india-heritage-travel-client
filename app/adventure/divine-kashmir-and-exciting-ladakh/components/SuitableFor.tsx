import { Briefcase, Leaf, Users, PersonStanding } from "lucide-react";

export default function SuitableFor() {
  const items = [
    {
      icon: <Briefcase size={40} />,
      title: "Corporate Travel",
    },
    {
      icon: <Leaf size={40} />,
      title: "Spiritual, Cultural, Artistic & Gastronomic Interests",
    },
    {
      icon: <Users size={40} />,
      title: "Friends & Family Travel",
    },
    {
      icon: <PersonStanding size={40} />,
      title: "Solo Travel",
    },
  ];

  return (
    <section className="py-16 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Locations Bar */}
        <div className="bg-[#9b7a50] text-white text-center py-3 mb-12 text-sm md:text-base font-medium tracking-wide">
          Srinagar &nbsp; | &nbsp; Gulmarg &nbsp; | &nbsp; Pahalgam &nbsp; | &nbsp; Kargil &nbsp; | &nbsp; Leh &nbsp; | &nbsp; Nubra Valley &nbsp; | &nbsp; Pangong Lake
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gray-800">
          Suitable For
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-4">

              <div className="text-[#9b7a50]">
                {item.icon}
              </div>

              <p className="text-sm md:text-base font-medium text-gray-700 max-w-[200px]">
                {item.title}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}