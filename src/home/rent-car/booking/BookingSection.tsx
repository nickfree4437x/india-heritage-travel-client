// components/booking/BookingSection.tsx

"use client";

import BookingSteps from "./BookingSteps";
import BookingFormHeader from "./BookingFormHeader";
import BookingForm from "./BookingForm";

export default function BookingSection() {
  return (
    <section className="w-full bg-[#f8f6f2] pt-0 sm:pt-4 pb-2 sm:pb-6 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto">

        <BookingSteps />

        <BookingFormHeader />

        <BookingForm />

      </div>

    </section>
  );
}