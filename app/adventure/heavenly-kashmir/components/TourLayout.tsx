import BookingCard from "./BookingCard";
import { ReactNode } from "react";

type TourLayoutProps = {
  children: ReactNode;
};

export default function TourLayout({ children }: TourLayoutProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="lg:col-span-2">
          {children}
        </div>

        {/* RIGHT (STICKY) */}
        <div>
          <BookingCard />
        </div>

      </div>
    </section>
  );
}