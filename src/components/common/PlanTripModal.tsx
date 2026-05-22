"use client";

import { useEffect, useState } from "react";

import {
  ChevronDown,
  Star,
  X,
} from "lucide-react";

interface PlanTripModalProps {
  open: boolean;
  onClose: () => void;
}

export default function PlanTripModal({
  open,
  onClose,
}: PlanTripModalProps) {

  const [step, setStep] = useState(1);

  // ESC CLOSE
  useEffect(() => {

    const handleEsc = (e: KeyboardEvent) => {

      if (e.key === "Escape") {
        onClose();
      }

    };

    window.addEventListener("keydown", handleEsc);

    return () =>
      window.removeEventListener("keydown", handleEsc);

  }, [onClose]);

  // BODY SCROLL LOCK
  useEffect(() => {

    if (open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };

  }, [open]);

  if (!open) return null;

  return (

    <div className="fixed inset-0 z-[99999]">

      {/* OVERLAY */}
      <div
        onClick={onClose}
        className="
          absolute inset-0
          bg-black/70
          backdrop-blur-[2px]
        "
      />

      {/* MODAL */}
      <div
        className="
          absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[95%] md:w-[92%]
          max-w-6xl
          bg-[#f7f7f7]
          shadow-2xl
          overflow-y-auto
          max-h-[95vh]
        "
      >

        {/* HEADER */}
        <div
          className="
            bg-[#a68657]
            py-6
            px-6 md:px-10
            flex items-center justify-center
            relative
          "
        >

          <h2
            className="
              text-white
              text-[34px]
              md:text-[54px]
              font-[var(--font-playfair)]
              font-medium
            "
          >
            Plan Your Trip
          </h2>

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="
              absolute top-5 right-5
              text-white
              transition
              hover:scale-110
            "
          >
            <X size={34} strokeWidth={3} />
          </button>

        </div>

        {/* CONTENT */}
        <div className="px-5 md:px-10 py-8 md:py-10">

          {/* ================= STEP 1 ================= */}
          {step === 1 && (

            <>
              {/* ROW 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* NAME */}
                <div>

                  <label className="block mb-3 text-[17px] font-semibold text-[#555]">
                    Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="
                      w-full
                      border border-[#d9d9d9]
                      bg-white
                      px-5 py-4
                      text-[17px]
                      outline-none
                      focus:border-[#a68657]
                    "
                  />

                </div>

                {/* EMAIL */}
                <div>

                  <label className="block mb-3 text-[17px] font-semibold text-[#555]">
                    Email <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="
                      w-full
                      border border-[#d9d9d9]
                      bg-white
                      px-5 py-4
                      text-[17px]
                      outline-none
                      focus:border-[#a68657]
                    "
                  />

                </div>

                {/* PHONE */}
                <div>

                  <label className="block mb-3 text-[17px] font-semibold text-[#555]">
                    Phone <span className="text-red-500">*</span>
                  </label>

                  <div
                    className="
                      flex items-center
                      border border-[#d9d9d9]
                      bg-white
                      overflow-hidden
                    "
                  >

                    <div
                      className="
                        flex items-center gap-2
                        px-4 py-4
                        bg-[#f1f1f1]
                        border-r border-[#d9d9d9]
                      "
                    >
                      <span className="text-[20px]">
                        🇮🇳
                      </span>

                      <span className="text-[16px] text-[#555]">
                        +91
                      </span>

                      <ChevronDown
                        size={15}
                        className="text-[#666]"
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="Phone No."
                      className="
                        w-full
                        px-4 py-4
                        text-[17px]
                        outline-none
                      "
                    />

                  </div>

                </div>

              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                {/* TOUR DATE */}
                <div>

                  <label className="block mb-3 text-[17px] font-semibold text-[#555]">
                    Tour Start Date <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Enter tour start date"
                    className="
                      w-full
                      border border-[#d9d9d9]
                      bg-white
                      px-5 py-4
                      text-[17px]
                      outline-none
                      focus:border-[#a68657]
                    "
                  />

                </div>

                {/* DURATION */}
                <div>

                  <label className="block mb-3 text-[17px] font-semibold text-[#555]">
                    Duration (Days) <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Duration"
                    className="
                      w-full
                      border border-[#d9d9d9]
                      bg-white
                      px-5 py-4
                      text-[17px]
                      outline-none
                      focus:border-[#a68657]
                    "
                  />

                </div>

                {/* TRAVELLERS */}
                <div>

                  <label className="block mb-3 text-[17px] font-semibold text-[#555]">
                    Number of Travellers <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="Number of Travellers"
                    className="
                      w-full
                      border border-[#d9d9d9]
                      bg-white
                      px-5 py-4
                      text-[17px]
                      outline-none
                      focus:border-[#a68657]
                    "
                  />

                </div>

              </div>

              {/* AGE GROUP */}
              <div className="mt-8 max-w-[320px]">

                <label className="block mb-3 text-[17px] font-semibold text-[#555]">
                  Age Group <span className="text-red-500">*</span>
                </label>

                <div className="relative">

                  <select
                    className="
                      appearance-none
                      w-full
                      border border-[#d9d9d9]
                      bg-white
                      px-5 py-4
                      text-[17px]
                      outline-none
                      cursor-pointer
                      focus:border-[#a68657]
                    "
                  >
                    <option>Below 30</option>
                    <option>30 - 45</option>
                    <option>45 - 60</option>
                    <option>60+</option>
                  </select>

                  <ChevronDown
                    size={18}
                    className="
                      absolute right-4 top-1/2
                      -translate-y-1/2
                      text-[#555]
                      pointer-events-none
                    "
                  />

                </div>

              </div>

              {/* ACCOMMODATION */}
              <div className="mt-10">

                <h3 className="text-[17px] font-semibold text-[#555] mb-5">
                  Accommodation Type <span className="text-red-500">*</span>
                </h3>

                <div className="flex flex-col md:flex-row gap-6 md:gap-16">

                  {/* LUXURY */}
                  <label className="flex items-center gap-4 cursor-pointer">

                    <input
                      type="radio"
                      name="accommodation"
                      className="w-7 h-7 accent-[#a68657]"
                    />

                    <div className="flex items-center gap-2">

                      <span className="text-[18px] text-[#666]">
                        Luxury
                      </span>

                      <div className="flex items-center gap-1">

                        <Star fill="#c9a15f" stroke="#c9a15f" size={22} />
                        <Star fill="#c9a15f" stroke="#c9a15f" size={22} />
                        <Star fill="#c9a15f" stroke="#c9a15f" size={22} />
                        <Star fill="#c9a15f" stroke="#c9a15f" size={22} />
                        <Star fill="#c9a15f" stroke="#c9a15f" size={22} />

                      </div>

                    </div>

                  </label>

                  {/* COMFORT */}
                  <label className="flex items-center gap-4 cursor-pointer">

                    <input
                      type="radio"
                      name="accommodation"
                      className="w-7 h-7 accent-[#a68657]"
                    />

                    <div className="flex items-center gap-2">

                      <span className="text-[18px] text-[#666]">
                        Comfort
                      </span>

                      <div className="flex items-center gap-1">

                        <Star fill="#c9a15f" stroke="#c9a15f" size={22} />
                        <Star fill="#c9a15f" stroke="#c9a15f" size={22} />
                        <Star fill="#c9a15f" stroke="#c9a15f" size={22} />
                        <Star fill="#c9a15f" stroke="#c9a15f" size={22} />

                      </div>

                    </div>

                  </label>

                </div>

              </div>

              {/* INTERESTED */}
              <div className="mt-12">

                <h3 className="text-[17px] font-semibold text-[#555] mb-6">
                  Interested In <span className="text-red-500">*</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-7 gap-x-10">

                  {[
                    "Culture & History",
                    "Wildlife",
                    "Adventure",
                    "Leisure & Wellness",
                    "Nature & Landscapes",
                  ].map((item, index) => (

                    <label
                      key={index}
                      className="flex items-center gap-4 cursor-pointer"
                    >

                      <input
                        type="checkbox"
                        className="
                          w-7 h-7
                          accent-[#a68657]
                        "
                      />

                      <span className="text-[18px] text-[#666]">
                        {item}
                      </span>

                    </label>

                  ))}

                </div>

              </div>

              {/* NEXT BUTTON */}
              <div className="mt-14 flex justify-center">

                <button
                  onClick={() => setStep(2)}
                  className="
                    bg-[#b89563]
                    text-white
                    tracking-[4px]
                    text-[18px]
                    px-16 md:px-32
                    py-5
                    hover:bg-[#9f7a47]
                    transition-all duration-300
                  "
                >
                  NEXT →
                </button>

              </div>
            </>
          )}

          {/* ================= STEP 2 ================= */}
          {step === 2 && (

            <>
              {/* DESTINATIONS */}
              <div>

                <h3 className="text-[17px] font-semibold text-[#555] mb-6">
                  Destinations <span className="text-red-500">*</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-10">

                  {[
                    "Golden Triangle & Rajasthan",
                    "Himalayas",
                    "Mumbai, Goa & Central India",
                    "Kolkata & East",
                    "Kerala & South",
                    "Varanasi & Amritsar",
                  ].map((item, index) => (

                    <label
                      key={index}
                      className="flex items-center gap-4 cursor-pointer"
                    >

                      <input
                        type="checkbox"
                        className="
                          w-7 h-7
                          accent-[#a68657]
                        "
                      />

                      <span className="text-[18px] text-[#666]">
                        {item}
                      </span>

                    </label>

                  ))}

                </div>

              </div>

              {/* BUDGET */}
              <div className="mt-10">

                <label className="block mb-3 text-[17px] font-semibold text-[#555]">
                  Per person budget <span className="text-red-500">*</span>
                </label>

                <div className="relative">

                  <select
                    className="
                      appearance-none
                      w-full
                      border border-[#d9d9d9]
                      bg-white
                      px-5 py-5
                      text-[17px]
                      outline-none
                      cursor-pointer
                      focus:border-[#a68657]
                    "
                  >
                    <option>$1,000 - $2,000</option>
                    <option>$2,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000+</option>
                  </select>

                  <ChevronDown
                    size={20}
                    className="
                      absolute right-5 top-1/2
                      -translate-y-1/2
                      text-[#555]
                      pointer-events-none
                    "
                  />

                </div>

              </div>

              {/* DETAILS */}
              <div className="mt-10">

                <label className="block mb-3 text-[17px] font-semibold text-[#555]">
                  Details or comments (e.g., preferred destinations, health conditions, special requests)
                  <span className="text-red-500">*</span>
                </label>

                <textarea
                  rows={7}
                  placeholder="Enter details"
                  className="
                    w-full
                    border border-[#d9d9d9]
                    bg-white
                    px-5 py-5
                    text-[17px]
                    outline-none
                    resize-none
                    focus:border-[#a68657]
                  "
                />

              </div>

              {/* BUTTONS */}
              <div
                className="
                  mt-14
                  flex flex-col md:flex-row
                  items-center justify-center
                  gap-6 md:gap-20
                "
              >

                {/* PREVIOUS */}
                <button
                  onClick={() => setStep(1)}
                  className="
                    bg-[#b89563]
                    text-white
                    tracking-[4px]
                    text-[18px]
                    px-14 md:px-20
                    py-5
                    hover:bg-[#9f7a47]
                    transition-all duration-300
                  "
                >
                  ← PREVIOUS
                </button>

                {/* SUBMIT */}
                <button
                  className="
                    bg-[#b89563]
                    text-white
                    tracking-[4px]
                    text-[18px]
                    px-14 md:px-20
                    py-5
                    hover:bg-[#9f7a47]
                    transition-all duration-300
                  "
                >
                  SUBMIT INQUIRY
                </button>

              </div>
            </>
          )}

        </div>

      </div>

    </div>
  );
}