import FormInput from "./FormInput";

export default function PersonalDetails() {
  return (
    <div className="w-full">

      {/* NAME */}
      <div className="w-full mb-5 sm:mb-6">

        <FormInput
          placeholder="Your Name"
          required
        />

      </div>

      {/* EMAIL + PHONE */}
      <div
        className="
          grid
    grid-cols-1
    md:grid-cols-2
    gap-x-6
        "
      >

        <div className="w-full">
          <FormInput
            type="email"
            placeholder="Email Address"
            required
          />
        </div>

        <div className="w-full">
          <FormInput
            type="tel"
            placeholder="Phone Number"
            required
          />
        </div>

      </div>

    </div>
  );
}