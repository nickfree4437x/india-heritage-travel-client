import BookingCard from "./BookingCard";
import TourDetails from "./TourDetails";

export default function TourLayout() {
  return (
    <section className="py-16 bg-[#f8f6f2]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2">
          <TourDetails />
        </div>

        {/* RIGHT SIDE */}
        <div>
          <BookingCard />
        </div>

      </div>
    </section>
  );
}