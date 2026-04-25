import { ShieldCheck, Compass, Headphones, Route } from "lucide-react";

export default function Difference() {
  const items = [
    {
      icon: <ShieldCheck size={36} />,
      text: "Women-first safety & comfort in every journey",
    },
    {
      icon: <Compass size={36} />,
      text: "100+ handpicked destinations across India & beyond",
    },
    {
      icon: <Headphones size={36} />,
      text: "24×7 support for a smooth & worry-free experience",
    },
    {
      icon: <Route size={36} />,
      text: "Carefully curated itineraries for seamless travel",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-60px] left-[-60px] w-72 h-72 bg-[#c9a45c]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-72 h-72 bg-[#c9a45c]/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl font-semibold text-[#A38664]">
            How We Make a Difference
          </h2>

          <p className="mt-4 text-gray-500 max-w-lg mx-auto text-sm md:text-base">
            We design travel experiences that are safe, seamless, and truly memorable.
          </p>
        </div>

        {/* Items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-6 text-center">

          {items.map((item, index) => (
            <div key={index} className="group flex flex-col items-center">

              {/* Icon */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#c9a45c]/10 text-[#A38664] mb-5 transition duration-300">
                {item.icon}
              </div>

              {/* FIXED TEXT */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-[200px] transition">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}