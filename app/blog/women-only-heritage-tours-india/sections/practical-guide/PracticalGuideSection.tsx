"use client";

const guideData = [
  {
    title: "How to Reach",
    content:
      "Major international airlines operate through Delhi (DEL) and Mumbai (BOM), with Delhi serving as the primary gateway for most heritage circuits across North India. Domestic flights and private chauffeur transfers make onward travel between destinations smooth and convenient.",
  },
  {
    title: "Entry & Tickets",
    content:
      "Most international visitors require an e-Visa before arrival. Monument tickets such as the Taj Mahal, Agra Fort and Amber Fort are best booked online or arranged through your tour operator to avoid long queues during peak travel seasons.",
  },
  {
    title: "Suggested Duration",
    content:
      "A journey of 7–10 days comfortably covers Delhi, Agra, Jaipur and Udaipur. Travelers with additional time can extend their itinerary to Varanasi, Khajuraho or South India for a more immersive cultural experience.",
  },
  {
    title: "Budget Estimate",
    content:
      "Luxury women-only heritage tours generally fall within the mid-to-high four-figure USD range for a week-long itinerary. Packages typically include private transportation, heritage accommodation, expert-guided sightseeing and most meals.",
  },
  {
    title: "Safety Tips",
    content:
      "Store valuables inside hotel safes, travel only with vetted drivers arranged by your operator, avoid walking alone late at night in unfamiliar areas, and keep your tour manager's contact details readily available throughout your journey.",
  },
  {
    title: "Packing Tips",
    content:
      "Pack lightweight layers for changing temperatures, comfortable walking shoes, a portable charger, sunscreen, reusable water bottle and a light scarf for religious sites and cooler evenings.",
  },
  {
    title: "Photography Tips",
    content:
      "Early mornings offer the best lighting at monuments such as the Taj Mahal and Amber Fort while also avoiding crowds. Always ask permission before photographing local people, especially during religious ceremonies or in rural communities.",
  },
];

export default function PracticalGuideSection() {
  return (
    <section className="bg-white py-0 md:py-1">
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}

        <div className="max-w-6xl mb-2 md:mb-4">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
            Practical Travel Guide
          </h2>

          <p className="text-[12px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
            A little preparation goes a long way. Here's everything you
            should know before joining a women-only heritage tour in India,
            from visas and transportation to packing advice and photography
            etiquette.
          </p>

        </div>

        {/* Desktop Table */}

        <div className="hidden md:block overflow-hidden border  rounded-lg bg-white">

          <table className="w-full border-collapse">

            <tbody>

              {guideData.map((item) => (

                <tr
                  key={item.title}
                  className="border-b border-[#ece3d8] last:border-b-0"
                >

                  <td className="w-[240px] bg-gray-50 px-6 py-6 align-top">

                    <h3 className="font-semibold text-[14px] md:text-[15px] text-[#2c2c2c]">
                      {item.title}
                    </h3>

                  </td>

                  <td className="px-7 py-6">

                    <p className="text-[11.5px] sm:text-[13.5px] text-gray-700 leading-relaxed font-light">
                      {item.content}
                    </p>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Mobile */}

        <div className="md:hidden space-y-5">

          {guideData.map((item) => (

            <div
              key={item.title}
              className="rounded-lg border bg-white p-5"
            >

              <h3 className="font-semibold text-[14px] md:text-[15px] text-[#2c2c2c]">
                {item.title}
              </h3>

              <p className="text-[11px] text-gray-700 leading-relaxed font-light text-justify">
                {item.content}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}