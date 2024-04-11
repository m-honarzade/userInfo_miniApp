import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, ...props }, ref) => {
    return (
      <p className="flex flex-row justify-between gap-2 text-white bg-blue-950 w-[90%] mx-auto p-6 rounded-md">
        <label htmlFor={id} className="">
          {label}
        </label>
        <input
          name={id}
          id={id}
          {...props}
          ref={ref}
          className="w-full rounded-sm p-2 bg-yellow-100 text-black"
        />
      </p>
    );
  }
);

export default Input;
