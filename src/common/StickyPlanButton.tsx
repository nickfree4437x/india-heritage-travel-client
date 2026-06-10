"use client";

import { useEffect, useState } from "react";

import PlanTrip from "./PlanTripModal/PlanTripForm";

export default function StickyPlanButton() {
  const [open, setOpen] = useState(false);

  const [wiggle, setWiggle] = useState(false);

  // AUTO WIGGLE EVERY FEW SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      setWiggle(true);

      setTimeout(() => {
        setWiggle(false);
      }, 1200);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* DESKTOP STICKY BUTTON */}
      <div
        className="
          hidden
          md:block
          fixed
          left-4
          top-1/2
          -translate-y-1/2
          z-[9999]
        "
      >
        <button
          onClick={() => setOpen(true)}
          className={`
            relative
            overflow-hidden

            bg-[#8f6d42]
            text-white

            px-[15px]
            py-6

            rounded-sm
            shadow-sm

            tracking-[2px]

            text-[14px]

            transition-all
            duration-500

            border
            border-[#b88c56]

            hover:bg-[#755532]
            hover:pl-[20px]

            ${
              wiggle
                ? "animate-[wiggle_0.45s_ease-in-out]"
                : ""
            }
          `}
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
          aria-label="Plan Your Trip"
        >
          <span className="relative z-10 text-[#fffdf8]">
            Plan Your Trip
          </span>
        </button>
      </div>

      {/* MOBILE BUTTON */}
      <div
        className="
          md:hidden

          fixed
          bottom-5
          left-1/2

          -translate-x-1/2

          z-[9999]

          w-[35%]
        "
      >
        <button
          onClick={() => setOpen(true)}
          className={`
            relative
            overflow-hidden

            w-full

            bg-[#8f6d42]
            text-white

            py-2.5

            rounded-sm
            shadow-sm

            tracking-[1px]

            text-[12px]

            transition-all
            duration-500

            border
            border-[#b88c56]

            hover:bg-[#755532]

            ${
              wiggle
                ? "animate-[wiggle_0.45s_ease-in-out]"
                : ""
            }
          `}
          aria-label="Plan Your Trip"
        >
          <span className="relative z-10 text-[#fffdf8]">
            Plan Your Trip
          </span>
        </button>
      </div>

      {/* MODAL */}
      <PlanTrip
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}