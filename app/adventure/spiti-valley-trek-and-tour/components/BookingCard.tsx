export default function BookingCard() {
  return (
    <div className="sticky top-24 bg-[#f9f9f9] rounded-xl shadow p-6">

      <img
        src="/adventure/spiti/map.jpg"
        className="w-full rounded-lg mb-4"
      />

      <h3 className="text-lg font-semibold mb-4">
        Spiti Valley Trek and Tour
      </h3>

      <p className="font-medium mb-3">
        Price-Per Person Starting From:
      </p>

      <ul className="text-gray-600 mb-6 space-y-1">
        <li>• Pocket Friendly: $1810 USD</li>
        <li>• Semi Luxury: $2320 USD</li>
        <li>• Luxury: $3420 USD</li>
      </ul>

      <button className="w-full bg-[#9b7a50] text-white py-3 rounded-full">
        Book This Journey
      </button>
    </div>
  );
}