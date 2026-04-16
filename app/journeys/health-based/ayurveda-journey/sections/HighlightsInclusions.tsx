import { Check, Wifi, Car, Utensils, CreditCard, Plane, Bus, Home } from "lucide-react";

export default function HighlightsInclusions() {
  const highlights = [
    "Mumbai landmarks and the cinematic charm",
    "Personalized wellness in Kumarakom for body and soul",
    "Cruise through Alleppey's enchanting Backwaters",
    "Thekkady's sanctuary and spice-rich exploration",
    "Munnar's tea gardens and serene landscapes",
  ];

  const inclusions = [
    { icon: <Home size={28} />, text: "18 nights, chosen hotels" },
    { icon: <Car size={28} />, text: "Local driver, guide" },
    { icon: <Utensils size={28} />, text: "Daily breakfast" },
    { icon: <CreditCard size={28} />, text: "All costs covered" },
    { icon: <Wifi size={28} />, text: "In Car Wi-fi" },
    { icon: <Utensils size={28} />, text: "Cooking classes, dinner" },
    { icon: <Plane size={28} />, text: "Airport transfer" },
    { icon: <Bus size={28} />, text: "Delhi rickshaw" },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">

      {/* Highlights */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 text-center">
          Highlights
        </h3>

        <ul className="space-y-3 text-gray-700">
          {highlights.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="text-[#9b7a50] mt-1" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Inclusions */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-6 text-center">
          Inclusions
        </h3>

        <div className="grid grid-cols-2 gap-6 text-center text-sm">
          {inclusions.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="text-[#9b7a50]">{item.icon}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}