"use client";

const ticketData = [
  {
    site: "Sedan (Dzire, Etios)",
    indian: "₹4,000–5,000 ($48–60)",
    foreign: "Couples or solo travelers, light luggage",
  },
  {
    site: "SUV / MPV (Innova, Ertiga)",
    indian: "₹6,000–7,500 ($72–90)",
    foreign: "Families or small groups, more luggage",
  },
  {
    site: "Premium SUV / luxury sedan",
    indian: "₹8,000–15,000+ ($96–180+)",
    foreign: "Travelers prioritizing comfort and space",
  },
];

export default function CityBreakdown() {
  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
           Local Transportation Costs
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           Inside cities, auto rickshaws tend to be around $1–3 for quick hops, but you should  always confirm 
           the meter, or just agree on a fare upfront first . Ride hailing apps like Uber and Ola are often 
           a bit pricier, though they give you fixed pricing options, which can feel like a safer bet. Then 
           the metro systems in Delhi Mumbai Kolkata Bengaluru and Kochi they’re usually very good value, 
           roughly $0.20–0.60 each ride, so yeah, it adds up fast if you use them often.
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-sm bg-white">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#9A6A2F] text-white">
                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400]">
                  Vehicle Type
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Outstation Daily Rate
                </th>

                <th className="px-6 py-3 text-left text-[12px] md:text-[13px] font-[400] whitespace-nowrap">
                  Best For
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

        <p className="text-gray-700 mt-1 md:mt-2 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify mb-2 md:mb-3">
           Rates usually cover fuel, toll charges, the driver allowance and some daily kilometer space 
           (often about 250 km), and if you exceed that, the extra is charged somewhere around ₹12–25 
           per additional km. For example, a 5-day Golden Triangle route from Delhi–Agra–Jaipur, using 
           a sedan, comes out roughly $250–350 per vehicle. Then a bigger 10-day “Rajasthan grand” circuit 
           lands near $500–700, so it’s not really the same ballpark.
        </p>

      </div>
    </section>
  );
}