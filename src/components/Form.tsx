import { ComponentPropsWithoutRef, FormEvent } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};
const Form = ({ onSave, children, ...otherProps }: FormProps) => {
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
  };
  return (
    <form
      onSubmit={submitHandler}
      {...otherProps}
      className="w-full flex flex-col gap-2"
    >
      {children}
    </form>
  );
};

export default Form;
