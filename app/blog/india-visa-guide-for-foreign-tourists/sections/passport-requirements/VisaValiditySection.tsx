"use client";

const guideData = [
  {
    title: "120 days before travel",
    content:
      "What’s the earliest date you can submit a 30-day e-Tourist Visa application. Usually you can start even sooner for the longer-validity e-Visas, but still, you should check the official portal to confirm the exact application window right now, just to be safe, ok.",
  },
  {
    title: "30–45 days before travel",
    content:
      "Think of it as the ideal window for applying. Gather your passport scan , a photograph, and your travel details , then just finish the online form in one sitting. Keep it together, no wandering around, it’s like the whole thing should be handled at once.",
  },
  {
    title: "At least 4 days before arrival",
    content:
      "The portal’s processing buffer is built around this window, so anything tighter might, just maybe, cause a missed departure when a query comes back.",
  },
  {
    title: "After approval",
    content:
      "Print your Electronic Travel Authorization (ETA) and try to keep both a digital copy and a paper copy. On arrival, immigration officers will check it against your passport, so basically be ready.",
  },
  {
    title: "On arrival",
    content:
      "Go to the e-Visa immigration counter at your set airport or seaport , where your passport gets stamped and your biometric info is captured.",
  },
];

export default function PracticalGuideSection() {
  return (
    <section className="bg-white py-0 md:py-2">
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}
        <div className="max-w-6xl mb-2 md:mb-4">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
            Your Pre-Departure Visa Timeline
          </h2>

          <p className="text-[12px] sm:text-[14px] text-gray-700 leading-relaxed font-light">
            Think of your visa application as the first leg of your itinerary, sort of before anything else 
            even. It s the part that happens while you haven’t packed a bag yet. India Heritage Travel lays 
            out this timeline for every guest:
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
                    <h3 className=" text-[14px] md:text-[15px] text-[#2c2c2c]">
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