import { ComponentPropsWithoutRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form">;
const Form = (props: FormProps) => {
  return (
    <form {...props} className="w-full flex flex-col gap-2">
      {props.children}
    </form>
  );
};

export default Form;
