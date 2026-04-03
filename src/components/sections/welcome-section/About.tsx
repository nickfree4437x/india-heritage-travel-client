import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="relative py-24 px-6 bg-[#f8f6f2] overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#9b7a50]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#9b7a50]/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-3.5xl font-bold text-[#9b7a50] tracking-wide">
            Namaste
          </h2>

          <h3 className="mt-4 text-2xl md:text-2xl font-bold text-gray-800">
            Welcome To <span className="text-[#9b7a50]">India Heritage Travel</span>
          </h3>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT - Clean Content */}
          <div className="space-y-6 text-gray-600">

            <p className="text-lg leading-relaxed">
              Step into a land where every journey tells a story and every sight leaves you in awe.
            </p>

            <p className="text-base leading-relaxed">
              From vibrant festivals and colorful landscapes to ancient traditions and timeless culture, India offers experiences that go far beyond travel.
            </p>

            <p className="text-base leading-relaxed">
              Discover serenity through spiritual journeys, reconnect with yourself in peaceful retreats, and explore destinations that stay with you forever.
            </p>

          </div>

          {/* RIGHT - Enhanced Image */}
          <div className="relative flex justify-center">

            {/* Glow Layer */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#9b7a50]/20 to-transparent rounded-2xl blur-2xl"></div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-xl shadow-md">
              <Image
                src="/welcome-section/bg3.jpg"
                alt="India Travel"
                width={550}
                height={380}
                className="h-[380px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}