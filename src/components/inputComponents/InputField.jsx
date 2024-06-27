import React from "react";

const InputField = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  required,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`p-5 border ${
          error ? "border-red-500" : "border-[#101010] border-[2px]"
        } outline-none rounded-lg w-full`}
        required={required}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default InputField;
