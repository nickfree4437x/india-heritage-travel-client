import TourCard from "@/src/components/tours/TourCard";

export default function HolidayTourPackagesPage() {

  const tours = [
    {
      title: "Royal Rajasthan Tour",
      image: "/tours/rajasthan.jpg",
      days: "10 Days",
      location: "Jaipur, Udaipur, Jodhpur",
    },
    {
      title: "Golden Triangle Tour",
      image: "/tours/golden-triangle.jpg",
      days: "6 Days",
      location: "Delhi, Agra, Jaipur",
    },
    {
      title: "Kerala Backwaters Tour",
      image: "/tours/kerala.jpg",
      days: "7 Days",
      location: "Kochi, Alleppey, Munnar",
    },
    {
      title: "Himalayan Escape",
      image: "/tours/himalaya.jpg",
      days: "8 Days",
      location: "Manali, Shimla",
    },
  ];

  return (
    <main className="pt-28">

      {/* Hero Section */}

      <section className="max-w-7xl mx-auto px-6 text-center mb-16">

        <h1 className="text-4xl font-bold mb-4">
          Holiday Tour Packages in India
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the beauty of India with our carefully designed holiday tour
          packages. Explore heritage cities, scenic landscapes, vibrant
          festivals and unforgettable cultural experiences.
        </p>

      </section>


      {/* Popular Tours */}

      <section className="max-w-7xl mx-auto px-6 mb-20">

        <h2 className="text-2xl font-semibold mb-8">
          Popular Holiday Tours
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {tours.map((tour, index) => (
            <TourCard key={index} tour={tour} />
          ))}

        </div>

      </section>


      {/* Tour Categories */}

      <section className="bg-gray-50 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-10 text-center">
            Explore Tour Categories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="font-semibold mb-3">
                Curated Tours
              </h3>

              <p className="text-gray-500">
                Handpicked travel experiences designed for luxury and comfort.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="font-semibold mb-3">
                Festival Tours
              </h3>

              <p className="text-gray-500">
                Celebrate India's colorful festivals with immersive travel.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="font-semibold mb-3">
                Health & Wellness Tours
              </h3>

              <p className="text-gray-500">
                Relax with yoga retreats, spa experiences and Ayurveda therapy.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}