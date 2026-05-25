type FormSelectProps = {
  label?: string;
  options: string[];
  required?: boolean;
  placeholder?: string;
  name?: string;
};

export default function FormSelect({
  label,
  options,
  required,
  placeholder,
  name,
}: FormSelectProps) {

  return (

    <div className="mb-6">

      {/* OPTIONAL LABEL */}
      {label && (
        <label
          className="
            block
            text-[14px]
            sm:text-[15px]
            font-[400]
            text-[#3d352c]
            mb-2.5
            tracking-[0.2px]
          "
        >
          {label}

          {required && (
            <span className="text-[#b77a2a]">
              {" "}*
            </span>
          )}

        </label>
      )}

      {/* SELECT */}
      <select
        name={name}
        required={required}
        defaultValue=""
        className="
          w-full

          border border-[#ddd2c2]

          bg-[#f9f7f3]

          rounded-lg

          px-5
          py-2.5 sm:py-2.5

          text-[12px]
          sm:text-[13px]

          text-[#5b5348]

          font-light
          tracking-[0.2px]

          focus:outline-none
          focus:border-[#9A7A58]

          transition
        "
      >

        {/* PLACEHOLDER */}
        {placeholder && (
          <option
            value=""
            disabled
            className="text-[#9a8f81]"
          >
            {placeholder}
          </option>
        )}

        {/* OPTIONS */}
        {options.map((option, index) => (

          <option
            key={index}
            value={option}
          >
            {option}
          </option>

        ))}

      </select>

    </div>

  );

}