"use client";

export default function PracticalGuideSection() {
  const ticketData = [
    {
      category: "Vittala Temple Complex",
      price: "₹40 (Indian) / ₹600 (Foreign) ",
    },
    {
      category: "Royal Enclosure / Lotus Mahal / Elephant Stables",
      price: "Included in a single composite ticket with Vittala: ₹40 / ₹600",
    },
    {
      category: "Virupaksha Temple",
      price: "Free entry",
    },
    {
      category: "Other Monuments",
      price: "Free or minimal entry",
    },
    {
      category: "Hampi Museum, Kamalapura",
      price: "₹5 (Indian) / ₹100 (foreign) ",
    },
    {
      category: "Opening Hours",
      price: "Sunrise to sunset (generally 6 AM to 6 PM); ",
    },
    {
      category: "Official Source",
      price: "Archaeological Survey of India: asi.nic.in",
    },
  ];

  return (
    <section className="w-full bg-white py-2 md:py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Ticket Prices Section */}
        <div className="mb-2 md:mb-5">
          <h3 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c] mb-2">
            Ticket & Entry Information
          </h3>

          {/* Table */}
          <div className="overflow-hidden rounded-md">
            <table className="w-full">
              <tbody>
                {ticketData.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-[#ece7de] last:border-b-0 ${
                      index % 2 === 0 ? "bg-white" : "bg-[#faf7f3]"
                    } hover:bg-[#f5efe8] transition-colors duration-200`}
                  >
                    <td className="w-[55%] px-4 sm:px-6 py-3 text-[11.5px] sm:text-[12px] md:text-[13px] text-[#2c2c2c]">
                      {item.category}
                    </td>
                    <td className="px-4 sm:px-6 py-3 text-[11.5px] sm:text-[12px] md:text-[13px] text-gray-700">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}