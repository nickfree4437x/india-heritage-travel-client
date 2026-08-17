"use client";

const ticketData = [
  {
    site: "Founded",
    indian: "1488 CE, by Rao Bika of the Rathore Rajput clan",
  },
  {
    site: "State / Region",
    indian: "Rajasthan, northern Thar Desert",
  },
  {
    site: "Nickname",
    indian: "The Camel Country / The Red City",
  },
  {
    site: "Known For",
    indian: "Junagarh Fort, Lalgarh Palace, Karni Mata Temple",
  },
  {
    site: "Best Time to Visit",
    indian: "October to March",
  },
  {
    site: "Nearest Railhead",
    indian: "Bikaner Junction (city centre)",
  },
  {
    site: "Nearest Airports",
    indian: "Jodhpur Airport (~235–250 km); Bikaner (Nal) Airport, limited connectivity",
  },
  {
    site: "Ideal Trip Length",
    indian: "1–2 days (fits well into a Jaipur–Bikaner–Jaisalmer–Jodhpur circuit)",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-2 md:py-3.5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Quick Facts About Bikaner
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm bg-white">
          <table className="min-w-full border-collapse">
            {/* <thead>
              <tr className="bg-[#9A6A2F] text-white">
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Founded
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Typical Timing
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Where to Experience It
                </th>
              </tr>
            </thead> */}
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}