import FormInput from "../components/FormInput";

export default function PersonalDetails() {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="mb-5 sm:mb-6">
        <h3 className="
          text-[16px] sm:text-[18px] md:text-[20px]
          tracking-wide
          text-[#2c2c2c]
          font-semibold
          -mb-2
        ">
          Personal Details
        </h3>
      </div>

      {/* Name */}
      <div className="w-full mb-5 sm:mb-6">
        <FormInput
          name="name"
          placeholder="Your Name *"
          required
        />
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <div className="w-full">
          <FormInput
            type="email"
            name="email"
            placeholder="Email Address *"
            required
          />
        </div>
        <div className="w-full">
          <FormInput
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            required
          />
        </div>
      </div>
    </div>
  );
}