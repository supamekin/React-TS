// InputField.tsx
import React from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder: string;
  register?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  error: string | undefined;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder,
  register,
  error,
}) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-1 max-[1000px]:text-white">
      {label}
    </label>
    <input
      type={type}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder={placeholder}
      {...register}
    />
    {error && <div className=" text-red-500 text-xs mt-2">{error}</div>}
  </div>
);

export default InputField;
