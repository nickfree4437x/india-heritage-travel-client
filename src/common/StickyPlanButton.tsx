"use client";

import { useEffect, useState } from "react";

import PlanTrip from "./PlanTripModal/PlanTripForm";

export default function StickyPlanButton() {

  const [open, setOpen] =
    useState(false);

  const [wiggle, setWiggle] =
    useState(false);

  // AUTO WIGGLE EVERY FEW SECONDS
  useEffect(() => {

    const interval = setInterval(() => {

      setWiggle(true);

      setTimeout(() => {
        setWiggle(false);
      }, 1200);

    }, 3200);

    return () =>
      clearInterval(interval);

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

            bg-[#a88454]

            text-white

            px-[15px]
            py-6

            rounded-sm

            shadow-sm

            tracking-[2px]

            text-[14px]
            lg:text-[15px]

            font-[450]

            transition-all
            duration-500

            border
            border-[#c6a06c]

            hover:bg-[#8f6d42]
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
        >

          <span className="relative z-10">
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

            bg-[#a88454]

            text-white

            py-3

            rounded-sm

            shadow-sm

            tracking-[1px]

            text-[14px]

            transition-all
            duration-500

            border
            border-[#c6a06c]

            hover:bg-[#8f6d42]


            ${
              wiggle
                ? "animate-[wiggle_0.45s_ease-in-out]"
                : ""
            }
          `}
        >

          <span className="relative z-10">
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