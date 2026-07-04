"use client";

const destinations = [
  {
    title: "Jodhpur",
    distance: "105 KM",
    time: "Approx. 2 Hours Drive",
  },
  {
    title: "Udaipur",
    distance: "130 KM",
    time: "Approx. 2 Hours Drive",
  },
  {
    title: "Ranakpur",
    distance: "35 KM",
    time: "Approx. 45 Minutes Drive",
  },
  {
    title: "Kumbhalgarh Fort",
    distance: "60 KM",
    time: "Approx. 1.5 Hours Drive",
  },
];

export default function LocationSection() {
  return (
    <section className="w-full bg-white py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-2">
            Location & How to Reach Rawla Narlai
          </h2>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Located in the heart of Narlai village in Rajasthan's Pali district,
            Rawla Narlai enjoys one of the most strategic and scenic locations
            in the state. Positioned almost midway between Jodhpur and Udaipur,
            it serves as an ideal stop on a luxury Rajasthan itinerary while
            remaining surrounded by the natural beauty of the Aravalli Hills.
          </p>
        </div>

        {/* Distance Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4 md:mb-6">
          {destinations.map((item) => (
            <div
              key={item.title}
              className="bg-[#faf7f3] rounded-md p-5 text-center"
            >
              <h3 className="text-[14px] font-semibold text-[#2c2c2c] mb-2">
                {item.title}
              </h3>

              <p className="text-[#AF956C] text-[18px] font-semibold mb-1">
                {item.distance}
              </p>

              <p className="text-[11px] sm:text-[12px] text-gray-600 font-light">
                {item.time}
              </p>
            </div>
          ))}
        </div>

        {/* Travel Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-4 md:">
          <div className="border border-gray-200 rounded-md p-5">
            <h3 className="text-[14px] md:text-[15px] font-semibold text-[#2c2c2c] mb-2">
              Nearest Airports
            </h3>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              Rawla Narlai can be conveniently accessed via both{" "}
              <strong>Jodhpur International Airport</strong> and{" "}
              <strong>Maharana Pratap Airport, Udaipur</strong>.
              Both airports offer excellent connectivity with major
              Indian cities and select international routes.
            </p>
          </div>

          <div className="border border-gray-200 rounded-md p-5">
            <h3 className="text-[14px] md:text-[15px] font-semibold text-[#2c2c2c] mb-2">
              Nearest Railway Station
            </h3>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              The nearest railway station is{" "}
              <strong>Falna Railway Station</strong>, located
              approximately 45 km from Rawla Narlai. Falna enjoys
              regular rail connections with Jodhpur, Mumbai,
              Delhi, and several other major destinations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}