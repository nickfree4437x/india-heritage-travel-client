import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-br from-[#fefcf8] to-[#f9f5ef] overflow-hidden">

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#9b7a50]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#9b7a50]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl border border-[#9b7a50]/10 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          {/* Tag with decorative line */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#9b7a50]"></div>
            <span className="text-xs tracking-[0.3em] text-[#9b7a50] font-medium uppercase">
              Namaste
            </span>
             <div className="w-8 h-[2px] bg-[#9b7a50]"></div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Welcome to{" "}
            <span className="relative inline-block">
              <span className="text-[#9b7a50]">India Heritage</span>
            </span>
            <br />
            <span className="text-[#9b7a50]">Travel</span>
          </h2>

          {/* Description with enhanced styling */}
          <div className="mt-8 space-y-5 text-gray-600 text-justify">
            <div className="space-y-3">
               <p className="text-base leading-relaxed flex gap-3">
                <span className="text-[#9b7a50] text-xl">✦</span>
                Step into a land where every journey tells a story and every sight leaves you in awe.
              </p>
              <p className="text-base leading-relaxed flex gap-3">
                <span className="text-[#9b7a50] text-xl">✦</span>
                With vibrant festivals, colorful landscapes, and the unique charm of India’s rich traditions.
              </p>

              <p className="text-base leading-relaxed flex gap-3">
                <span className="text-[#9b7a50] text-xl">✦</span>
                In serene yoga retreats, spiritual journeys, and the peaceful rhythm of ancient practices.
              </p>
              <p className="text-base leading-relaxed flex gap-3">
                <span className="text-[#9b7a50] text-xl">✦</span>
                From the towering peaks of the Himalayas to the tranquil backwaters of Kerala, majestic forts, 
                palaces, and ancient temples that showcase India’s rich history and culture.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT VIDEO CARD */}
        <div className="relative flex justify-center group">

          {/* Outer glowing ring */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#9b7a50]/30 via-[#9b7a50]/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

          {/* Main Card */}
          <div className="relative rounded-xl overflow-hidden shadow-sm transform transition-transform duration-500">

            {/* Video */}
            <video
              src="/welcome-section/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-[420px] w-[320px] md:w-[550px] object-cover"
            />

            {/* Gradient Overlay - Top to Bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>

            {/* Decorative corner accents */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/40 rounded-tl-lg"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/40 rounded-br-lg"></div>
          </div>
        </div>

      </div>
    </section>
  );
}