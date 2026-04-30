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

  // ✅ DEFAULT OPEN (index 0)
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
    <section className="bg-[#f8f5f0] py-24 px-6" id="adventure">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* TOP */}
        <div className="grid lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              The Royal Rajasthan
            </h3>
            <Accordion items={rajasthan} open={open} toggle={toggle} section="r1" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Golden Triangle Splendor
            </h3>
            <Accordion items={triangle} open={open} toggle={toggle} section="r2" />
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">
              South India Gateways
            </h3>
            <Accordion items={south} open={open} toggle={toggle} section="r3" />
          </div>
        </div>

        {/* BOTTOM (CENTERED + SAME WIDTH) */}
        <div className="flex justify-center" id="east-west">
          <div className="grid lg:grid-cols-2 gap-10 w-full lg:w-2/3">

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                Serene Kashmir Journeys
              </h3>
              <Accordion items={kashmir} open={open} toggle={toggle} section="r4" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                Ladakh & Spiti Escapes
              </h3>
              <Accordion items={ladakh} open={open} toggle={toggle} section="r5" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}