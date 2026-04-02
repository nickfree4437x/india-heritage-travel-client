import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#f8f6f2] to-[#f1ede7] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#9b7a50]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#9b7a50]/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#9b7a50] mb-4 tracking-wide">
            Namaste 🙏
          </h2>

          <h3 className="text-3xl font-semibold text-gray-800">
            Welcome To <span className="text-[#9b7a50]">India Heritage Travel</span>
          </h3>

          <div className="w-24 h-1 bg-[#9b7a50] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div className="space-y-8 text-gray-700">

            <p className="text-lg leading-relaxed text-gray-600">
              Step into a land where every journey tells a story and every sight leaves you in awe.
            </p>

            {/* Cards */}
            <div className="space-y-6">

              <div className="p-5 rounded-xl bg-white/70 backdrop-blur-md shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
                <h4 className="font-semibold text-[#9b7a50] text-lg mb-1">
                  Feel the essence
                </h4>
                <p className="text-sm text-gray-600">
                  With vibrant festivals, colorful landscapes, and the unique charm of India’s rich traditions.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/70 backdrop-blur-md shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
                <h4 className="font-semibold text-[#9b7a50] text-lg mb-1">
                  Discover yourself
                </h4>
                <p className="text-sm text-gray-600">
                  In serene yoga retreats, spiritual journeys, and the peaceful rhythm of ancient practices.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/70 backdrop-blur-md shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
                <h4 className="font-semibold text-[#9b7a50] text-lg mb-1">
                  Explore with us
                </h4>
                <p className="text-sm text-gray-600">
                  From the Himalayas to Kerala’s backwaters, majestic forts, palaces, and temples await you.
                </p>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">

            {/* Decorative border */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#9b7a50]/20 to-transparent rounded-2xl blur-xl"></div>

            <Image
              src="/welcome-section/bg3.jpg"
              alt="India Travel"
              width={550}
              height={380}
              className="relative h-96 rounded-lg object-cover shadow-sm transition duration-500"
            />

          </div>

        </div>

      </div>
    </section>
  );
}