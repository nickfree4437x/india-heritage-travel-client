"use client";

import { useState } from "react";
import Accordion from "./Accordion";
import {
  rajasthan,
  triangle,
  south,
  kashmir,
  ladakh,
} from "./adventureData";

export default function ChooseAdventure() {

  const [open, setOpen] = useState<any>({
    r1: 0,
    r2: 0,
    r3: 0,
    r4: 0,
    r5: 0,
  });

  const toggle = (section: string, index: number) => {
    setOpen((prev: any) => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }));
  };

  return (
    <section
      className="bg-gradient-to-b from-[#f3efe8] to-[#f1ede6] 
                 py-4 sm:py-6"
      id="adventure"
    >

      {/* 🔥 PROPER CONTAINER (FIXED SPACING) */}
      <div className="max-w-[1200px] xl:max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-10">

        <div className="space-y-16">

          {/* HEADING */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold tracking-wide mb-2 leading-snug md:whitespace-nowrap text-[#8b6a3d]">
              Choose Your Adventure
            </h2>

            <p className="text-[12.5px] sm:text-[13.5px] md:text-[14px] font-light leading-relaxed tracking-wide max-w-[580px] mx-auto text-[#8b6a3d]">
              Experience The Beauty and Diversity of India with Our Unforgettable Tours!
            </p>
          </div>

          {/* TOP GRID */}
          <div className="grid lg:grid-cols-3 gap-6">

            <div>
              <h3 className="text-gray-700 text-center text-[20px] sm:text-[21px] md:text-[22px] font-medium tracking-wide leading-snug mb-5">
                The Royal Rajasthan
              </h3>
              <Accordion items={rajasthan} open={open} toggle={toggle} section="r1" />
            </div>

            <div>
              <h3 className=" text-gray-700 text-center text-[20px] sm:text-[21px] md:text-[22px] font-medium tracking-wide leading-snug mb-5">
                Golden Triangle Splendor
              </h3>
              <Accordion items={triangle} open={open} toggle={toggle} section="r2" />
            </div>

            <div>
              <h3 className=" text-gray-700 text-center text-[20px] sm:text-[21px] md:text-[22px] font-medium tracking-wide leading-snug mb-5">
                South India Gateways
              </h3>
              <Accordion items={south} open={open} toggle={toggle} section="r3" />
            </div>

          </div>

          {/* BOTTOM GRID */}
          <div className="flex justify-center" id="east-west">
            <div className="grid lg:grid-cols-2 gap-10 w-full lg:w-2/3">

              <div>
                <h3 className=" text-gray-700 text-center text-[20px] sm:text-[21px] md:text-[22px] font-medium tracking-wide leading-snug mb-5 lg:text-center">
                  Serene Kashmir Journeys
                </h3>
                <Accordion items={kashmir} open={open} toggle={toggle} section="r4" />
              </div>

              <div>
                <h3 className=" text-gray-700 text-[20px] sm:text-[21px] md:text-[22px] font-medium tracking-wide leading-snug mb-5 text-center lg:text-center">
                  Ladakh & Spiti Escapes
                </h3>
                <Accordion items={ladakh} open={open} toggle={toggle} section="r5" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}