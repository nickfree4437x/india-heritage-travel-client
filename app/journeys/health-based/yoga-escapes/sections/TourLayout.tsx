import TourDetails from "./TourDetails";
import BookingCard from "./BookingCard";

export default function TourLayout() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

      {/* LEFT */}
      <div className="md:col-span-2">
        <TourDetails />
      </div>

      {/* RIGHT */}
      <div>
        <BookingCard />
      </div>

    </section>
  );
}