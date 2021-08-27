import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}
export const Button = ({
  variant = "btn-primary",
  className,
  children,
  ...rest
}: ButtonProps) => (
  <button className={`${className} ${variant}`} {...rest}>
    {children}
  </button>
);
