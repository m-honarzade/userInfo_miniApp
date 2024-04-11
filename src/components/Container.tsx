import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Container = <C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) => {
  const Component = as || "div";
  return (
    <Component
      className="bg-gray-400 text-white border border-gray-700 rounded-md p-2"
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
