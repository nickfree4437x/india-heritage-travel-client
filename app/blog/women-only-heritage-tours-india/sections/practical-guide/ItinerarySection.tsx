"use client";

export default function BookingSection() {
  const itinerary = [
    {
      day: "Day 1",
      title: "Delhi",
      description:
        "Arrive and settle in. Evening welcome dinner and briefing with your tour manager covering the week ahead, local customs, and safety essentials.",
    },
    {
      day: "Day 2",
      title: "Delhi",
      description:
        "Old Delhi on foot and by cycle rickshaw through Chandni Chowk, Jama Masjid, and a Sikh gurdwara; New Delhi's India Gate and Humayun's Tomb in the afternoon.",
    },
    {
      day: "Day 3",
      title: "Agra",
      description:
        "Drive or take the express train to Agra. Visit the Taj Mahal at sunset and Agra Fort, a UNESCO World Heritage Site and one of the finest surviving examples of Mughal military architecture.",
    },
    {
      day: "Day 4",
      title: "Agra to Jaipur",
      description:
        "Early Taj Mahal sunrise visit, then travel to Jaipur, stopping at Fatehpur Sikri en route.",
    },
    {
      day: "Day 5",
      title: "Jaipur",
      description:
        "Amber Fort by morning light, the City Palace, Jantar Mantar observatory, and an e-rickshaw ride through the Old City with a women-run rickshaw collective.",
    },
    {
      day: "Day 6",
      title: "Jaipur to Udaipur",
      description:
        "Travel onward; free afternoon for spa time, a cooking class, or independent exploration of Udaipur's lakes and palaces.",
    },
    {
      day: "Day 7",
      title: "Udaipur Departure",
      description:
        "Morning boat ride on Lake Pichola past the City Palace, farewell lunch, and transfer for departure.",
    },
  ];

  return (
    <section className="py-1 md:py-4 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-2 md:mb-4">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] font-semibold tracking-wide text-[#2c2c2c]">
            Suggested 7-Day Heritage Itinerary
          </h2>
        </div>

        {/* Itinerary List */}
        <div className="space-y-6">
          {itinerary.map((item, index) => (
            <div key={index} className="flex gap-4 sm:gap-6">
              {/* Day Label */}
              <div className="min-w-[40px] sm:min-w-[60px]">
                <span className="text-[14px] sm:text-[15px] text-[#2c2c2c]">
                  {item.day}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-[11.5px] sm:text-[14px] text-gray-700 leading-relaxed font-light text-justify">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}