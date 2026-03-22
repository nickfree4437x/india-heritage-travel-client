"use client";

import { useState } from "react";
import Link from "next/link";
import "@/styles/destinationMegaMenu.css";

export default function DestinationsMegaMenu({ scrolled }: { scrolled: boolean }) {

  const [activeRegion, setActiveRegion] = useState("east");
  const [hoverState, setHoverState] = useState<any>(null);

  const regions: any = {

    east: {
      name: "East India",
      items: [
        {
          name: "All East India Destinations",
          link: "/destinations/east-india",
        },
        {
          name: "Assam",
          link: "/destinations/east-india/assam",
          children: [
            {
              name: "Guwahati",
              link: "/destinations/east-india/assam/guwahati",
            },
            {
              name: "Kaziranga National Park",
              link: "/destinations/east-india/assam/kaziranga-national-park",
            },
          ],
        },
        {
          name: "Meghalaya",
          link: "/destinations/east-india/meghalaya",
        },
        {
          name: "Sikkim",
          link: "/destinations/east-india/sikkim",
        },
        {
          name: "West Bengal",
          link: "/destinations/east-india/west-bengal",
          children: [
            { name: "Darjeeling", link: "/destinations/east-india/west-bengal/darjeeling" },
            { name: "Kolkata", link: "/destinations/east-india/west-bengal/kolkata" },
            { name: "Siliguri", link: "/destinations/east-india/west-bengal/siliguri" },
          ],
        },
      ],
    },

    west: {
      name: "West India",
      items: [
        {
          name: "Rajasthan",
          link: "/destinations/west-india/rajasthan",
          children: [
            { name: "Jaipur", link: "/destinations/west-india/rajasthan/jaipur" },
            { name: "Udaipur", link: "/destinations/west-india/rajasthan/udaipur" },
            { name: "Jodhpur", link: "/destinations/west-india/rajasthan/jodhpur" },
            { name: "Jaisalmer", link: "/destinations/west-india/rajasthan/jaisalmer" },
          ]
        }
      ]
    }

  };

  const activeData = regions[activeRegion];

  return (

    <div className="relative group">

      {/* Button */}

      <button
        className={`font-medium transition ${
          scrolled
            ? "text-gray-700 hover:text-orange-500"
            : "text-white hover:text-orange-400"
        }`}
      >
        Destinations
      </button>


      {/* Dropdown */}

      <div className="destination-menu absolute left-0 w-[820px] bg-white shadow-2xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">

        <div className="grid grid-cols-2">

          {/* Regions */}

          <div className="border-r bg-gray-50 p-4">

            {Object.entries(regions).map(([key, region]: any) => (

              <div
                key={key}
                onMouseEnter={() => setActiveRegion(key)}
                className={`region-item ${
                  activeRegion === key ? "region-active" : ""
                }`}
              >
                {region.name}
              </div>

            ))}

          </div>


          {/* States */}

          <div className="relative p-4">

            {activeData?.items?.map((item: any, index: number) => (

              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoverState(item)}
                onMouseLeave={() => setHoverState(null)}
              >

                <Link
                  href={item.link}
                  className="state-item"
                >
                  {item.name}
                  {item.children && <span>›</span>}
                </Link>


                {/* Cities Popup */}

                {hoverState === item && item.children && (

                  <div className="city-popup left-full top-0 ml-2">

                    {item.children.map((city: any, i: number) => (

                      <Link
                        key={i}
                        href={city.link}
                        className="city-link"
                      >
                        {city.name}
                      </Link>

                    ))}

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );
}