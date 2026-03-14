import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="bg-[#f3f3f3] py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-12">

          <h2 className="text-4xl font-semibold text-[#9b7a50] mb-4">
            Namaste!
          </h2>

          <h3 className="text-3xl font-semibold text-[#9b7a50]">
            Welcome To India Heritage Travel
          </h3>

        </div>

        {/* Content */}

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}

          <div className="text-center md:text-left space-y-8 text-gray-700 leading-relaxed">

            <p className="text-lg">
              Step into a land where every journey tells a story and every sight leaves you in awe.
            </p>

            <div>
              <h4 className="font-semibold text-[#9b7a50] text-lg mb-2">
                Feel the essence
              </h4>

              <p>
                With vibrant festivals, colorful landscapes, and the unique charm of India’s rich traditions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#9b7a50] text-lg mb-2">
                Discover yourself
              </h4>

              <p>
                In serene yoga retreats, spiritual journeys, and the peaceful rhythm of ancient practices.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#9b7a50] text-lg mb-2">
                Explore with us
              </h4>

              <p>
                From the towering peaks of the Himalayas to the tranquil backwaters of Kerala, majestic forts,
                palaces, and ancient temples that showcase India’s rich history and culture.
              </p>
            </div>

          </div>


          {/* Right Image */}

          <div className="flex justify-center">

            <Image
              src="/children-water-pump.jpg"
              alt="Village Children"
              width={520}
              height={360}
              className="rounded-md object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}