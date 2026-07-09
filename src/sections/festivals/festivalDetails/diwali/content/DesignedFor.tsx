import { Briefcase, Users, User, Flower } from "lucide-react";

export default function DesignedFor() {
  // Designed for items data
  const items = [
    {
      icon: Flower,
      text: "Spiritual, Cultural & Artistic Interests",
    },
    {
      icon: Briefcase,
      text: "Corporate Travel",
    },
    {
      icon: Users,
      text: "Friends & Family Travel",
    },
    {
      icon: User,
      text: "Solo Travel",
    },
  ];

  return (
    <section className="py-20 bg-white scroll-mt-20 md:scroll-mt-16" id="designed">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="
          text-[20px] sm:text-[24px] md:text-[26px]
          font-semibold
          text-center
          text-[#2c2c2c]
          tracking-wide
          mb-6 sm:mb-8
        ">
          Designed For
        </h2>

        {/* Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-4">
                <Icon size={40} className="text-[#9b7a50]" />
                <p className="text-sm md:text-base font-medium text-gray-700 text-center">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}