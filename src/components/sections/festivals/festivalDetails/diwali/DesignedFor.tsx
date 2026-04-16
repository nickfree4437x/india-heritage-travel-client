import { Briefcase, Users, User, Flower } from "lucide-react";

export default function DesignedFor() {
  const items = [
    {
      icon: <Flower size={40} />,
      text: "Spiritual, Cultural & Artistic Interests",
    },
    {
      icon: <Briefcase size={40} />,
      text: "Corporate Travel",
    },
    {
      icon: <Users size={40} />,
      text: "Friends & Family Travel",
    },
    {
      icon: <User size={40} />,
      text: "Solo Travel",
    },
  ];

  return (
    <section className="py-20 bg-[#f4f0ea]" id="designed">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#9b7a50] mb-12">
          Designed For
        </h2>

        {/* Items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-4">

              <div className="text-[#9b7a50]">
                {item.icon}
              </div>

              <p className="text-sm md:text-base font-medium text-gray-700 text-center">
                {item.text}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}