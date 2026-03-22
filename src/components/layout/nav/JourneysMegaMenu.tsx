"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/megaMenu.css";

export default function JourneysMegaMenu({ scrolled }: { scrolled: boolean }) {

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("curated");

  const data: any = {
    curated: [
      { name: "The Royal Rajasthan", link: "/journeys/curated-tours/royal-rajasthan-tour" },
      { name: "Golden Triangle Splendor", link: "/journeys/curated-tours/golden-triangle-tour" },
      { name: "South India Getaways", link: "/journeys/curated-tours/south-indian-gateways" },
      { name: "East India Adventure", link: "/journeys/curated-tours/east-india-adventure" },
      { name: "West India Escapes", link: "/journeys/curated-tours/west-india-escapes" }
    ],

    festivals: [
      { name: "Holi Festival Tour", link: "/journeys/festivals/holi-festival-tour" },
      { name: "Diwali Festival Tour", link: "/journeys/festivals/diwali-festival-tour" },
      { name: "Pushkar Fair Tour", link: "/journeys/festivals/pushkar-fair-tour" },
      { name: "Kumbh Mela Tour", link: "/journeys/festivals/kumbh-mela-tour" }
    ],

    health: [
      { name: "Yoga Escapes", link: "/journeys/health-based/yoga-escapes" },
      { name: "Ayurveda Journey", link: "/journeys/health-based/ayurveda-journey" }
    ]
  };

  return (

    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >

      {/* Button */}

      <button
        className={`font-medium transition ${
          scrolled
            ? "text-gray-700 hover:text-orange-500"
            : "text-white hover:text-orange-400"
        }`}
      >
        Journeys
      </button>


      {/* Dropdown */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="mega-menu absolute left-0 w-[760px] bg-white shadow-2xl rounded-xl border border-gray-100"
          >

            {/* Top Links */}

            <div className="flex gap-6 border-b px-6 py-4 text-sm font-medium text-gray-700">

              <Link href="/journeys/holiday-tour-packages-india" className="top-link">
                Holiday Tour Packages in India
              </Link>

              <Link href="/journeys/luxury-tour-packages-india" className="top-link">
                Luxury Tour Operator in India
              </Link>

              <Link href="/journeys/top-tourist-places-india" className="top-link">
                Top Tourist Places in India
              </Link>

            </div>


            {/* Layout */}

            <div className="grid grid-cols-2">

              {/* Sidebar */}

              <div className="border-r bg-gray-50">

                {[
                  { id: "curated", title: "Curated Tours" },
                  { id: "festivals", title: "Festivals" },
                  { id: "health", title: "Health Based" }
                ].map((item) => (

                  <div
                    key={item.id}
                    onMouseEnter={() => setActive(item.id)}
                    className={`sidebar-item ${
                      active === item.id ? "sidebar-active" : ""
                    }`}
                  >
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-xs opacity-70">Explore journeys</p>
                  </div>

                ))}

              </div>


              {/* Right Content */}

              <div className="p-6 space-y-2">

                <AnimatePresence mode="wait">

                  <motion.div
                    key={active}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-1"
                  >

                    {data[active].map((item: any, i: number) => (

                      <Link
                        key={i}
                        href={item.link}
                        className="mega-link"
                      >
                        {item.name}
                      </Link>

                    ))}

                  </motion.div>

                </AnimatePresence>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>

  );
}