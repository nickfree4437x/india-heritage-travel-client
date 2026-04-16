export default function BookingCard() {
  return (
    <div className="bg-white rounded-xl shadow p-5 sticky top-24">

      <img
        src="/journeys/yoga/map.jpg"
        alt="map"
        className="rounded-lg mb-4"
      />

      <h3 className="text-center font-semibold text-lg mb-4">
        Yoga Escapes: Discover Balance & Rejuvenate
      </h3>

      <p className="font-semibold mb-2">
        Price-Per Person Starting From:
      </p>

      <ul className="text-sm text-gray-600 space-y-1 mb-4">
        <li>• Pocket Friendly: $1538USD</li>
        <li>• Semi Luxury: $2097USD</li>
        <li>• Luxury: $3962USD</li>
      </ul>

      <button className="w-full bg-[#9b7a50] text-white py-2 rounded-full">
        Book This Journey
      </button>

    </div>
  );
}