"use client";

export default function OdysseyHighlights() {
  const highlights = [
    "Explore Delhi, Agra, and Jaipur's rich heritage",
    "Discover timeless beauty and sensuous artistry",
    "Immerse in Ganges Ghats and ancient temples",
    "Enjoy performances and vibrant markets",
    "Relax with seamless logistics and accommodations",
  ];

  return (
    <section className="py-16 px-6 bg-[#f8f6f2]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* Highlights */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Highlights
          </h3>

          <ul className="space-y-3 text-gray-700">
            {highlights.map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>
        </div>

        {/* Inclusions */}
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h3 className="text-2xl font-semibold mb-6">
            Inclusions
          </h3>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>🏨 9 nights hotels</div>
            <div>🚗 Local driver</div>
            <div>🍽 Daily breakfast</div>
            <div>💳 All costs covered</div>
            <div>📶 Wi-fi</div>
            <div>🍳 Cooking dinner</div>
            <div>✈ Airport transfer</div>
            <div>🛺 Rickshaw</div>
          </div>
        </div>

      </div>
    </section>
  );
}