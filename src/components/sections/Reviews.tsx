import Image from "next/image";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

export default function ReviewsSection() {
  return (
    <section className="bg-[#f4f4f4] py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h2 className="text-center text-4xl font-semibold text-[#8b6a3d] mb-14">
          Reviews From Travellers
        </h2>

        {/* Top Images */}

        <div className="grid md:grid-cols-3 gap-8 mb-16">

          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/review1.jpg"
              alt="review"
              width={500}
              height={350}
              className="object-cover w-full h-[260px] hover:scale-110 transition duration-500"
            />

            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full text-sm font-medium shadow">
              Róza B ↗
            </div>

          </div>


          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/review2.jpg"
              alt="review"
              width={500}
              height={350}
              className="object-cover w-full h-[260px] hover:scale-110 transition duration-500"
            />
          </div>


          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/review3.jpg"
              alt="review"
              width={500}
              height={350}
              className="object-cover w-full h-[260px] hover:scale-110 transition duration-500"
            />
          </div>

        </div>


        {/* Bottom Review Section */}

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}

          <div>

            <Quote size={70} className="text-green-600 mb-6" />

            <h3 className="text-3xl font-semibold mb-6">
              Our first visit in India
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8">
              For our first visit in India with my husband we decided to book a tour. 
              I contacted few companies and finally I chose India heritage travel. 
              Piyush made our personalised tour program and we could always count on 
              his help before and during our travel. We also can recommend our driver 
              Modaram who spent full week with us and drove us safely on crazy Indian 
              roads and also helped us with reservations and buying souvenirs. 
              We stayed in beautiful boutique hotels and everything was well organised.
            </p>


            {/* Slider Buttons */}

            <div className="flex gap-6">

              <button className="w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                <ArrowLeft />
              </button>

              <button className="w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                <ArrowRight />
              </button>

            </div>

          </div>


          {/* Right Image */}

          <div className="relative flex justify-center">

            <div className="absolute bottom-0 w-[260px] h-[260px] bg-yellow-400 rounded-full -z-10"></div>

            <Image
              src="/review-person.jpg"
              alt="traveller"
              width={260}
              height={380}
              className="rounded-lg object-cover"
            />

            <div className="absolute bottom-10 -left-10 bg-[#8b6a3d] text-white px-6 py-3 rounded-xl shadow">
              <p className="font-semibold">Róza B</p>
              <p className="text-sm">Couple</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}