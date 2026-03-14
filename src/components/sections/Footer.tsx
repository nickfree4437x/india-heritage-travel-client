import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 pt-16 pb-10 px-6">

      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-5">

        {/* About */}

        <div>

          <h3 className="font-semibold text-white mb-4">
            About Us
          </h3>

          <ul className="space-y-2 text-sm">
            <li>Welcome Letter</li>
            <li>How We Work</li>
            <li>Raju's Story</li>
            <li>Our Team</li>
            <li>Our IRI Logo</li>
          </ul>

        </div>


        {/* Travel Experiences */}

        <div>

          <h3 className="font-semibold text-white mb-4">
            Travel Experiences
          </h3>

          <ul className="space-y-2 text-sm">
            <li>Curated Journeys</li>
            <li>Day Journeys</li>
            <li>Destinations</li>
            <li>Festivals</li>
            <li>Educational Student Journeys</li>
            <li>Spiritual Ancestral Healing Rituals</li>
          </ul>

        </div>


        {/* Services */}

        <div>

          <h3 className="font-semibold text-white mb-4">
            Services
          </h3>

          <ul className="space-y-2 text-sm">
            <li>Car Rental</li>
            <li>Social Responsibility</li>
            <li>Testimonials</li>
            <li>Blog</li>
            <li>Online Payment</li>
          </ul>

        </div>


        {/* Policies */}

        <div>

          <h3 className="font-semibold text-white mb-4">
            Policies
          </h3>

          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>FAQs</li>
          </ul>

        </div>


        {/* Contact */}

        <div>

          <button className="bg-[#f0a041] text-white px-6 py-3 rounded mb-6 hover:bg-[#d8892e] transition">
            Request Tailor Made Journey
          </button>

          <p className="text-sm leading-relaxed">
            Address- 98, Nemi Nagar Ext, Vaishali Nagar,
            Jaipur-302021 Rajasthan, India
          </p>

          <p className="text-sm mt-3">
            Landline Phone – 0091-141-4004969
          </p>

          <p className="text-sm">
            Mobile – 0091-9351154969 / 0091-9928799909
          </p>


          {/* Social Icons */}

          <div className="flex gap-4 mt-6">

            <Facebook className="cursor-pointer hover:text-white" />
            <Instagram className="cursor-pointer hover:text-white" />

          </div>

        </div>

      </div>


      {/* Bottom */}

      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm">

        <p>
          © 2020 All rights reserved.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">

          <span>Terms & Conditions</span>
          <span>Cancellation Policy</span>
          <span>Refund Policy</span>

        </div>

      </div>

    </footer>
  );
}