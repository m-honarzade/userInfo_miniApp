import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;
const Input = ({ id, label, ...props }: InputProps) => {
  return (
    <p className="flex flex-row justify-between gap-2 text-white bg-blue-950 w-[90%] mx-auto p-6 rounded-md">
      <label htmlFor={id} className="">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="w-full rounded-sm p-2 bg-yellow-100"
      />
    </p>
  );
};

export default Input;
