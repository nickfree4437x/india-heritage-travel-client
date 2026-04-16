export default function RecommendedTours() {
  const tours = [
    {
      title: "Rajasthani Heritage Retreat",
      desc: "Explore the beautiful landscapes and rich culture of this region.",
      img: "/adventure/rajasthan.jpg",
    },
    {
      title: "Royal-Triangle-Odyssey",
      desc: "Experience adventure and breathtaking views on this thrilling tour.",
      img: "/adventure/triangle.jpg",
    },
    {
      title: "Southern Delights: A Journey Through Time",
      desc: "Discover the essence of Southern India on the ‘Southern Delights’ 17-day tour.",
      img: "/adventure/south.jpg",
    },
  ];

  return (
    <section className="mt-20 bg-[#f8f8f8] py-12 rounded-xl shadow">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          Recommended Tours
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={tour.img}
                alt={tour.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-red-500 mb-2">
                  {tour.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {tour.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}