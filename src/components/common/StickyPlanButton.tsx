"use client";

import { useState } from "react";
import PlanTripModal from "./PlanTripModal";

export default function StickyPlanButton() {

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* DESKTOP LEFT STICKY BUTTON */}
      <div
        className="
          hidden md:block
          fixed left-0 top-1/2
          -translate-y-1/2
          z-[999]
        "
      >

        <button
          onClick={() => setOpen(true)}
          className="
            bg-[#a88454]
            text-white
            px-4 py-5
            shadow-xl
            tracking-[2px]
            text-[15px]
            md:text-[17px]
            font-medium
            transition-all
            duration-300
            hover:bg-[#8f6d42]
            hover:pl-5
          "
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Plan Your Trip
        </button>

      </div>

      {/* MOBILE BOTTOM FIXED BUTTON */}
      <div
        className="
          md:hidden
          fixed bottom-5 left-1/2
          -translate-x-1/2
          z-[999]
          w-[92%]
        "
      >

        <button
          onClick={() => setOpen(true)}
          className="
            w-full
            bg-[#a88454]
            text-white
            py-4
            rounded-full
            shadow-2xl
            tracking-[2px]
            text-[15px]
            font-semibold
            backdrop-blur-md
            transition-all
            duration-300
            hover:bg-[#8f6d42]
            active:scale-[0.98]
          "
        >
          Plan Your Trip
        </button>

      </div>

      {/* MODAL */}
      <PlanTripModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}