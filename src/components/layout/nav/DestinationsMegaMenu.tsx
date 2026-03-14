"use client";

import { useState } from "react";
import Link from "next/link";

export default function DestinationsMegaMenu({ scrolled }: { scrolled: boolean }) {

  const [activeRegion, setActiveRegion] = useState("east");

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
            {
              name: "Darjeeling",
              link: "/destinations/east-india/west-bengal/darjeeling",
            },
            {
              name: "Kolkata",
              link: "/destinations/east-india/west-bengal/kolkata",
            },
            {
              name: "Siliguri",
              link: "/destinations/east-india/west-bengal/siliguri",
            },
          ],
        },
      ],
    },

    west: {
      name: "West India",
      items: [
        { name: "Rajasthan", link: "/destinations/west-india/rajasthan",
          children: [
            { name: "Jaipur", link: "/destinations/west-india/rajasthan/jaipur" },
            { name: "Udaipur", link: "/destinations/west-india/rajasthan/udaipur" },
            { name: "Jodhpur", link: "/destinations/west-india/rajasthan/jodhpur" },
            { name: "Jaisalmer", link: "/destinations/west-india/rajasthan/jaisalmer" },
            { name: "Bikaner", link: "/destinations/west-india/rajasthan/bikaner" },
            { name: "Pushkar", link: "/destinations/west-india/rajasthan/pushkar" },
            { name: "Mount Abu", link: "/destinations/west-india/rajasthan/mount-abu" }
          ]
        }
      ],
    },

    north: {
      name: "North India",
      items: [
        { name: "Delhi", link: "/destinations/north-india/delhi" },
        { name: "Jammu & Kashmir", link: "/destinations/north-india/jammu-kashmir",
          children: [
            { name: "Srinagar", link: "/destinations/north-india/jammu-kashmir/srinagar" },
            { name: "Gulmarg", link: "/destinations/north-india/jammu-kashmir/gulmarg" },
            { name: "Pahalgam", link: "/destinations/north-india/jammu-kashmir/pahalgam" },
            { name: "Sonmarg", link: "/destinations/north-india/jammu-kashmir/sonmarg" }
          ]
        },

        { name: "Uttar Pradesh", link: "/destinations/north-india/uttar-pradesh",
          children: [
            { name: "Agra", link: "/destinations/north-india/uttar-pradesh/agra" },
            { name: "Ayodhya", link: "/destinations/north-india/uttar-pradesh/ayodhya" },
            { name: "Fatehpur Sikri", link: "/destinations/north-india/uttar-pradesh/fatehpur-sikri" },
            { name: "Vrindavan", link: "/destinations/north-india/uttar-pradesh/vrindavan" },
            { name: "Mathura", link: "/destinations/north-india/uttar-pradesh/mathura" }
          ]
        }
      ],
    },

    south: {
      name: "South India",
      items: [
        { name: "Kerala", link: "/destinations/south-india/kerala" },
        { name: "Tamil Nadu", link: "/destinations/south-india/tamil-nadu" },
        { name: "Karnataka", link: "/destinations/south-india/karnataka" },
      ],
    },

    central: {
      name: "Central India",
      items: [
        { name: "Madhya Pradesh", link: "/destinations/central-india/madhya-pradesh" },
        { name: "Chhattisgarh", link: "/destinations/central-india/chhattisgarh" },
      ],
    },

    nepal: {
      name: "Nepal",
      items: [
        { name: "Kathmandu", link: "/destinations/nepal/kathmandu" },
        { name: "Pokhara", link: "/destinations/nepal/pokhara" },
      ],
    },

  };

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


      {/* Mega Menu */}

      <div className="absolute left-0 top-10 w-[750px] bg-white shadow-xl rounded-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

        <div className="grid grid-cols-3 gap-8">

          {/* Regions */}

          <div className="flex flex-col gap-3">

            {Object.entries(regions).map(([key, region]: any) => (

              <button
                key={key}
                onMouseEnter={() => setActiveRegion(key)}
                className={`text-left ${
                  activeRegion === key
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {region.name}
              </button>

            ))}

          </div>


          {/* States */}

          <div className="flex flex-col gap-2">

            {regions[activeRegion].items.map((item: any, index: number) => (

              <Link
                key={index}
                href={item.link}
                className="font-medium text-gray-700 hover:text-orange-500"
              >
                {item.name}
              </Link>

            ))}

          </div>


          {/* Cities */}

          <div className="flex flex-col gap-2">

            {regions[activeRegion].items.map((item: any) =>

              item.children?.map((city: any, i: number) => (
                <Link
                  key={i}
                  href={city.link}
                  className="text-gray-600 hover:text-orange-500"
                >
                  {city.name}
                </Link>
              ))

            )}

          </div>

        </div>

      </div>

    </div>

  );
}