"use client";

export default function TicketInformationSection() {
  return (
    <section className="w-full bg-white py-5 sm:py-2">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mb-2 md:mb-3">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide font-semibold text-[#2c2c2c]">
            Ticket & Entry Information
          </h2>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Ajanta */}

          <div className="border border-gray-200 p-5 rounded-md">

            <h3 className="text-[14px] md:text-[16px] font-semibold text-[#8B3E1F] mb-2">
              Ajanta Caves
            </h3>

            <ul className="space-y-2 text-[12px] sm:text-[13px] text-gray-600">

              <li>
                <span className="font-semibold text-[#2c2c2c]">
                  Foreign tourists:
                </span>{" "}
                <span className="font-light">₹600 per person</span>
              </li>

              <li>
                <span className="font-semibold text-[#2c2c2c]">
                  Indian nationals:
                </span>{" "}
                <span className="font-light">₹40 per person</span>
              </li>

              <li>
                <span className="font-semibold text-[#2c2c2c]">
                  Timings:
                </span>{" "}
                <span className="font-light">Tuesday to Sunday, 9:00 AM – 5:30 PM</span>
              </li>

              <li>
                <span className="font-semibold text-[#2c2c2c]">
                  Camera Fee:
                </span>{" "}
                <span className="font-light">₹25 (No flash photography inside caves)</span>
              </li>

              <li>
                <span className="font-semibold text-[#2c2c2c]">
                  Vehicle Access:
                </span>{" "}
                <span className="font-light">
                    Private vehicles must park at the MTDC complex.
                    Visitors use the mandatory shuttle bus service
                    (₹25 per person) to reach the cave entrance.
                </span>
              </li>

            </ul>

          </div>

          {/* Ellora */}

          <div className="border border-gray-200 p-5 rounded-md">

            <h3 className="text-[14px] md:text-[16px] font-semibold text-[#8B3E1F] mb-2">
              Ellora Caves
            </h3>

            <ul className="space-y-2 text-[12px] sm:text-[13px] text-gray-600">

              <li>
                <span className="font-semibold text-[#2c2c2c]">
                  Foreign tourists:
                </span>{" "}
                <span className="font-light">₹600 per person</span>
              </li>

              <li>
                <span className="font-semibold text-[#2c2c2c]">
                  Indian nationals:
                </span>{" "}
                <span className="font-light">₹40 per person</span>
              </li>

              <li>
                <span className="font-semibold text-[#2c2c2c]">
                  Timings:
                </span>{" "}
                <span className="font-light">Wednesday to Monday, Sunrise – Sunset</span>
              </li>

              <li>
                <span className="font-semibold text-[#2c2c2c]">
                  Camera Fee:
                </span>{" "}
                <span className="font-light">₹25 (Still Camera)</span>
              </li>

              <li>
                <span className="font-semibold text-[#2c2c2c]">
                  Important Note:
                </span>{" "}
                <span className="font-light">
                    Ajanta remains closed on Mondays while
                    Ellora remains closed on Tuesdays.
                    Plan your two-day circuit accordingly.
                </span>
              </li>

            </ul>

          </div>

        </div>


      </div>

    </section>
  );
}