"use client";

const ticketData = [
  {
    site: "Republic Day",
    indian: "26 January",
    foreign: "Delhi (parade)",
  },
  {
    site: "Holi",
    indian: "February / March",
    foreign: "Mathura, Vrindavan, Jaipur",
  },
  {
    site: "Onam",
    indian: "August / September",
    foreign: "Kerala",
  },
  {
    site: "Durga Puja",
    indian: "September / October",
    foreign: "Kolkata",
  },
  {
    site: "Pushkar Camel Fair",
    indian: "October / November",
    foreign: "Pushkar, Rajasthan",
  },
  {
    site: "Diwali",
    indian: "October / November",
    foreign: "Nationwide - especially Jaipur, Varanasi, Udaipur",
  },
  {
    site: "Rann Utsav",
    indian: "November – February",
    foreign: "Rann of Kutch, Gujarat",
  },
  {
    site: "Hornbill Festival",
    indian: "December",
    foreign: "Nagaland",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Festival Travel Calendar
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
          India's cultural calendar can make or break your timing - in the best way, if you plan around it.
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm bg-white">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#9A6A2F] text-white">
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Festival
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Typical Timing
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Where to Experience It
                </th>
              </tr>
            </thead>
            <tbody>

              {ticketData.map((item, index) => (

                <tr
                  key={item.site}
                  className={`border-b border-[#eee3d7] hover:bg-[#faf6f1] transition ${
                    index % 2 === 0 ? "bg-white" : "bg-[#fcfbf9]"
                  }`}
                >
                  <td className="px-6 py-3 text-[12px] md:text-[13px] font-light text-[#2c2c2c] whitespace-nowrap">
                    {item.site}
                  </td>

                  <td className="px-6 py-3 text-[12px] md:text-[13px] font-light text-gray-700 whitespace-nowrap">
                    {item.indian}
                  </td>

                  <td className="px-6 py-3 text-[12px] md:text-[13px] font-light text-gray-700 whitespace-nowrap">
                    {item.foreign}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}