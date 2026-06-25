"use client";

import Link from "next/link";
import { ReactNode } from "react";

// Type definitions
interface Recommendation {
  text: string;
  link: string;
}

interface ComparisonItem {
  category: string;
  goldenTriangle: string | Recommendation;
  rajasthan: string | Recommendation;
}

const comparisonData: ComparisonItem[] = [
  {
    category: "Cities Covered",
    goldenTriangle: "Delhi, Agra & Jaipur (3 cities)",
    rajasthan: "Jaipur, Jodhpur, Jaisalmer & Udaipur (4–8 cities)",
  },
  {
    category: "Minimum Duration",
    goldenTriangle: "4–5 days",
    rajasthan: "7–8 days",
  },
  {
    category: "Ideal Duration",
    goldenTriangle: "6–7 days",
    rajasthan: "10–14 days",
  },
  {
    category: "Heritage Style",
    goldenTriangle: "Mughal + Rajput blend",
    rajasthan: "Pure Rajput heritage with deeper cultural immersion",
  },
  {
    category: "UNESCO Sites",
    goldenTriangle:
      "Taj Mahal, Agra Fort, Humayun's Tomb, Fatehpur Sikri & Jantar Mantar",
    rajasthan: "Jaisalmer Fort & the Hill Forts of Rajasthan",
  },
  {
    category: "Landscape Variety",
    goldenTriangle: "Historic cities, river plains & sandstone monuments",
    rajasthan: "Lakes, deserts, Aravalli hills, blue & golden cities",
  },
  {
    category: "Wildlife",
    goldenTriangle: "Ranthambore & Bharatpur",
    rajasthan: "Jawai Leopard Reserve, Bishnoi & Ranthambore",
  },
  {
    category: "Palace Hotel Stays",
    goldenTriangle: "Limited (mainly in Jaipur)",
    rajasthan: "Extensive across Jaipur, Jodhpur, Udaipur & Jaisalmer",
  },
  {
    category: "Desert Experience",
    goldenTriangle: "Not included",
    rajasthan: "Camel safaris, Thar Desert & luxury desert camps",
  },
  {
    category: "Romance Factor",
    goldenTriangle: "High (Taj Mahal & Jaipur)",
    rajasthan: "Exceptional (Udaipur, desert & heritage stays)",
  },
  {
    category: "Luxury Budget (Per Day)",
    goldenTriangle: "USD 200–350",
    rajasthan: "USD 250–450",
  },
  {
    category: "Best For",
    goldenTriangle: "First-time visitors, families & short trips",
    rajasthan: "Luxury travellers, couples & culture lovers",
  },
  {
    category: "Our Recommended Tour",
    goldenTriangle: {
      text: "Majestic Golden Triangle Tour",
      link: "/tours/majestic-golden-triangle-tour",
    },
    rajasthan: {
      text: "Rajasthani Heritage Retreat Tour",
      link: "/tours/rajasthani-heritage-retreat-tour",
    },
  },
];

// Helper function to check if value is a Recommendation object
function isRecommendation(value: string | Recommendation): value is Recommendation {
  return typeof value === "object" && value !== null && "text" in value && "link" in value;
}

// Helper function to render cell content
function renderCellContent(
  value: string | Recommendation,
  isRecommended: boolean,
  linkClassName: string
): ReactNode {
  if (isRecommended && isRecommendation(value)) {
    return (
      <Link href={value.link} className={linkClassName}>
        {value.text}
      </Link>
    );
  }
  return typeof value === "string" ? value : value.text;
}

export default function ComparisonTable() {
  return (
    <section className="w-full bg-white py-2 sm:py-2">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-4">
          <h2 className="text-[18px] sm:text-[22px] md:text-[24px] font-semibold text-[#2c2c2c] mb-5">
            Golden Triangle vs Rajasthan Tour: Side-by-Side Comparison
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-md">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#faf7f3]">
                <th className="px-5 py-4 text-left text-[13px] font-semibold text-[#2c2c2c] border-b border-[#e7dfd4] w-[28%]">
                  Category
                </th>
                <th className="px-5 py-4 text-left text-[13px] font-semibold text-[#2c2c2c] border-b border-[#e7dfd4] w-[36%]">
                  Golden Triangle Tour
                </th>
                <th className="px-5 py-4 text-left text-[13px] font-semibold text-[#2c2c2c] border-b border-[#e7dfd4] w-[36%]">
                  Rajasthan Tour
                </th>
              </tr>
            </thead>

            <tbody>
              {comparisonData.map((item, index) => {
                const isRecommended = item.category === "Our Recommended Tour";

                return (
                  <tr
                    key={item.category}
                    className={index % 2 === 0 ? "bg-white" : "bg-[#fcfbf9]"}
                  >
                    <td className="px-5 py-4 text-[13px] text-[#2c2c2c] border-b border-[#ece7de] align-top">
                      {item.category}
                    </td>

                    <td className="px-5 py-4 text-[13px] leading-relaxed text-gray-700 font-light border-b border-[#ece7de] align-top">
                      {renderCellContent(
                        item.goldenTriangle,
                        isRecommended,
                        "text-[#b8860b] hover:text-[#8b6914] underline-offset-2 hover:underline transition-colors duration-200"
                      )}
                    </td>

                    <td className="px-5 py-4 text-[11px] md:text-[13px] leading-relaxed text-gray-700 font-light border-b border-[#ece7de] align-top">
                      {renderCellContent(
                        item.rajasthan,
                        isRecommended,
                        "text-[#b8860b] hover:text-[#8b6914] underline-offset-2 hover:underline transition-colors duration-200"
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}