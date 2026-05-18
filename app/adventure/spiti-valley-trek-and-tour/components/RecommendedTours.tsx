export default function RecommendedTours() {
  const tours = [
    {
      title: "Rajasthani Heritage Retreat",
      desc: "Explore the beautiful landscapes and rich culture of this region.",
      img: "/adventure/rajasthan/rajasthan.jpg",
    },
    {
      title: "Royal-Triangle-Odyssey",
      desc: "Experience adventure and breathtaking views on this thrilling tour.",
      img: "/adventure/rajasthan/triangle.jpg",
    },
    {
      title: "Southern Delights: A Journey Through Time",
      desc: "Discover the essence of Southern India on the ‘Southern Delights’ 17-day tour.",
      img: "/adventure/south/kerala.jpg",
    },
  ];

  return (
    <section className="py-8 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Recommended Tours
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <img
                src={tour.img}
                alt={tour.title}
                className="w-full h-56 object-cover"
              />
              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/10
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
              />

              <div className="p-5">
                <h3 className="text-[17px] font-semibold text-red-500 leading-snug group-hover:underline">
                  {tour.title}
                </h3>

                <p className="text-gray-700
                    text-[13px]
                    font-light
                    leading-relaxed
                    line-clamp-4">
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