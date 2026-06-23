
"use client";
import Image from "next/image";

export default function AmenitiesSection() {
  return (
    <section className="w-full bg-white">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* HEADER */}

        <div className="mb-10">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            Amenities & Facilities
          </h2>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            Rawla Narlai understands that true luxury extends beyond grand
            architecture and royal heritage. It is equally about comfort,
            wellness, personalized hospitality, and creating an atmosphere
            where every guest feels completely cared for throughout their stay.
          </p>

        </div>

        {/* AMENITIES CARDS */}

        <div className="grid md:grid-cols-3 gap-5 mb-6">

          <div className="border border-[#e7dfd4] bg-white rounded-sm p-5">
            <h3 className="text-[15px] font-semibold text-[#2c2c2c] mb-3">
              Swimming Pool
            </h3>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              Surrounded by the natural beauty of the Aravalli landscape,
              Rawla Narlai's spacious swimming pool offers the perfect place
              to relax after a day spent exploring Elephant Hill, enjoying a
              leopard safari, or discovering the surrounding countryside.
            </p>
          </div>

          <div className="border border-[#e7dfd4] bg-white rounded-sm p-5">
            <h3 className="text-[15px] font-semibold text-[#2c2c2c] mb-3">
              Narlai Spa
            </h3>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              Located in an elegant tented setting beside the pool, the spa
              offers treatments inspired by traditional Indian wellness
              practices. Ayurvedic massages, body therapies, facials, and
              natural healing treatments help guests completely unwind.
            </p>
          </div>

          <div className="border border-[#e7dfd4] bg-white rounded-sm p-5">
            <h3 className="text-[15px] font-semibold text-[#2c2c2c] mb-3">
              Poolside Bar
            </h3>

            <p className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 leading-relaxed font-light">
              As the sun slowly disappears behind the Aravalli Hills, the
              poolside bar becomes one of the most relaxing spots on the
              property. Enjoy refreshing drinks, handcrafted cocktails, and
              peaceful evening views before dinner.
            </p>
          </div>

        </div>

        {/* EXPERIENCES HEADER */}

        <div className="mb-8">

          <h2 className="text-[16px] sm:text-[20px] md:text-[22px] tracking-wide text-[#2c2c2c] font-semibold mb-4">
            Uniquely Special Experiences at Rawla Narlai
          </h2>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14.5px] font-light text-justify">
            This is where Rawla Narlai rises far beyond the traditional
            heritage hotel experience. Guests are invited to immerse
            themselves in unforgettable adventures, authentic cultural
            encounters, and remarkable moments found nowhere else in
            Rajasthan.
          </p>

        </div>

        {/* LEOPARD SAFARI */}

        <div>

          <h3 className="text-[15px] sm:text-[18px] font-semibold text-[#2c2c2c] mb-4">
            Leopard Safari – Into the Jawai Wilds
          </h3>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify mb-4">
            The Jawai Leopard Reserve near Rawla Narlai has become one of
            India's most remarkable wildlife destinations. Unlike traditional
            forest safaris, Jawai's dramatic landscape of granite outcrops and
            open scrublands offers exceptional opportunities to observe Indian
            leopards in their natural habitat, often seen resting atop rocky
            formations during the early morning hours.
          </p>

          <p className="text-gray-700 leading-relaxed text-[12px] sm:text-[13px] md:text-[14px] font-light text-justify">
            Leopard safaris also reveal a thriving ecosystem that supports
            more than 130 bird species, including seasonal migratory birds.
            Visitors may additionally encounter jackals, hyenas, and sloth
            bears while exploring the region alongside experienced naturalist
            guides who bring the landscape to life through their knowledge and
            expertise.
          </p>
        </div>
        <div className="relative mt-6 w-full h-[280px] sm:h-[420px] lg:h-[560px] rounded-sm overflow-hidden shadow-md mb-10">
          
          <Image
              src="https://res.cloudinary.com/dja5yspwr/image/upload/v1782208645/23.06.2026_15.27.00_REC_j45fds.png"
              alt="Luxury Dining Experience at Rawla Narlai Rajasthan"
              fill
              className="object-cover"
          />
  
          </div>

      </div>

    </section>
  );
}