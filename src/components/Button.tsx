import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"a">;
const Button = (props: ButtonProps | AnchorProps) => {
  if (props.el === "button")
    return (
      <div className="">
        <button
          {...props}
          className="text-white text-sm rounded-md py-2 px-4 border border-gray-700"
        ></button>
      </div>
    );
  return (
    <a
      {...props}
      className="text-white text-sm rounded-md py-2 px-4 border border-gray-700 hover:underline hover:underline-offset-4 hover:text-yellow-300 hover:border-none"
    >
      Link
    </a>
  );
};

export default Button;
