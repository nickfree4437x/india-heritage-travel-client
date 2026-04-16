import {
  Hotel,
  Car,
  Utensils,
  CreditCard,
  Wifi,
  CookingPot,
  Plane,
  Bus,
} from "lucide-react";

export default function HighlightsInclusions() {
  const highlights = [
    "Vibrant mix of history and modernity, with lively Old Delhi.",
    "Renowned for urban planning, designed by Le Corbusier.",
    "Beautiful views, lush valleys, and a gateway to Lahaul-Spiti and Leh-Ladakh.",
    "High-altitude crescent-shaped lake known for its crystal-clear waters.",
    "Capital of Spiti, featuring stunning scenery and historic monasteries.",
    "Home to the ancient Tabo Monastery, a protected cultural site.",
    "Surrounded by mountains, famous for fossils and a golden Buddha statue.",
  ];

  const inclusions = [
    { icon: <Hotel size={28} />, text: "15 nights, chosen hotels" },
    { icon: <Car size={28} />, text: "Local driver, guide" },
    { icon: <Utensils size={28} />, text: "Daily breakfast" },
    { icon: <CreditCard size={28} />, text: "All costs covered" },
    { icon: <Wifi size={28} />, text: "In Car Wi-fi" },
    { icon: <CookingPot size={28} />, text: "Cooking classes, dinner" },
    { icon: <Plane size={28} />, text: "Airport transfer" },
    { icon: <Bus size={28} />, text: "Delhi rickshaw" },
  ];

  return (
    <section className="grid md:grid-cols-2 gap-8 mt-16">

      {/* Highlights */}
      <div className="bg-[#f8f8f8] rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Highlights
        </h2>

        <ul className="space-y-3 text-gray-700">
          {highlights.map((item, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-[#9b7a50] font-bold">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Inclusions */}
      <div className="bg-[#f8f8f8] rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Inclusions
        </h2>

        <div className="grid grid-cols-2 gap-6 text-center">
          {inclusions.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="text-[#9b7a50]">{item.icon}</div>
              <p className="text-sm text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}