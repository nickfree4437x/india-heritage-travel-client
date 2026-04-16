export default function BookingCard() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-28">

      {/* Map Image */}
      <img
        src="/journeys/ayurvedic/map.jpg"
        alt="Route Map"
        className="rounded-lg mb-4"
      />

      <h3 className="text-lg font-semibold text-[#9b7a50] mb-3 text-center">
        Ayurveda Journey: Explore the Science of Wellness
      </h3>

      <p className="text-center font-semibold mb-3">
        Price-Per Person Starting From:
      </p>

      <ul className="text-sm text-gray-700 space-y-2 mb-6">
        <li>• Pocket Friendly: $1765 USD</li>
        <li>• Semi Luxury: $2672 USD</li>
        <li>• Luxury: $5061 USD</li>
      </ul>

      <button className="w-full bg-[#9b7a50] hover:bg-[#856744] text-white py-3 rounded-full transition">
        Book This Journey
      </button>
    </div>
  );
}