"use client";

// ============================================================
// IMPORTS
// ============================================================
import { useState } from "react";
import Accordion from "./Accordion";
import {
  rajasthan,
  triangle,
  south,
  kashmir,
  ladakh,
} from "./adventureData";

// ============================================================
// TYPES
// ============================================================
type SectionKey = "r1" | "r2" | "r3" | "r4" | "r5";

type OpenState = {
  r1: number | null;
  r2: number | null;
  r3: number | null;
  r4: number | null;
  r5: number | null;
};

// ============================================================
// COMPONENT
// ============================================================
export default function ChooseAdventure() {
  // Initialize all sections with first accordion item open
  const [open, setOpen] = useState<OpenState>({
    r1: 0,
    r2: 0,
    r3: 0,
    r4: 0,
    r5: 0,
  });

  // Handle accordion toggle - closes if same item, opens if different
  const toggle = (section: SectionKey, index: number) => {
    setOpen((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }));
  };

  return (
    <section className="bg-gradient-to-b from-[#f3efe8] to-[#f1ede6] py-4 sm:py-6">
      <div className="max-w-[1200px] xl:max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-10">
        <div className="space-y-16">
          
          {/* ===== SECTION HEADER ===== */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold tracking-wide mb-2 leading-snug md:whitespace-nowrap text-[#8b6a3d]">
              Explore Our Heritage Tours Across India
            </h2>
            <p className="text-[12.5px] sm:text-[13.5px] md:text-[14px] font-light leading-relaxed tracking-wide max-w-[580px] mx-auto text-[#8b6a3d]">
              Experience India's rich culture, history, and diverse destinations through thoughtfully curated tours.
            </p>
          </div>

          {/* ===== TOP ROW: 3 COLUMNS ===== */}
          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Rajasthan */}
            <div id="royal-rajasthan">
              <h3 className="text-gray-700 text-center text-[20px] sm:text-[21px] md:text-[22px] font-medium tracking-wide leading-snug mb-5">
                The Royal Rajasthan
              </h3>
              <Accordion
                items={rajasthan}
                open={open}
                toggle={toggle}
                section="r1"
              />
            </div>

            {/* Golden Triangle */}
            <div id="golden-triangle">
              <h3 className="text-gray-700 text-center text-[20px] sm:text-[21px] md:text-[22px] font-medium tracking-wide leading-snug mb-5 md:mt-0 mt-8">
                Golden Triangle Splendor
              </h3>
              <Accordion
                items={triangle}
                open={open}
                toggle={toggle}
                section="r2"
              />
            </div>

            {/* South India */}
            <div id="south-india">
              <h3 className="text-gray-700 text-center text-[20px] sm:text-[21px] md:text-[22px] font-medium tracking-wide leading-snug mb-5 md:mt-0 mt-8">
                South India Gateways
              </h3>
              <Accordion
                items={south}
                open={open}
                toggle={toggle}
                section="r3"
              />
            </div>
          </div>

          {/* ===== BOTTOM ROW: 2 COLUMNS (Centered) ===== */}
          <div className="flex justify-center">
            <div className="grid lg:grid-cols-2 gap-10 w-full lg:w-2/3">
              
              {/* Kashmir */}
              <div id="east-india">
                <h3 className="text-gray-700 text-center text-[20px] sm:text-[21px] md:text-[22px] font-medium tracking-wide leading-snug mb-5 lg:text-center">
                  Serene Kashmir Journeys
                </h3>
                <Accordion
                  items={kashmir}
                  open={open}
                  toggle={toggle}
                  section="r4"
                />
              </div>

              {/* Ladakh */}
              <div id="west-india">
                <h3 className="text-gray-700 text-[20px] sm:text-[21px] md:text-[22px] font-medium tracking-wide leading-snug mb-5 md:mt-0 mt-5 text-center lg:text-center">
                  Ladakh &amp; Spiti Escapes
                </h3>
                <Accordion
                  items={ladakh}
                  open={open}
                  toggle={toggle}
                  section="r5"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}