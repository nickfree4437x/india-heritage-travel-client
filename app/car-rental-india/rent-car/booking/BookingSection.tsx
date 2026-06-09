// components/booking/BookingSection.tsx

"use client";

import BookingSteps from "./components/BookingSteps";
import BookingFormHeader from "./components/BookingFormHeader";
import BookingForm from "./components/BookingForm";

export default function BookingSection() {
  return (
    <section className="w-full bg-white pt-6 sm:pt-8 pb-10 sm:pb-14 px-4 sm:px-6 md:scroll-mt-28 scroll-mt-24" 
     id="booking-form">

      <div className="max-w-7xl mx-auto">

        <BookingSteps />

        <BookingFormHeader />

        <BookingForm />

      </div>

    </section>
  );
}